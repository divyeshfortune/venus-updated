"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) { // Adjust the value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-12 items-center lg:mt-[4.375rem] mt-[2.375rem] lg:mb-[4rem] mb-[2rem]">
          <Link href="/" className="col-span-6 max-w-[7.9375rem]">
            <Image
              src="/icon/logo.svg"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </Link>
          <div className="col-span-6 flex items-center justify-end sm:gap-[2.3125rem] gap-[1.3125rem]">
            <Link href="#">
              <i className="bg-[url('/icon/twitter.svg')] bg-no-repeat bg-contain w-[1.5625rem] h-5 inline-block hover:bg-[url('/icon/twitter-hover.svg')]"></i>
            </Link>
            <Link href="#">
              <i className="bg-[url('/icon/facebook.svg')] bg-no-repeat bg-contain w-[1.5625rem] h-5 inline-block hover:bg-[url('/icon/facebook-hover.svg')]"></i>
            </Link>
            <Link href="#">
              <i className="bg-[url('/icon/linkedin.svg')] bg-no-repeat bg-contain w-[1.5625rem] h-5 inline-block hover:bg-[url('/icon/linkedin-hover.svg')]"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className={`dp_backto_top fixed hidden bottom-[6%] md:right-[2%] right-[5%] p-5 cursor-pointer before:content-[''] before:absolute before:w-8 before:h-8 before:bg-[url('/icon/top-arrow.svg')] before:bg-no-repeat before:bg-cover ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      </div>
    </footer>
  );
};

export default Footer;