import client from "./client";

const { REACT_APP_APP_NAME } = process.env;
const localStorageName = `${REACT_APP_APP_NAME}-Shopping-Cart`;

const addProductToCart = (stockId, amount, me) => {
  const newCartItem = {
    stockId: parseInt(stockId),
    amount: amount,
  };

  console.log(me);
  if (me) {
    newCartItem.user = me.id;
    addProductToDatabase(newCartItem);
  } else {
    addProductToLocalStorage(stockId, newCartItem);
  }
};
const addProductToDatabase = async (newCartItem) => {
  try {
    const postResult = await client.post(
      `/shoppingCards/singleByStockId/${newCartItem.stockId}`,
      newCartItem
    );

    console.log(postResult);
  } catch (e) {
    console.error(e.message);
  }
};
const addProductToLocalStorage = (stockId, newCartItem) => {
  const cart = localStorage.getItem(localStorageName);
  if (!cart) {
    localStorage.setItem(localStorageName, JSON.stringify([newCartItem]));
  } else {
    const cartObj = JSON.parse(cart);
    console.log(cartObj);
    const currentObj = cartObj.find(
      (singleCartObj) => singleCartObj.stockId === parseInt(stockId)
    );
    if (currentObj) {
      cartObj.forEach((singleCartObj) => {
        if (singleCartObj.stockId === parseInt(stockId)) {
          singleCartObj.amount = singleCartObj.amount + 1;
        }
      });
    } else {
      cartObj.push(newCartItem);
    }

    const serializedCart = JSON.stringify(cartObj);
    localStorage.setItem(localStorageName, serializedCart);
  }
};

const getShoppingCartItems = async (me) => {
  const chartItems = [];
  if (me) {
    const { data } = await client.get(`/shoppingCards/user/price/${me.id}`);
    for (const item of data) {
      const product = await client.get(`/products/${item.product}`);
      item.product = product;
      const chartItem = {
        id: item.id,
        title: product.data.title,
        quantity: item.amount,
        size: item.size,
        color: item.color,
        price: item.price,
        media: product.data.media,
      };
      chartItems.push(chartItem);
    }
  } else {
    let data = localStorage.getItem(localStorageName);
    if (!data) return [];
    data = JSON.parse(data);
    for (const item of data) {
      const { data } = await client.get(`/products/stock/id/${item.stockId}`);
      console.log({ data });

      const chartItem = {
        id: item.stockId,
        title: data.title,
        quantity: item.amount,
        size: data.size,
        color: data.color,
        price: data.price,
        media: data.media,
      };
      chartItems.push(chartItem);
    }
  }
  console.log(chartItems);
  return chartItems;
};

const deleteShoppingCardItem = async (me, id) => {
  if (me) {
    try {
      const result = await client.delete(`/shoppingCards/deleteSingle/${id}`);
      console.log({ result: result.status });
      return result.status < 300;
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("Delete cart item from local storage");
    let localStorageCart = JSON.parse(localStorage.getItem(localStorageName));
    localStorageCart = localStorageCart.filter((item) => item.stockId !== id);
    localStorage.setItem(localStorageName, JSON.stringify(localStorageCart));
  }
};

const transferLocalStorageToDatabase = async (userId) => {
  const localStorageCart = JSON.parse(localStorage.getItem(localStorageName));
  if (!localStorageCart) {
    return;
  }

  try {
    const postResult = await client.post(
      `/shoppingCards/manyByStock/${userId}`,
      localStorageCart
    );
    localStorage.removeItem(localStorageName);

    console.log(postResult);
  } catch (e) {
    console.error(e.message);
  }
};

const updateShoppingCartItem = async (shoppingCartItem, me) => {
  console.log({ shoppingCartItem });
  if (me) {
    // Update item in DB
    try {
      const result = await client.patch(
        `/shoppingCards/${shoppingCartItem.id}`,
        {
          amount: shoppingCartItem.quantity,
        }
      );
      console.log(result);
      return result.status < 400;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    // Update item in localStorage
    let localStorageCart = JSON.parse(localStorage.getItem(localStorageName));
    for (const cart of localStorageCart) {
      if (cart.stockId === shoppingCartItem.id) {
        console.log("Update");
        cart.amount = shoppingCartItem.quantity;
      }
    }
    console.log({ localStorageCart: localStorageCart });
    localStorage.setItem(localStorageName, JSON.stringify(localStorageCart));

    return true;
  }
};

export {
  addProductToCart,
  transferLocalStorageToDatabase,
  getShoppingCartItems,
  deleteShoppingCardItem,
  updateShoppingCartItem,
};
