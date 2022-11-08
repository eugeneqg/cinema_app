const initialState = {
    data: {},
    fullData: {
        runtime: ""
    }
}

const moviePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MOVIE_TRAILER":
            return {
                ...state, data: action.payload
            };
        case "FULL_MOVIE_DATA":
            return {
                ...state, fullData: action.payload
            };
        default:
            return state
    }
}

export {moviePageReducer};