import Header from "@/components/Header";
import React from "react";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const portfoliodetails = () => {
  return (
    <>
    <Header/>
    <main className="inner_page">
      <section>
        <div className="container">
          <div className="branding_heading">
            <h2 className="pb-[1.1875rem]">Creative Branding</h2>
            <div className="pb-[3.6875rem]">
                <p className="text-secondary text-xl max-w-[38.6875rem]">
                We are a dedicated team of passionate product managers, full stack
                developers, UX/UI designers, QA engineers and marketing.
                </p>
            </div>
          </div>
          <Slider />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-start w-full justify-between flex-wrap sm:flex-nowrap lg:gap-0 gap-8">
            <div className="lg:w-[60%] w-full">
              <div className="pb-[3.625rem]">
                <p className="md:text-[1.6875rem] text-[1.0625rem] md:leading-[2.25rem] leading-[2rem] font-normal text-midnight_tex dark:text-white">
                    We are a dedicated team of passionate product
                    managers,developers, UX/UI designers, QA engineers experts
                    helping businesses from new startups
                </p>
              </div>
              <div className="flex items-start justify-between sm:flex-row flex-col lg:gap-0 gap-4">
                <p className="sm:text-18 text-base font-normal text-secondary max-w-[19.4375rem]">
                  Popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
                <p className="sm:text-18 text-base font-normal text-secondary max-w-[19.4375rem]">
                  Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancy. Various versions have evolved over.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start bg-white shadow-[0px_20px_80px_0px_#68758D26] pt-[2.5rem] lg:pl-[3.3125rem] pl-[2.3125rem] pb-[1.9375rem] lg:pr-[10.5rem] pr-[2.5rem] lg:w-[30%] w-full">
              <span className="pb-6">Our services</span>
              <span className="pb-6">Brand Strategy</span>
              <span className="pb-6">Communications</span>
              <span className="pb-6">Visual Identity</span>
              <span className="pb-6">Brand Support</span>
              <span className="pb-6">Web Design</span>
            </div>
          </div>
        </div>
      </section>
      <div className="border-b border-solid border-[#2F73F24D] max-w-[73.125rem] m-auto">
        <Testimonial/>
      </div>
      <Portfolio/>
      <div className="border-t border-solid border-[#2F73F24D] max-w-[73.125rem] m-auto">
        <Footer/>
      </div>
    </main>
    </>
  );
};

export default portfoliodetails;