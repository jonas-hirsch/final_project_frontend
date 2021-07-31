import client from "./client";

const { REACT_APP_APP_NAME } = process.env;
const localStorageName = `${REACT_APP_APP_NAME}-Shopping-Cart`;

const addProductToCart = (me, stockId, amount) => {
  const newCartItem = {
    stockId: parseInt(stockId),
    amount: amount,
    user: me.id,
  };

  if (me) {
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

const transferLocalStorageToDatabase = async (userId) => {
  console.log("userId:");
  console.log(userId);
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

export { addProductToCart, transferLocalStorageToDatabase };
