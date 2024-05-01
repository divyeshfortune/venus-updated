"use client"
import Blog from '@/components/Blog'
import Contactform from '@/components/Contactfrom'
import Counter from '@/components/Counter'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Progresswork from '@/components/Progresswork'
import Servicescard from '@/components/Servicecard'
import Testimonial from '@/components/Testimonial'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Page() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Progresswork />
      <Servicescard />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contactform />
      <Footer />
    </>
  );
}