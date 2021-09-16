import React from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const notify = () => toast("Thanks for Subscribing!");
    const history = useHistory();
    

    return (
        <div>
            <div className="justify-center text-center w-full mb-20 max-w-full h-auto">
                <div className="text-center" style={{backgroundColor: '#222'}}>
                    <div className="justify-center text-center pt-24 px-4 text-primary md:ml-20 lg:ml-20">
                        <div className="text-center font-bold mb-2" style={{ fontSize: '90px'}}><span>EAT</span> / <span className="text-link">SLEEP</span><br /> <span className="text-link">CODE</span> / <span>REPEAT</span></div>
                        <div className="text-3xl mt-10  mb-20 text-disabled w-full text-center "><span className="text-link font-semibold">CODE</span> hard so you can <span className="font-semibold">SHOP</span> harder.</div> 
                        <button onClick={() => history.push('/catalog')} className='bg-white text-secondary font-regular py-2.5 px-6 rounded-default text-2xl shadow-xl active:bg-white active:text-secondary mb-14'>Shop now</button>
                    </div>
                </div>
            </div>
            <div>
            </div>

            <div className="justify-center text-center mb-10 pl-4 md:ml-30 md:px-20 flex flex-col ">

                <span className="text-4xl text-secondary font-semibold">Discover</span>
                <span className="text-xl font-normal text-body"
                >ENJOY WITH LOVE !</span>
            </div>

            <div className="px-4 md:m-28">
                <div className=' rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6'>
                    {/* Extra Wish */}
                    <div className="rounded-default relative w-full md:w-3/4 overflow-hidden pb-3 lg:w-1/3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="hoodie.jpg" alt='Hoodies' className='w-full rounded-default' />
                            <span><p className=" absolute pl-2 text-4xl text-secondary font-semibold tracking-wide bottom-6 ">HOODIE &#8594;</p></span>
                        </button>
                    </div>
                    <div className="rounded-default relative w-full md:w-3/4 overflow-hidden pb-3 lg:w-1/3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="tshirt.jpg" alt='T-Shirts' className='w-full rounded-default' />
                            <span><p className=" absolute pl-2 text-4xl text-secondary font-semibold tracking-wide bottom-6 ">SHIRT  &#8594;</p></span>

                        </button>
                    </div>
                </div>

                <div className="rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6">
                    <div className="rounded-default relative w-full md:w-3/4 overflow-hidden pb-3 lg:w-1/3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="cups.jpg" alt='Cupsimage' className='w-full rounded-default' />
                            <span><p className=" absolute pl-2 text-4xl text-white text-secondary font-semibold tracking-wide bottom-6 ">GEAR  &#8594;</p></span>

                        </button>
                    </div>
                    <div className="rounded-default relative w-full md:w-3/4 overflow-hidden pb-3 lg:w-1/3">
                        <button onClick={() => history.push('/catalog')} >

                            <img src="books.jpg" alt='Booksimage' className='w-full rounded-default' />
                            <span><p className=" absolute pl-2 text-4xl text-white font-semibold tracking-wide bottom-6 ">BOOKS  &#8594;</p></span>

                        </button>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className=" w-full max-w-full">
                <div className="text-left" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '40vh' }}>
                    <div className="justify-center text-center pt-20 px-4 text-primary md:ml-20 lg:ml-20">
                        <p className="font-bold mb-2" style={{ fontSize: "6vw" }}>EAT.SLEEP.CODE.REPEAT</p>
                        <button onClick={() => history.push('/catalog')} className='bg-white text-secondary font-regular py-2.5 px-6 rounded-default text-2xl shadow-xl active:bg-white active:text-secondary mb-14'>Shop now</button>
                    </div>
                </div>
            </div>
            {/* Subscribe */}
            <div className='px-4 pb-20 pt-20 w-md mx-auto md:px-20 md:max-w-full md:flex md:items-center md:justify-around'>
                <div className='px-4'>
                    <h2 className='font-semibold text-4xl text-secondary md:pb-4'>Keep in touch</h2>
                    <div className='text-xl pt-1.5 text-body '>Subscribe to our newsleter for updates and exclusive special offers.</div>
                </div>
                <div className="px-4 pt-10 pb-6">
                    <input type="text" name="email" id="email" placeholder="email@example.com" className="w-full border border-light rounded-default py-2 px-4 focus:outline-none 
					text-body focus:ring text-center md:py-3 md:px-20 "/>
                </div>
                <div >
                <button onClick={notify} className='w-full bg-primary text-primary font-regular py-2.5 px-5 rounded-default text-xl shadow-xl active:bg-p-hover my-2 md:w-full md:mx-auto md:px-20'>Subscribe</button>
                <ToastContainer />
                </div>
            </div>
        </div>

    )
}

export default Home