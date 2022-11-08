const initialState = {
    data: [
        {id: "", key: ""},
        {id: "", key: ""},
        {id: "", key: ""}
    ],
    filmId: [],
    films: [],
    filmTrailers: []
}

export const trailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DATA":
            return {
                ...state, data: action.payload
            };
        case "FILM_ID":
            return {
                ...state, filmId: action.payload
            };
        case "FILMS":
            return {
                ...state, films: action.payload
            };
        case "FILMS_TRAILERS":
            return{
                ...state, filmTrailers: action.payload
            }
        default: 
            return state;
    }
}