import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSlider = ({itemImage}) => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 479, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Change slidesToShow for smaller screens
        },
      },
      {
        breakpoint: 1024, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2, // Change slidesToShow for smaller screens
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="portfolio_slide">
        <Image
          src={itemImage}
          alt="Slider"
          width={0}
          height={0}
          layout="responsive"
          quality={100}
          sizes="100vh"
        />
      </div>
      <div className="portfolio_slide">
        <Image
          src={itemImage}
          alt="Slider"
          width={0}
          height={0}
          layout="responsive"
          quality={100}
          sizes="100vh"
        />
      </div>

      <div className="portfolio_slide">
        <Image
          src={itemImage}
          alt="Slider"
          width={0}
          height={0}
          layout="responsive"
          quality={100}
          sizes="100vh"
        />
      </div>

      <div className="portfolio_slide">
        <Image
          src={itemImage}
          alt="Slider"
          width={0}
          height={0}
          layout="responsive"
          quality={100}
          sizes="100vh"
        />
      </div>
    </Slider>
  );
};

export default SlickSlider;
