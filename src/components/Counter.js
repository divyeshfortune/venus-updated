import React from "react";
import {count} from '../api/data'
import Image from "next/image";

const Counter = () => {
    
  return (
    <section className="lg:pt-[8.5625rem] pt-[4.2813rem] lg:pb-[7.75rem] pb-[3.875rem]">
      <div className="container">
        <div className="flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9">
          {count.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-[0.875rem]">
              <Image src={item.icon} alt="icon" width={0} height={0}  className="m_icon bg-no-repeat"/>
              <span className="text-48 font-semibold text-midnight_text dark:text-white">{item.value}</span>
              <p className="text-18 text-grey text-center max-w-[17.8125rem] w-full">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
