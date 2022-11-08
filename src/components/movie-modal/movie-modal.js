import React, {useRef, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./movie-modal.css";
import star from "./star-filled.svg";
import icon from "./bx_movie-play.svg";
import icon2 from "./ic_baseline-ondemand-video.svg";
import Service from "../../services/service";



const MovieModal = ({closeModal, filmData}) => {

    const ref = useRef();
    const dispatch = useDispatch();

    // DATA

    const trailerData = useSelector(state => state.moviePage.data);
    const fullData = useSelector(state => state.moviePage.fullData);
    const actorsData = useSelector(state => state.actors.data);
    const genres = useSelector(state => state.genreReducer.allGenres);
    const raiting = filmData.vote_average;

    const getData = new Service();

    // USE-EFFECT

    useEffect(() => {

        // GET DATA

        getData.getData(`https://api.themoviedb.org/3/movie/${filmData.id}/videos?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US`)
                .then(data => {
                    dispatch({type: "MOVIE_TRAILER", payload: data.results[data.results.length - 1]});
                });
        
        getData.getData(`https://api.themoviedb.org/3/movie/${filmData.id}?api_key=134294c44cb245ad924ee3902ec24da5`)
                .then (data => {
                    dispatch({type: "FULL_MOVIE_DATA", payload: data});
                });

        getData.getData(`https://api.themoviedb.org/3/movie/${filmData.id}/credits?api_key=134294c44cb245ad924ee3902ec24da5`)
                .then (data => {
                    dispatch({type: "CAST_DATA", payload: data.cast.slice(0, 5)});
                });

        getData.getData(`https://api.themoviedb.org/3/genre/movie/list?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US`)
                .then(data => dispatch({type: "ALL_GENRES", payload: data.genres}));

        // CLOSE MODAL FUNCTIONALITY

        document.body.style.overflow = "hidden";

        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                closeModal();
                document.body.style.overflow = "auto";
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    // FUNCTIONS

    const openMoviePlus = () => {
        closeModal();
        document.body.style.overflow = "auto";
    }

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const getGenre = (idArray) => {

        const genreNames = [];
        idArray.map(id => {
            const index = genres.findIndex(item => item.id === id);
            const genreName = genres[index].name + ", ";
            genreNames.push(genreName);
        })

        return genreNames;
    }

    // CARD ELEMENTS

    const time = Math.floor(fullData.runtime / 60) + " hour" + ` ${fullData.runtime % 60} min` ;
    const actors = actorsData.map(item => {
        return (
            <div>
                <img className="actor-pic" src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt=""></img>
                <h3 className="subcaption">{item.name}</h3>
            </div>
        )
    })

    return (
        <div className="blur-back">
            <div ref={ref} className="movie-back">
                <div className="movie-card">
                    <div className="movie-top">
                        <img className="page-pic" src={`https://image.tmdb.org/t/p/original${filmData.poster_path}`} alt="poster"></img>
                        <div className="movie-info">
                            <div className="movie-page-header">
                                <span className="movie-page-title">{filmData.title}</span>
                                <span className="movie-year">{filmData.release_date !== undefined ? filmData.release_date.slice(0, 4) : null}</span>
                                <img className="star-icon" src={star} alt="star-icon"/>
                                <span className="raiting">{raiting % 1 === 0 ? raiting + ".0" : raiting}</span>
                            </div>
                            <span className="movie-page-genre">{getGenre(filmData.genre_ids)}</span>
                            <span className="movie-page-genre">{time}</span>
                            <span className="movie-page-text">{filmData.overview}</span>
                            <div className="page-buttons">
                                <button onClick={() => openInNewTab(`https://youtube.com/embed/${trailerData.key}`)} className="grey-button"><img src={icon} alt=""/>Watch trailer</button>
                                <Link to="/promo-page" onClick={() => openMoviePlus()} className="yellow-button"><img src={icon2} alt=""/>Watch now</Link>
                            </div>
                        </div>
                    </div>
                    <h1 className="titles">Movie Cast</h1>
                    <div className="cast-info">
                        {actors}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;