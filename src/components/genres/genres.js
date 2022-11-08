import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./genres.css";
import { Link } from "react-router-dom"
import arrow from "./arrow.svg";
import Service from "../../services/service";
import action from "./action.png";

const Genres = () => {

    const [isTablet, setIsTablet] = useState(false);

    const allGenres = useSelector(state => state.genreReducer.allGenres);

    const getData = new Service();
    const dispatch = useDispatch();

    useEffect(() => {

        window.screen.width < 1024 ? setIsTablet(true) : setIsTablet(false);

        getData.getData(`https://api.themoviedb.org/3/genre/movie/list?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US`)
        .then(data => dispatch({type: "ALL_GENRES", payload: data.genres}));
    }, [window.screen.width]);

    const adaptScreenSize = () => {
        if (isTablet) {
            return (
                <div className="container genres">
                    <Link className="links" to={`/genre-page/${allGenres[0].id}`}><div className="large-block"><span>Action</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[3].id}`}><div className="small-block"><span>Comedy</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[6].id}`}><div className="small-block"><span>Drama</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[2].id}`}><div className="large-block"><span>Animation</span></div></Link>
                    <Link className="links" to={`/genre-page/${allGenres[4].id}`}><div className="small-block"><span>Crime</span></div></Link>
                    <Link className="links" to={`/genre-page/${allGenres[7].id}`}><div className="small-block"><span>Family</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[1].id}`}><div className="large-block"><span>Adventure</span></div></Link>   
                    <Link className="links" to={`/genre-page/${allGenres[8].id}`}><div className="small-block"><span>Fantasy</span></div></Link> 
                </div>

            )
        } else {
            return (
                <div className="container genres">
                    <Link className="links" to={`/genre-page/${allGenres[0].id}`}><div className="large-block"><span>Action</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[3].id}`}><div className="small-block"><span>Comedy</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[6].id}`}><div className="small-block"><span>Drama</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[2].id}`}><div className="large-block"><span>Animation</span></div></Link>
                    <Link className="links" to={`/genre-page/${allGenres[4].id}`}><div className="small-block"><span>Crime</span></div></Link>
                    <Link className="links" to={`/genre-page/${allGenres[7].id}`}><div className="small-block"><span>Family</span></div></Link> 
                    <Link className="links" to={`/genre-page/${allGenres[1].id}`}><div className="large-block"><span>Adventure</span></div></Link>   
                    <Link className="links" to={`/genre-page/${allGenres[8].id}`}><div className="small-block"><span>Fantasy</span></div></Link>
                    <Link className="links" to={`/genre-page/${allGenres[10].id}`}><div className="small-block"><span>Horror</span></div></Link>  
                </div>

            )

        }
    }
    
    return (
        <>
            <Link to="/genres" className="container titles">Genres{<img className="arrow" src={arrow} alt=""/>}</Link>
            {adaptScreenSize()}
        </>
    )
}

export default Genres; 