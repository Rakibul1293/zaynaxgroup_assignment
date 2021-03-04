import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogImg2 from "../../assets/images/blog-img2.png";
import BlogImg3 from "../../assets/images/blog-img3.png";

import "./Blog.css";

const Blog = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      useTransform: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
	return (
        <div className="blog pb-5 mb-5">
            <h4 className="text-dark text-center">LATEST BLOGS</h4>
            <p className="text-dark font-weight-bold text-center">This is a place devoted to giving you deeper insight into the news, trends, people and technology behind Bing.</p>
            <Slider {...settings}>
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg2} alt="altImg"/>
                </div>
                
                <div>
                    <img style={{width: "90%"}} src={BlogImg3} alt="altImg"/>
                </div>
            </Slider>
        </div>
    )
}

export default Blog;