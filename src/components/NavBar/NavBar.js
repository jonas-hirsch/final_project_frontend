import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu24, Home24, Email24, ShoppingBag24, ShoppingCart24 } from '@carbon/icons-react';


const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false)


	return (
		<>
			<div className='bg-transparent px-4 pt-2 pb-2 text-secondary'>
				<nav className="relative flex flex-wrap items-center justify-between ">
					<div className=" container px-3 mx-auto flex flex-wrap items-center justify-between">
						<div className="w-full text-left relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
							<Link to='/'
								className="text-2xl font-semibold inline-block mr-4 py-2"
							>
								JBM
							</Link>
							<button
								className=" text-xl px-2 py-1 block lg:hidden outline-none focus:outline-none"
								type="button"
								onClick={() => setIsOpen(!isOpen)}
							>
								<Menu24 />
							</button>
						</div>
						<div
							className={
								`lg:flex flex-grow items-center ${isOpen ? "flex items-center justify-between" : "hidden flex-row"}`
							}
						>
							<ul className="flex flex-row list-none items-start lg:flex-row  lg:ml-auto">
								<li className="nav-item">
									<Link to='/' className="px-4 py-2 flex items-center text-md uppercase  hover:opacity-50"
									><span>
											<Home24 className="mr-4" />
										</span>Home
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/catalog"
										className="px-4 py-2 flex items-center text-md uppercase  hover:opacity-50
										"
									><span>
											<ShoppingBag24 className="mr-4" />
										</span>Shop
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/contact"
										className="px-4 py-2 flex items-center text-md uppercase   hover:opacity-50"
									><span>
											<Email24 className="mr-4" />
										</span>Contact
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/myCart"
										className="px-4 py-2 flex items-center text-md uppercase   hover:opacity-50"
									><span>
											<ShoppingCart24 className="mr-4" />
										</span>Cart
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

		</>
	)
}

export default NavBar


