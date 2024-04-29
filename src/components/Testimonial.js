import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className="scroll-mt-[100px]" id='testimonials'>
        <div className="container">
          <div>
            <Image
              src="/images/vector-smart.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
              className="w_f !w-[22.5625rem] !h-[13.0625rem] m-auto"
            />
            <div className='pt-[4.25rem] pb-[7.4375rem]'>
              <p className="font-medium text-21 text-midnight_text dark:text-white text-center max-w-[48rem] mx-auto">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip exea commodo consequat.
              </p>
            </div>
            <div className="text-center">
              <strong className='text-18 font-bold text-midnight_text dark:text-primary'>Jonathan Diesel</strong>
              <p className='text-base text-grey'>Happy Customer, Apple inc</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial