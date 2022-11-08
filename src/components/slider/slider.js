import React, { Component } from "react";
import Slider from "react-slick";
import image from "./header-pic.png";
import image2 from "./header-pic-2.png";
import image3 from "./header-pic-3.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false
    };
    return (
      <div className="header-pic-slider">
        <Slider {...settings}>
          <div>
          <img className="slider-pic" src={image} alt=""/>
          </div>
          <div>
          <img className="slider-pic" src={image2} alt=""/>
          </div>
          <div>
          <img className="slider-pic" src={image3} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}