import React from 'react'
import Image from 'next/image'

const Contactform = () => {
  return (
    <section className="bg-midnight_text dark:bg-black overflow-x-hidden">
    <div className="container">
      <div className="grid md:grid-cols-12 grid-cols-1 md:gap-[1.875rem] gap-0">
        <div className="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <p className="round_title text-white">
              <span className="green_round"></span>build everything
            </p>
          <h2 className='sm:text-4xl text-28 font-bold text-white py-12 lg:!leading-[3.5rem] leading-[2.5rem]'>
            Let’s discuss about your project and take it the next level.
          </h2>
          <div className="grid grid-cols-6 pb-12 border-b border-solid border-[#163958]">
            <div className="col-span-3">
              <span className='text-[#668199] text-18'>Phone</span>
              <p className="p-4 pl-0 bg-transparent border-0 text-white" name="phone">+323-25-8964</p>
            </div>
            <div className='col-span-3'>
              <span htmlFor="email" className='text-[#668199] text-18'>Email</span>
              <p className="p-4 pl-0 bg-transparent border-0 text-white">me@landingpro.com</p>
            </div>
            <div className="col-span-6">
              <span htmlFor="location" className='text-[#668199] text-18'>Location</span>
              <p className="p-4 pl-0 bg-transparent border-0 text-white">Mark Avenue, Dalls Road, New York</p>
            </div>
          </div>
          <div className="pt-12">
            <p className="text-white text-base pb-4">Trusted by</p>
            <div className="flex items-center flex-wrap md:gap-[3.8125rem] gap-[1.8125rem]">
              <Image
                src="/images/google-pay.png"
                alt="Google-pay"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f max-w-[7.4375rem] w-full h-[1.375rem]"
              />
              <Image
                src="/images/play-juction.png"
                alt="play-juction"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f max-w-[6.0625rem] w-full h-[1.5rem]"
              />
              <Image
                src="/images/stripe.png"
                alt="stripe"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f max-w-[3.625rem] w-full h-[1.5rem]"
              />
              <Image
                src="/images/wise.png"
                alt="wise"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f max-w-[4.75rem] w-full h-[1.125rem]"
              />
            </div>
          </div>
        </div>
        <div className="relative before:content-[''] before:absolute before:bg-[url('/images/form-line.png')] before:bg-no-repeat before:w-[13rem] before:h-[5.75rem] before:top-[5%] before:bg-contain before:left-[35%] before:z-[1] before:translate-x-full before:lg:inline-block before:hidden after:content-[''] after:absolute after:bg-[url('/images/from-round-line.png')] after:bg-no-repeat after:w-[6.3125rem] after:h-[6.3125rem] after:bg-contain after:top-1/2 after:-left-[25%] after:z-[1] after:translate-x-1/2 after:translate-y-1/2 after:md:inline-block after:hidden md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
          <div className="lg:mt-0 mt-8  bg-white max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10">
            <h2 className='sm:text-3xl text-18 font-bold text-midnight_text mb-3'>Start the project</h2>
            <form className="flex w-full m-auto justify-between flex-wrap">
              <div className="sm:w-[calc(49.5%_-_9px)] w-[calc(100%_-_0px)] mx-0 my-2.5 group">
                <input
                  className="!text-midnight_text w-full text-base transition-[0.5s] duration-[all] px-[0.9375rem] py-[0.830rem] !border !border-border !border-solid focus:!border-primary !placeholder:text-grey"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="sm:w-[calc(49.5%_-_9px)] w-[calc(100%_-_0px)] mx-0 my-2.5">
                <input
                  type="text"
                  className="!text-midnight_text w-full text-base transition-[0.5s] duration-[all] px-[0.9375rem] py-[0.830rem] !border !border-border !border-solid focus:!border-primary !placeholder:text-grey"
                  placeholder="Last name"
                />
              </div>
              <div className="w-full mx-0 my-2.5">
                <input
                  type="email"
                  className="!text-midnight_text w-full text-base transition-[0.5s] duration-[all] px-[0.9375rem] py-[0.830rem] !border !border-border !border-solid focus:!border-primary !placeholder:text-grey"
                  placeholder="youremail@website.com"
                
                />
              </div>
              <div className="w-full mx-0 my-2.5">
                <input
                  className="!text-midnight_text w-full text-base transition-[0.5s] duration-[all] px-[0.9375rem] py-[0.830rem] !border !border-border !border-solid focus:!border-primary !placeholder:text-grey"
                  type="text"
                  placeholder="Country"
                
                />
              </div>
              <div className="w-full mx-0 my-2.5">
                <textarea
                  className="!text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] duration-[all] px-[0.9375rem] py-[0.830rem] !border !border-border !border-solid focus:!border-primary !placeholder:text-grey"
                  placeholder="Let us know about your project"
                  
                ></textarea>
              </div>
              <div className="flex py-4">
                <input
                  id="wp-comment-cookies-consent"
                  name="wp-comment-cookies-consent"
                  type="checkbox"
                  value="yes"
                  className="hover:opacity-[1] checked:bg-primary checked:opacity-[1] relative border-2 border-solid border-primary rounded-sm bg-none cursor-pointer leading-none mr-2 outline-0 !p-0 align-text-top h-[1.25rem] sm:w-[1.25rem] w-[2.25rem] opacity-[0.5] before:content-[''] before:absolute before:right-1/2 before:top-1/2 before:w-1 before:h-[0.625rem] before:z-[2] before:-mt-[0.0625rem] before:-ml-[0.0625rem] before:-mr-[0.0625rem] before:transform before:rotate-45 before:translate-x-[-50%] before:translate-y-[-50%]"
                />
                <div className='text-grey'>
                  I have read and acknowledge the{" "}
                  <p className="text-primary inline cursor-pointer">
                    Terms and Conditions{" "}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <button className="btn submit-btn w-full" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contactform