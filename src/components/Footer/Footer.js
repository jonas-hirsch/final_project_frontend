import React from 'react';
//import './Footer.css';
import { LogoTwitter24, LogoFacebook24, LogoInstagram24 } from '@carbon/icons-react'



const Footer = () => {
    return (
        <>
        <div>
				<footer className="bg-primary text-primary">
					<div className="container mx-auto px-2 pt-10 pb-6 ">
						<div className="flex flex-wrap">
							<div className="w-full md:w-1/4 text-center md:text-center mb-4 md:pr-20 ">
								<p className="uppercase mb-4 font-bold text-3xl">JBM</p>
								<ul className="mb-4 flex justify-center ">
									<li className="mt-2">
										<a href="/#"><LogoTwitter24 className="text-primary hover:opacity-75" /></a>
									</li>
									<li className="mt-2 px-4">
										<a href="/#" ><LogoFacebook24 className=" text-primary hover:opacity-75" /></a>
									</li>
									<li className="mt-2">
										<a href="/#" ><LogoInstagram24 className="text-primary hover:opacity-75" /></a>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/4 text-center md:text-left mb-4">
								<p className="uppercase mb-4 font-semibold text-xl">Quick Links</p>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="/#"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Order Status</a>
									</li>
									<li className="mt-2">
										<a
											href="/contact"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Help</a>
									</li>
									<li className="mt-2">
										<a
											href="/contact"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Support</a>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/4 text-center md:text-left mb-4">
								<p className="uppercase mb-4 font-semibold text-xl">Legal</p>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="/legalpages"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Terms</a>
									</li>
									<li className="mt-2">
										<a
											href="/legalpages"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Privacy</a>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-1/4 text-center md:text-left mb-4">
								<p className="uppercase mb-4 font-semibold text-xl">Contact</p>
								<ul className="mb-4">
									<li className="mt-2">
										<a
											href="/contact"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Phone Number</a>
									</li>
									<li className="mt-2">
										<a
											href="/contact"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Email</a>
									</li>
									<li className="mt-2">
										<a
											href="/contact"
											className="hover:underline text-primary text-md hover:opacity-75"
										>Address</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w-full text-center pb-4 mx-auto">
								<p className="mb-4 text-white font-normal text-base">Copyright © 2021 JBM</p>
								
							</div>
				</footer>
			</div>
        </>
    )
}

export default Footer
