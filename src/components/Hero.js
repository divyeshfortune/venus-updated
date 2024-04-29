"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  
  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 gap-[1.875rem]">
          <div className="lg:col-span-6 col-span-3">
            <p className="round_title">
              <span className="green_round"></span>build everything
            </p>
            <h1 className="mt-6 mb-[1.8125rem] dark:text-white">Unveiling My Professional Odyssey: Portfolio Highlights</h1>
            <p className="text-21 font-normal text-grey mb-[2.125rem] max-w-[25rem]">A brief introduction about myself and my professional objectives.</p>
            <Link href="#" className="btn !px-[2.1rem]">Get Started</Link>
            <div className="flex items-center mt-[3.375rem]">
              <div className="flex items-center">
                <Image
                  src="/images/hero-profile-1.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="!w-10 !h-10 rounded-full border-[0.1875rem] border-solid border-white -ml-0"
                />
                <Image
                  src="/images/hero-profile-2.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="!w-10 !h-10 rounded-full border-[0.1875rem] border-solid border-white -ml-3"
                />  
                <Image
                  src="/images/hero-profile-3.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="!w-10 !h-10 rounded-full border-[0.1875rem] border-solid border-white -ml-3"
                />    
              </div>
              <div className="ml-[0.8125rem]">
                <p className="text-14 font-normal text-grey max-w-[13.125rem]">Need help? <Link href="#" className="text-primary hover:text-grey">Contact our experts</Link> Tell us about your project</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-3 relative before:absolute before:content-[''] before:bg-[url('/icon/line-leyar.svg')] before:bg-no-repeat before:left-1/2 before:top-0 before:h-[5.75rem] before:w-[13rem] before:-z-10 before:translate-x-[70%] before:-translate-y-[40%] lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/icon/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:left-0 after:bottom-0 after:h-[6.3125rem] after:w-[6.3125rem] after:-z-10 after:-translate-x-1/2 after:translate-y-1/2">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;