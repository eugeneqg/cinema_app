import React, { useEffect, useState } from "react";
import Service from "../../../services/service";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import MovieList from "../../movie-list/movie-list";
import Pagintaion from "../../pagination/pagination";
import "./genre-page.css";


const GenrePage = ({onGetData}) => {
    const {id} = useParams();
    const getData = new Service();

    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.genreReducer.allGenres);
    const genreData = useSelector(state => state.genreDataReducer.data);
    
    const [pages, setPages] = useState(500);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        window.scrollTo(0, 0);

        dispatch({type: "RESET_GENRE_DATA"});

        getData.getData(`https://api.themoviedb.org/3/discover/movie?api_key=134294c44cb245ad924ee3902ec24da5&with_genres=${id}&page=${currentPage}`)
        .then(data => {
            data.total_pages > 500 ? setPages(500) : setPages(data.total_pages);
            dispatch({type: "GENRE_DATA", payload: data.results})});
    }, [currentPage]);

    const getGenreTitle = (pageId) => {
        const index = allGenres.findIndex(item => item.id === +pageId);
        return allGenres[index].name;
    }

    const openPageNumber = (id, pageArr) => {
        const index = pageArr.findIndex(item => item.id === id);
        console.log(index);
        setCurrentPage(index + 1);
    }

    return (
        <div className="container">
            <h1 className="titles">{getGenreTitle(id)}</h1>
                <div className="premieres-block">
                    <MovieList data={genreData} onGetData={onGetData}/>
                </div>
            <Pagintaion openPageNumber={openPageNumber} setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages}/>
        </div>
    )
};

export default GenrePage;