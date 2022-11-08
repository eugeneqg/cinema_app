const initialState = {
    data: [],
    shortData: [],
    value: "",
    total_results: 0
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_DATA":
            return {
                ...state, data: action.payload
            }
        case "SHORT_DATA": 
            return {
                ...state, shortData: action.payload.slice(0,5)
            };
        case "TOTAL_RESULTS":
            return {
                ...state, total_results: action.payload
            };
        case "INPUT_VALUE":
            return {
                ...state, value: action.payload
            };
        default: {
            return state
        }
    }
}