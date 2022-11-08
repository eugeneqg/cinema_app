import React, { useRef,useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchCard from "../search-component/search-component";
import Service from "../../services/service";
import noResults from "./no-results.webp";
import "./search.css";

const Search = ({onGetData, onClickMenuOpen}) => {

    const service = new Service();
    const searchData = useSelector(state => state.search);

    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const filmsRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.addEventListener("click", (e) => {
            e.stopPropagation();
            filmsRef.current.style.display = "flex";
        });
        document.addEventListener("click", (e) => {
            if (filmsRef.current && !filmsRef.current.contains(e.target)) {
                filmsRef.current.style.display = "none";
            }
        });

        if (inputValue === "") {
            setInputValue("");
        }
    }, [])

    const onInputChange = (e) => {
        const value = e.target.value.toLowerCase();
        if (value === "") {
            dispatch({type: "SEARCH_DATA", payload: ""});
            dispatch({type: "SHORT_DATA", payload: ""});
        } else {
            service.getData(`https://api.themoviedb.org/3/search/movie?api_key=134294c44cb245ad924ee3902ec24da5&language=en-US&query=${value}&page=1&include_adult=false`)
            .then(data => {
                dispatch({type: "SEARCH_DATA", payload: data.results});
                dispatch({type: "SHORT_DATA", payload: data.results});
                dispatch({type: "TOTAL_RESULTS", payload: data.total_results});
                dispatch({type: "INPUT_VALUE", payload: value});
                setInputValue(value);
            })
        }
    }
 
    const onClickAll = () => {
        filmsRef.current.style.display = "none";
        if (window.screen.width < 768) {
            console.log(searchData)
            onClickMenuOpen();
        }
         
    }

    const getFilms = () => {
            const newData = searchData.shortData;
            if (newData.length !== 0) {
                const elements = newData.map(item => {
                    return <SearchCard onGetData={() => onGetData(newData, item.id)} title={item.original_title} id={item.id} image={`https://image.tmdb.org/t/p/original${item.poster_path}`} rate={item.vote_average} release={item.release_date}/>
                })

                return (
                    <div ref={filmsRef} className="field">
                        {elements}
                        <Link onClick={() => onClickAll()} to="/search" state={inputValue} className="show-results">Show all results</Link>
                    </div>
                )
            } else if (newData.length === 0 && inputValue.length > 1) {
                return (
                    <div ref={filmsRef} className="field">
                        <img src={noResults} alt="No results"/>
                        <p> No results :( </p>
                    </div>
                )
            } 
    }


    return (
        <div className="search">
            <input onChange={onInputChange} ref={inputRef} className="header-search" placeholder="Search" type="text" name="text"/>
            {getFilms()}
        </div>
    )
}

export default Search;