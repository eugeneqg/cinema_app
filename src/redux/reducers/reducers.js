const initialState = {
    data: [
        {    
            title: "",
            id: 1,
            image: ""
        },
        {    
            title: "",
            id: 2,
            image: ""
        },
        {    
            title: "",
            id: 3,
            image: ""
        },
        {    
            title: "",
            id: 4,
            image: ""
        },
        {    
            title: "",
            id: 5,
            image: ""
        }
        ],

        fullData: [
            {    
                title: "",
                id: 1,
                image: ""
            }
        ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "POPULAR": 
        return {
            ...state, data: action.payload
        };
        case "FULL_POPULAR": 
        return {
            ...state, fullData: action.payload
        };
        case "EMPTY":
            return {
                 ...state, data: action.payload
            }
        default: 
        return state;
    }
}