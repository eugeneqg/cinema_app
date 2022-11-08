import React from "react";
import "./popular.css";
import arrow from "./arrow.svg"
import back from "./back.svg";
import whiteBack from "./white-back.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Service from "../../services/service";
import PopularMovieCard from "../popular-movie-card/popular-movie-card";
import Loading from "../loading/loading";

const Popular = ({onGetData}) => {

    const getData = new Service();

    const data = useSelector(state => state.popular.data);
    const dispatch = useDispatch();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        getData.getData("https://api.themoviedb.org/3/movie/popular?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US")
        .then(data => {
            if (data.results.length !== 0) {
                let newData = data.results.slice(0, 5);
                dispatch({type: "POPULAR", payload: newData});
                dispatch({type: "FULL_POPULAR", payload: data.results});
            }
        }); 

        window.screen.width < 768 ? setIsMobile(true) : setIsMobile(false);
    }, []);

    const adaptContent = () => {
        if (!isMobile) {
            const films = data.map(item => {
                if (item.title.length !== 0) {
                    return (
                        <PopularMovieCard key={item.id} filmData={data} onGetData={() => onGetData(data, item.id)} id={item.id} title={item.title} poster={item.poster_path}/>
                    )
                } else {
                    return (
                        <div key={item.id} className="popular-card">
                            <div className="not-loaded">
                                <div className="not-loaded-spinner"/>
                            </div>
                        </div>
                    )
                }
            })
            return films;
        } else {
            const films = data.slice(0, 3).map(item => {
                if (item.title.length !== 0) {
                    return (
                        <PopularMovieCard key={item.id} filmData={data} onGetData={() => onGetData(data, item.id)} id={item.id} title={item.title} poster={item.poster_path}/>
                    )
                } else {
                    return (
                        <div key={item.id} className="popular-card">
                            <div className="not-loaded">
                                <div className="not-loaded-spinner"/>
                            </div>
                        </div>
                    )
                }
            })
            return films;
        }
    }

    return (
        <div className="trending-block">
            <div className="back"/>
            <div className="container popular">
                <Link className="titles" to="/trending"><h1 className="titles" >Trending now{<img className="arrow" src={arrow} alt=""/>}</h1></Link>
                <div className="popular-cards">
                    {adaptContent()}
                </div>
            </div>
        </div>
    )
}

export default Popular;