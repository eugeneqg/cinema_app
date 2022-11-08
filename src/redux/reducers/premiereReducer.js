const initialState = {
    data: []
}

export const premiereReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PREMIERE":
            return {
                ...state, data: action.payload
            };
        default:
            {return state}
    }
}