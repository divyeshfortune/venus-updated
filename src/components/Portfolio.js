import React from "react";
import Image from "next/image";
import Link from "next/link";
import {portfolioinfo} from '../api/data';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="text-center lg:px-0 px-8">
        <p className="round_title justify-center">
          <span className="green_round"></span>portfolio
        </p>
        <h2 className="pt-[1.8125rem] pb-[1.0625rem]">Explore my portfolio showcase</h2>
        <div className="pb-[3.5625rem] inline-flex">
          <p className="text-16 font-normal text-grey max-w-[28.125rem]">
            Dive into a curated collection of my finest work, showcasing expertise
            across various industries.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-[2.125rem] lg:px-[2.125rem] px-0 max-w-[120rem] w-full justify-center m-auto">
        {portfolioinfo.map((item, index) => (
            <Link key={index} href="/portfolio-details" className={`w-[18rem] group ${index % 2 !== 0 ? 'margin_top' : ''}`}>
                <Image
                src={item.image}
                alt={item.alt}
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="transition-all duration-500 group-hover:scale-[1.1] group-hover:cursor-pointer"
                />
            <h4 className="pb-[0.3125rem] pt-[2.1875rem] group-hover:text-primary group-hover:cursor-pointer">{item.title}</h4>
            <p className="text-[#547593] font-normal text-18 group-hover:text-primary group-hover:cursor-pointer">{item.info}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;