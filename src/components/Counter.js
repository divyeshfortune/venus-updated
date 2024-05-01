import React from "react";
import {count} from '../api/data'
import Image from "next/image";

const Counter = () => {
  const animations = ['fade-up', 'fade-up', 'fade-up']; // Define an array of animation types
  return (
    <section data-aos="fade-down">
      <div className="container">
        <div className="flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9">
          {count.map((item, index) => (
            <div 
            key={index} 
            className="flex flex-col items-center gap-[0.875rem]"
            data-aos={animations[index % animations.length]} // Select animation type based on index
            data-aos-delay={`${index * 200}`}
            data-aos-duration="1000">

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
