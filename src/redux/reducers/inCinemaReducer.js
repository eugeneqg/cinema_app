const initialState = {
    data: [{
        backdrop_path: "",
        id: "",
        title: "",
        release_date: ""
    }],
    otherData: [{
        backdrop_path: "",
        id: "",
        title: "",
        release_date: ""
    }]
}

const inCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CINEMA_MOVIES":
            return {
                ...state, data: action.payload
            };
        case "OTHER_MOVIES":
            return {
                ...state, otherData: action.payload
            }
        default:
            return state;
    }
}

export { inCinemaReducer };