import React from "react";
import { useHistory } from "react-router-dom";


const Home = () => {

    const history = useHistory();
    

    return (
        <div className=''>
            <div className=" w-full mb-20 max-w-full h-auto text-center justify-center">
                <div className="" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '70vh' }}>
                    <div className="pt-24 px-4 text-primary md:ml-20 lg:ml-20">
                        {/* <p className=" heading1 text-5xl font-bold mb-2">CODE MEANS THE WORLD TO US</p> */}
                        {/* <p className="text-xl mb-20 text-disabled w-full md:w-1/2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum a quisquam animi nam asperiores fugit nulla harum pariatur qui repellendus.</p> */}
                        <button onClick={() => history.push('/catalog')} className='bg-white text-secondary font-regular py-2.5 px-6 rounded-default text-2xl shadow-xl active:bg-white active:text-secondary mb-14'>Shop now</button>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="mb-10 pl-4 md:ml-30 md:px-20 flex flex-col md:text-center">
                <span className="text-4xl text-secondary font-semibold">Discover</span>
                <span className="text-xl font-normal text-body"
                >ENJOY WITH LOVE</span>
            </div>

            <div className="px-4 mb-28">
                <div className=' rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6'>
                    {/* Extra Wish */}
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2766&q=80" alt='Example' className='w-full rounded-default' />
                            <span><p className=" m-2 absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">HOODIE'S  &#8594;</p></span>
                        </button>
                    </div>
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80" alt='Example' className='w-full rounded-default' />
                            <span><p className="m-2 absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">SHIRTS  &#8594;</p></span>
                        </button>
                    </div>
                </div>

                <div className="rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6">
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1602632066350-4206c806ebdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt='Example' className='w-full rounded-default' />
                            <span><p className="m-2 absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">GEAR  &#8594;</p></span>
                        </button>
                    </div>
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1484239398315-f1681ef72fe6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80" alt='Example' className='w-full rounded-default' />
                            <span><p className="m-2 absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">STICKER  &#8594;</p></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className=" w-full max-w-full">
                <div className="text-left" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622676666769-1a0407cf10a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '60vh' }}>
                    <div className="heading1 text-center justify-center pt-20 px-4 text-primary md:ml-20 lg:ml-20">
                        <h2 className="text-5xl font-bold mb-2">EAT.CODE.SLEEP.REPEAT</h2>
                        <p className=" text-xl mb-20 text-disabled w-full md:w-1/2 "></p>
                        <button onClick={() => history.push('/catalog')} className='bg-white text-secondary font-regular py-2.5 px-6 rounded-default text-2xl shadow-xl active:bg-white active:text-secondary mb-14'>Shop now</button>
                    </div>
                </div>
            </div>
            {/* Subscribe */}
            <div className='px-4 pb-20 pt-20 w-md md:px-20 md:max-w-full md:flex md:items-center md:justify-between '>
                <div className='pt-4'>
                    <h2 className='font-semibold text-4xl text-secondary md:pb-4'>Keep in touch</h2>
                    <span className='text-xl pt-1.5 text-body '>Subscribe to our newsleter for updates and exclusive special offers.</span>
                </div>
                <div className="pt-14 pb-6 md:p-0">
                    <input type="text" name="email" id="email" placeholder="email@example.com" className="w-full border border-light rounded-default py-2 px-4 focus:outline-none 
					text-body focus:ring text-center md:py-3 md:px-28 "/>
                </div>
                <button className='bg-primary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-p-hover my-2 w-full md:w-1/5'>Subscribe</button>
            </div>
        </div>

    )
}

export default Home