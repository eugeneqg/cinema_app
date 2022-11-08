const initialState = {
    data: [{
        poster_path: "",
        id: "",
        title: "",
        release_date: "",
        vote_average: ""
    }]
}

const genreDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GENRE_DATA":
            return {
                ...state, data: action.payload
            };
        case "RESET_GENRE_DATA": 
            return {
                ...state,     
                data: [{
                    poster_path: "",
                    id: "",
                    title: "",
                    release_date: "",
                    vote_average: ""
                }]
            }
        default:
            return state;
    }
}

export {genreDataReducer};