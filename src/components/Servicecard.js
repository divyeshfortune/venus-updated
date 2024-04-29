import React from "react";
import Link from "next/link";
import {Servicebox} from "../api/data";
import Image from "next/image";

const Servicescard = () => {
  return (
    <section className="bg-section dark:bg-black" id="services">
      <div className="container">
        <p className="round_title justify-center">
          <span className="green_round"></span>our services
        </p>
        <h2 className="sm:text-4xl text-28 font-bold text-midnight_text md:text-center text-start pt-[1.8125rem] pb-[5.3125rem] md:w-4/6 w-full m-auto">
          Services specifically designed to meet your business needs
        </h2>
        <div className="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-[1.875rem]">
          {Servicebox.map((item, index) => (
            <div
              key={index}
              className="col-span-4 bg-white dark:bg-[#b0e0e6] text-center py-14 px-7 shadow-[0px_3px_20px_0px_#8E9CA90D] rounded-md"
            >
              <Image src={item.icon} alt="Service Box" width={0} height={0} className="w-[2.5625rem] h-10 bg-no-repeat inline-block bg-contain"/>
              <h3 className="max-w-[10.625rem] mx-auto pb-6 pt-[2.1875rem]">
                {item.title}
              </h3>
              <p className="text-grey text-16 font-normal">{item.description}</p>
              <Link
                href="#"
                className="hover:text-midnight_text inline-block text-18 font-medium text-primary pt-11 group"
              >
                Get Started
                <i className="bg-[url('/icon/right-arrow.svg')] bg-no-repeat bg-contain w-[0.875rem] h-[0.625rem] ml-2 inline-block group-hover:bg-[url('/icon/right-arrow-hover.svg')] transition-all duration-500"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicescard;