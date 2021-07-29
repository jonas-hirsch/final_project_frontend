import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Home = () => {

    const history = useHistory();

    return (
        //     <div className='root'>
        //         <div style={{ width: "100%", height: "100%", textAlign: 'center', margin: '50px auto'}} >
        //             <div >
        //                 <img src='#' alt='#' />
        //                 <Link to='/catalog'><button>Shop Now</button></Link>
        //                 <h3>Discover</h3>
        //                 <p>Minimal and Trends for Developer</p>
        //             </div>
        //             <div>
        //                 <img src='#' alt='#'/>
        //                 <h3>Shirts</h3>
        //                 <p>Developer Shirts for everybody</p>
        //                 <a href='/catalog'>Discover more</a>
        //             </div>
        //             <div>
        //                 <img src='#' alt='#'/>
        //                 <h3>Gear</h3>
        //                 <p>For late night coding sessions</p>
        //                 <a href='#'>Discover more</a>
        //             </div>
        //             <div>
        //                 <img src='#' alt='#'/>
        //                 <h3>Accesoire</h3>
        //                 <p>Always have the little Accessoir which makes you special</p>
        //                 <a href='#'>Discover more </a>
        //             </div>
        //             <div className="eat_code_sleep_container">
        //                 <h1>EAT. SLEEP. CODE. REPEAT.</h1> 
        //                 <Link to='/catalog'><button>Shop Now</button> </Link>
        //             </div>
        //             <div>
        //                 <img src='#' alt='#'/>
        //                 <h3>Keep in touch</h3>
        //                 <p>Subscribe to our Newsletter and always stay Up to Date</p>
        //                 <input type='text' placeholder='email...' />
        //                 <button type='submit' >Subscribe</button>
        //             </div>
        //         </div>
        // </div>
        <div className=''>
            <div className=" w-full mb-20 max-w-full h-auto">
                <div className="text-left" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '60vh' }}>
                    <div className="px-4 md:px-20 py-40  text-primary">
                        <p className="text-5xl font-bold mb-2">Lorem ipsum dolor sit amet.</p>
                        <p className="text-xl mb-20 text-disabled w-full md:w-1/2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum a quisquam animi nam asperiores fugit nulla harum pariatur qui repellendus.</p>
                        <button onClick={() => history.push('/catalog')} className='bg-white text-secondary font-regular py-2.5 px-6 rounded-default text-2xl shadow-xl active:bg-white active:text-secondary mb-14'>Shop now</button>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className="mb-10 pl-4 md:ml-30 md:px-20 flex flex-col ">
                <span className="text-4xl text-secondary font-semibold">Discover</span>
                <span className="text-xl font-normal text-body"
                >Lorem ipsum dolor sit amet.</span>
            </div>

            <div className="px-4 mb-28">
                <div className=' rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6'>
                    {/* Extra Wish */}
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt='Example' className='w-full rounded-default' />
                            <span><p className=" absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">Joane Doe  &#8594;</p></span>
                        </button>
                    </div>
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt='Example' className='w-full rounded-default' />
                            <span><p className=" absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">Joane Doe  &#8594;</p></span>
                        </button>
                    </div>
                </div>

                <div className="rounded-default category-wrapper sm:w-full md:flex items-center justify-center md:space-x-6">
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt='Example' className='w-full rounded-default' />
                            <span><p className=" absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">Joane Doe  &#8594;</p></span>
                        </button>
                    </div>
                    <div className="rounded-default relative w-full lg:w-1/3 overflow-hidden pb-3">
                        <button onClick={() => history.push('/catalog')} >
                            <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60" alt='Example' className='w-full rounded-default' />
                            <span><p className=" absolute text-4xl text-secondary font-semibold tracking-wide bottom-6 ">Joane Doe  &#8594;</p></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Hero */}
            <div className=" w-full max-w-full">
                <div className="text-left" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '60vh' }}>
                    <div className="px-4 md:px-20 py-40 text-primary">
                        <p className="text-5xl font-bold mb-2">Lorem ipsum dolor sit amet.</p>
                        <p className=" text-xl mb-20 text-disabled w-full md:w-1/2 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum a quisquam animi nam asperiores fugit nulla harum pariatur qui repellendus.</p>
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