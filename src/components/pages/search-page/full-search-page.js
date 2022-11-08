import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Service from "../../../services/service";
import MovieList from "../../movie-list/movie-list";
import Pagintaion from "../../pagination/pagination";

const FullSearchPage = ({onGetData}) => {

    const dispatch = useDispatch();

    const searchData = useSelector(state => state.search);
    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();

    const service = new Service();

    useEffect(() => {

        window.scrollTo(0, 0);
        
        dispatch({type: "RESET_GENRE_DATA"});
        setPages(searchData.total_pages);

        service.getData(`https://api.themoviedb.org/3/search/movie?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US&query=${searchData.value}&page=${currentPage}&include_adult=false`)
            .then(data => {

                dispatch({type: "SEARCH_DATA", payload: data.results});
                dispatch({type: "SHORT_DATA", payload: data.results});
                dispatch({type: "TOTAL_RESULTS", payload: data.total_results});
                setPages(data.total_pages);
                
            })
    }, [currentPage]);

    const results = () => {
        if (searchData.length !== 0) {
            return (
                <MovieList data={searchData.data} onGetData={onGetData}/>
            )

        }
        return;
    }

    const onGetResultNum = () => {
        if (searchData.data.length > 1) {
            return (
                <p className="titles">We found {searchData.total_results !== 1 ? searchData.total_results + " results" : searchData.total_results + " result"}</p>
            )
        } else {
            return (
                <p className="titles">Please try to search something first</p>
            )
        }
    }

    return (
        <div className="container gap">
            <h1 className="titles">Search results</h1>
            {onGetResultNum()}
            <div className="premieres-block">
                {results()}
            </div>
            <Pagintaion setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages}/>
        </div>
    )
}

export default FullSearchPage;