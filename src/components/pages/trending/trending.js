import React, {useEffect} from "react";
import MovieList from "../../movie-list/movie-list";
import { useSelector } from "react-redux";

const Trending = ({onGetData}) => {

    const data = useSelector(state => state.popular.fullData);

    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className="container">
            <h1 className="titles">Trending now</h1>
            <div className="premieres-block">
                <MovieList onGetData={onGetData} data={data}/>
            </div>
        </div>
    )
}

export default Trending;