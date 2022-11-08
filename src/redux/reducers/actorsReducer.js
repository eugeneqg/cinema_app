const initialState = {
    data: [
        {
            profile_path: "",
            name: ""
        }
    ]
}

const actorsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CAST_DATA": 
        return {
            ...state, data: action.payload
        }
        case "RESET":
        return {
            ...state, data: [
                {
                    profile_path: "",
                    name: ""
                }
            ]
        }

        default:
            return state;
    }
}

export { actorsReducer };