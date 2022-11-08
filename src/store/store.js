import { createStore } from "redux";
import { combineReducers } from "redux";
import { premiereReducer } from "../redux/reducers/premiereReducer";
import { reducer } from "../redux/reducers/reducers";
import { trailerReducer } from "../redux/reducers/trailerReducer";
import { searchReducer } from "../redux/reducers/searchReducer";
import { pageReducer } from "../redux/reducers/pageReducer";
import { inCinemaReducer } from "../redux/reducers/inCinemaReducer";
import { moviePageReducer } from "../redux/reducers/moviePageReducer";
import { genreReducer } from "../redux/reducers/genreReducer";
import { genreDataReducer } from "../redux/reducers/genreDataReducer";
import { actorsReducer } from "../redux/reducers/actorsReducer";

const rootReducer = combineReducers({

    premieres: premiereReducer,
    popular: reducer,
    trailer: trailerReducer,
    search: searchReducer,
    showPage: pageReducer,
    inCinema: inCinemaReducer,
    moviePage: moviePageReducer,
    genreReducer: genreReducer,
    genreDataReducer: genreDataReducer,
    actors: actorsReducer

});




const store = createStore(rootReducer);
export default store; 