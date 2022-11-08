const initialState =  {
        show: false
    }

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW":
            return {
                ...state, show: !state.show
            };
        default: 
            return {
                state
            }    
        }
}

export { pageReducer };