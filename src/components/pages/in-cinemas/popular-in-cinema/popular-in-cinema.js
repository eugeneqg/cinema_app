import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import arrow from "./arrow.svg";
import leftArrow from "./left-arrow.svg";

const PopularInCinema = ({open, onGetData}) => {

    const data = useSelector(state => state.inCinema.data)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        nextArrow: <img src={arrow} alt=""/>,
        prevArrow: <img src={leftArrow} alt=""/>
      };

      const films = data.map(item => {
        const title = item.title;
        if (item.title.length !== 0) {
            return (
                <div key={item.id} className="film-slider">
                    <div className="text-info">
                        <span onClick={() => onGetData(data, item.id)} className="cinema-film-title">{title.length > 14 ? title.slice(0, 14) + "..." : title}</span>
                        <span className="subcaption">Release date: {item.release_date}</span>
                        <button onClick={() => open(`https://www.movietickets.com/#search=${title}`)} className="buy-ticket-button">Buy ticket</button>
                    </div>
                    <img onClick={() => onGetData(data, item.id)} className="img-banner" src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt=""/>
                </div>
            )
        } else {
                console.log("loading")
            }
        })

    return (
        <>
            <Slider {...settings}>
                {films}
            </Slider>
        </>
    )
}

export default PopularInCinema;