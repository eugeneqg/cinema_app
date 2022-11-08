const initialState = {
    data: [ 
        {
            // action: {
                genreId: 28,
                genreName: "Action"
            // }
        },
        {
            // comedy: {
                genreId: 35,
                genreName: "Comedy"
            // }
        },
        {
            // drama: {
                genreId: 18,
                genreName: "Drama"
            // }
        },
        {
            // animation: {
                genreId: 16,
                genreName: "Animation"
            // }
        },
        {
            // crime: {
                genreId: 80,
                genreName: "Crime"
            // }
        },
        {
            // family: {
                genreId: 10751,
                genreName: "Family"
            // }
        },
        {
            // adventure: {
                genreId: 12,
                genreName: "Adventure"
            // }
        },
        {
            // fantasy: {
                genreId: 14,
                genreName: "Fantasy"
            // }
        },
        {
            // horror: {
                genreId: 27,
                genreName: "Horror"
            // }
        }
    ],

    allGenres: [
        {
            id: 28,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: ""
        }
    ]
}

const genreReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ALL_GENRES":
            return {
                ...state, allGenres: action.payload
            };
        default:
            return state;
    }
}

export {genreReducer};