"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Progress } from "../api/data";

const Progresswork = () => {
  useEffect(() => {
    progress_bar();
  }, []); // Run only once when component mounts

  function progress_bar() {
    const speed = 30;
    const items = document.querySelectorAll(".progress_bar_item");

    items.forEach((item) => {
      const progress = item.querySelector(".progress");
      const itemValue = parseInt(progress.dataset.progress);
      let i = 0;
      const value = item.querySelector(".item_value");

      const count = setInterval(() => {
        if (i <= itemValue) {
          progress.style.width = i + "%";
          value.innerHTML = i + "%";
        } else {
          clearInterval(count);
        }
        i++;
      }, speed);
    });
  }

  return (
    <section
      className="landing_section scroll-mt-[100px]"
      id="about"
    >
      <div className="container">
        <div className="landing_main grid lg:grid-cols-12 sm:grid-cols-6 grid-cols-1 items-center gap-[1.875rem]">
          <div className="landing_image lg:col-span-6 col-span-3">
            <Image
              src="/images/progress-work.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
              className=""
            />
          </div>
          <div className="landing_content lg:col-span-6 col-span-3">
            <p className="round_title">
              <span className="green_round"></span>build everything
            </p>
            <h2 className="pt-[2.125rem] pb-8">
              Build amazing websites and landing pages with ease
            </h2>
            <p className="landing_descript text-grey text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
            <div className="block max-w-[50rem] mx-auto pt-[3.3125rem]">
              {Progress.map((item, index) => (
                <div
                  key={index}
                  className="progress_bar_item flex flex-wrap mb-8"
                >
                  <div className="flex-[1_1_0px] w-auto text-14 font-normal text-grey mb-2">
                    {item.title}
                  </div>
                  <div className="item_value shrink text-14 font-normal text-grey mb-2">
                    {item.Progress}%
                  </div>
                  <div className="relative h-1 w-full bg-[#EBF2FF] rounded-md">
                    <div
                      className="progress absolute left-0 top-0 bottom-0 h-full bg-primary rounded-md duration-100 ease-in-out"
                      style={{ width: `${item.Progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresswork;
