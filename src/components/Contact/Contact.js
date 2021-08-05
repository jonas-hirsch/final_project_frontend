import React from "react";
import { Email24, Phone24, Location24, LogoFacebook32, LogoTwitter32, LogoInstagram32  } from '@carbon/icons-react'

const Contact = () => {
  return (
    <div className="min-h-screen md:min-h-screen lg:min-h-screen my-4">
      <h1 className="text-5xl pl-20 mb-10">Contact</h1>
      <div className="flex items-center justify-around flex-wrap mb-4">
        <a href="/#" emailto="http://">
          <span className='flex items-center '>
            <Email24 className='mr-2 text-link' />
            email@example.com
          </span>
        </a>
        <a href="/#" emailto="http://">
          <span className='flex items-center '>
            <Phone24 className='mr-2 text-link' />
            +49 13 2345 3223 23
          </span>
        </a>
        <a href="/#" emailto="http://">
          <span className='flex items-center'>
            <Location24 className='mr-2 text-link' />
            Some Address
          </span>
        </a>
      </div>
      <div className='flex items-baseline justify-between flex-wrap'>
        <div className='pl-20 mt-20'>
          <h2 className="text-4xl mb-2 font-semibold">Contact with us</h2>
          <p className='text-xl mb-6'>You can contact us on social networks</p>
          <div className='text-link space-x-8'>
            <a  href="https://twitter.com" className="text-base">
            <LogoTwitter32 />
            </a>
            <a href="https://instagram.com" className="text-base">
            <LogoInstagram32 />
            </a>
            <a href="https://facebook.com" className="text-base">
            <LogoFacebook32 />
            </a>
          </div>
        </div>
        {/* Form */}
        <div className="mx-auto w-sm">
          <div className="pt-12 mx-10 my-20">
          <h2 className="text-3xl mb-10 text-secondary pt-2.5">You can also contact us by filling out the form</h2>
            <form action="#" method="#" className="max-w-screen-sm">
              <input type="text" name="name" id="name" placeholder="Name"
                className='w-full text-left py-2 px-4 border border-light focus:outline-none focus:ring-1 focus:ring-primary rounded-default mb-4 text-body'
              />
              <input type="text" name="email" id="email" placeholder="Email"
                className='w-full text-left py-2 px-4 border border-light focus:outline-none focus:ring-1 focus:ring-primary rounded-default mb-4 text-body'
              />
              <textarea name="message" id="message" cols="40" rows='5'
                placeholder="Message"
                className='border border-light px-4 py-2 rounded-default w-full 
						text-body resize-none outline-none focus:ring-1 focus:ring-primary mb-6'
              ></textarea>
              <button className='bg-secondary text-primary font-regular py-2.5 px-6 rounded-default text-xl shadow-xl active:bg-p-hover my-2 w-full'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
