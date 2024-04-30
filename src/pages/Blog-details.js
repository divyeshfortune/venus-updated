import React from "react";
import "../app/globals.css";
import "../styles/style.css";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Blogdetails = () => {
  return (
    <>
      <Header />
      <section className="pt-[6.75rem]">
        <div className="container">
          <div className="blog_main">
            <div className="grid grid-cols-12 pb-[3.5625rem]">
              <div className="row-start-1 col-start-1 row-end-2 col-end-9">
                <div className="pb-[1.375rem]">
                  <span className="blog_hashtage">Trends</span>
                  <span className="text-[#95AEC6] text-base font-normal border-r border-solid border-[#95AEC6] px-3">
                    18 Hours ago
                  </span>
                  <span className="text-[#95AEC6] text-base font-normal px-3">
                    13 Comments
                  </span>
                </div>
                <h1>Augue OLMO, luctus neque purus and ipsum neque libero</h1>
              </div>
              <div className="flex items-center gap-6 row-start-1 col-start-10 row-end-2 col-end-13">
                <Image
                  src="/images/4bc07465155a0f49705c0972a9e05e42.png"
                  alt="Author"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="rounded-full max-w-[5.1875rem] max-h-[5.1875rem] w-full object-cover"
                />
                <div>
                  <span className="text-22 font-medium text-primary">
                    Silicaman
                  </span>
                  <p className="text-xl font-normal text-[#547593]">Author</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/blog.jpg"
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="rounded-[1.875rem] w-[73.125rem] !h-[47.8125rem]"
              />
            </div>
            <div className="grid grid-cols-12 gap-[1.875rem] mt-12">
              <div className="col-span-8">
                <h2 className="pb-8">Main Heading & Points</h2>
                <p className="text-18 text-secondary font-normal pb-12">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                </p>
                <ul className="pb-14">
                  <li className="relative text-secondary text-18 font-medium pl-9 flex items-center py-2 before:content-[''] before:left-0 before:absolute before:bg-[url('/icon/right-icon-blog.svg')] before:bg-no-repeat before:bg-contain before:w-6 before:h-6">
                    Vivamus eu lacus scelerisque, placerat commodo lectus.
                  </li>
                  <li className="relative text-secondary text-18 font-medium pl-9 flex items-center py-2 before:content-[''] before:left-0 before:absolute before:bg-[url('/icon/right-icon-blog.svg')] before:bg-no-repeat before:bg-contain before:w-6 before:h-6">Etiam etanteatex porta fringilla.</li>
                  <li className="relative text-secondary text-18 font-medium pl-9 flex items-center py-2 before:content-[''] before:left-0 before:absolute before:bg-[url('/icon/right-icon-blog.svg')] before:bg-no-repeat before:bg-contain before:w-6 before:h-6">
                    Nullam dignissim sem eu magna aliquet, sit amet volutpat
                    tellus
                  </li>
                </ul>
                <Image
                  src="/images/image-89.png"
                  alt="logo"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                />
                <p className="text-secondary py-7 text-18 font-normal]">Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</p>
                <p className="text-28 font-normal text-midnight_text py-7 border-l-[0.1875rem] border-solid border-primary pl-8">We are a dedicated team of passionate product managers,developers, UX/UI designers, QA engineers experts helping businesses from new startups</p>
                <p className="text-18 font-normal text-secondary py-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable making this the first true generator on the Internet. It uses a dictionary </p>
                <div className="flex gap-5 py-7 border-t border-b border-solid border-[#E1F1F6]">
                    <div>
                        <p className="text-22 font-medium text-midnight_text">Tags</p>
                    </div>
                    <div className="flex items-center gap-[0.625rem]">
                        <span className="blog_hashtage">Trends</span>
                        <span className="blog_hashtage">Design</span>
                        <span className="blog_hashtage">Research</span>
                    </div>
                </div>
              </div>
              <div className="col-span-4 bg-white shadow-[0px_20px_80px_0px_#68758D26] px-10 rounded-lg h-[42.5%]">
                <span className="text-24 font-medium text-midnight_text inline-block py-6">Share</span>
                <div className="flex flex-col gap-[0.875rem] pb-12 border-b border-solid border-[#F4F5F6]">
                    <Link href="#" className="bg-[#526FA3] py-[0.90rem] rounded-lg text-xl font-medium text-white flex items-center gap-[1.5rem] px-6 hover:bg-[#3e537a] hover:scale-[1.1] transition-all duration-500">
                        <i className="bg-[url('/icon/facebook-blog.svg')] bg-no-repeat bg-contain w-[1.3125rem] h-[1.3125rem] inline-block"></i>
                        Facebook</Link>
                    <Link href="#" className="bg-[#4EB8EC] py-[0.90rem] rounded-lg text-xl font-medium text-white flex items-center gap-[1.5rem] px-6 hover:bg-[#469dc9] hover:scale-[1.1] transition-all duration-500">
                        <i className="bg-[url('/icon/twitter-blog.svg')] bg-no-repeat bg-contain w-[1.4375rem] h-[1.4375rem] inline-block"></i>
                        Twitter</Link>
                    <Link href="#" className="bg-[#3C86AD] py-[0.90rem] rounded-lg text-xl font-medium text-white flex items-center gap-[1.5rem] px-6 hover:bg-[#337192] hover:scale-[1.1] transition-all duration-500">
                        <i className="bg-[url('/icon/Linkedin-blog.svg')] bg-no-repeat bg-contain w-[1.4375rem] h-[1.4375rem] inline-block"></i>
                        Linkedin</Link>
                </div>
                <div className="mt-6">
                    <span className="text-24 font-medium text-midnight_text inline-block py-5">Join our newsletter</span>
                    <input type="text" name="email address" placeholder="Email address" className="py-3 px-4 !border !border-solid !border-[#C0D5FB] !mb-3" />
                    <Link href="#" className="btn w-full text-center">Subscribe</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog/>
      <Footer/>
    </>
  );
};

export default Blogdetails;
