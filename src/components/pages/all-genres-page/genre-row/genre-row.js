import React, { useEffect, useState } from "react";
import "./genre-row.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Service from "../../../../services/service";
import arrow from "./arrow.svg";

const GenreRow = ({onGetData, data}) => {

    const getData = new Service();
    const [filmsRow, setFilmsRow] = useState([]);

    useEffect(() => {

        getData.getData(`https://api.themoviedb.org/3/discover/movie?api_key=134294c44cb245ad924ee3902ec24da5&with_genres=${data.id}`)
        .then(data => setFilmsRow(data.results.slice(0,5)));
    }, []);

    console.log(filmsRow)

    const filmRow = filmsRow.map(film => {
        return(
            <div onClick={() => onGetData(filmsRow, film.id)} key={film.id} className="popular-card">
                <span className="film-title">{film.title}</span>
                <img className="popular-film" src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt=""></img>
            </div>
        )
    })

    return  (
        <div className="genre-row">
            <Link className="links" to={`/genre-page/${data.id}`}><h1 className="titles">{data.name}{<img className="arrow" src={arrow} alt=""/>}</h1></Link> 
            <div className="movie-row">
               {filmRow}
            </div>
        </div>
    )
}

export default GenreRow;