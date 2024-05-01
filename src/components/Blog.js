import React from "react";
import Image from "next/image";
import Link from "next/link";
import {blogs} from '../api/data';

const Blog = () => {
  return (
    <section className="blog-list-scn bg-section dark:bg-black" id="blog">
      <div className="container">
        <div className="blog_heading flex items-baseline justify-between flex-wrap">
            <h2 className="sm:mb-[2.75rem] mb-3" data-aos="fade-left">Latest blog & news</h2>
            <Link href="#" className="flex items-center gap-3 text-17 text-midnight_text dark:text-[#46C4FF] font-medium hover:text-primary sm:pb-0 pb-3 transition duration-500 group">View More
                <i className="m_blog_arrow bg-[url('/icon/blog-arrow.svg')] bg-no-repeat inline-block w-[1.0625rem] h-3 bg-cover group-hover:bg-[url('/icon/blog-arrow-hover.svg')]"></i>
            </Link>
        </div>
        <div className="blog-list grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-[1.875rem]" data-aos="fade-down">
          {blogs.map((post, index) => (
            <Link key={index} href={`/blog-details/${post.slug}`} className="blog-item pricing col-span-4 group">
            <div className="blog-img max-w-full overflow-hidden relative w-full lg:h-[15.25rem] h-auto">
              <Image
                src={post.image}
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.2]"
              />
              <span className="postdate py-[0.475rem] max-w-[4.9375rem] w-full text-center bg-primary text-white absolute left-0 top-0 mt-[0.9375rem] ml-[0.9375rem] rounded-[0.25rem] text-[0.8125rem] leading-[1.0581rem] font-medium">{post.lable}</span>
            </div>
            <div className="blog-cont">
                <h5 className="pt-[1.5rem] pb-[0.875rem] group-hover:text-primary">{post.title}</h5>
                <span className="text-[0.8125rem] leading-7 text-[#ACBCCA]">{post.timing}</span>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;