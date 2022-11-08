import React, { useEffect } from "react";
import GenreRow from "../all-genres-page/genre-row/genre-row";
import { useSelector, useDispatch } from "react-redux";
import Service from "../../../services/service";


const GenresPage = ({onGetData}) => {

    const getData = new Service();
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genreReducer.allGenres);

    useEffect(() => {
        window.scrollTo(0, 0);
        
        getData.getData(`https://api.themoviedb.org/3/genre/movie/list?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US`)
        .then(data => dispatch({type: "ALL_GENRES", payload: data.genres}));
    }, [])

    const genreRows = genres.map(genre => {
        return (
            <GenreRow onGetData={onGetData} key={genre.id} data={genre}/>
        )
    })

    return (
        <div className="container">
            <h1 className="titles">All genres</h1>
            {genreRows}
        </div>
    )
}

export default GenresPage;