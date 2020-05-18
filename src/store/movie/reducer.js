const INITIAL_STATE = {
    movies: [],
    isLoading: false,
    isLoaded: true
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case 'LOAD_MOVIES':
            return {
                ...state,
                isLoading: true,
                isLoaded: false
            }

        case 'LOAD_MOVIES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                movies: action.payload
            }
        case 'LOAD_MOVIES_FAIL':
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                movies: []
            }

        default:
            return state
    }
}

export const selectMovies = state => state.movieReducer.movies;