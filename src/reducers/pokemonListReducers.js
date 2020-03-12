import { pokemonRequestTypes } from "../constants";

const initialState = {
    loading: false,
    error: null,
    pokemon: [],
    pokemonUnfiltered: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case pokemonRequestTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case pokemonRequestTypes.FETCH_POSTS_SUCCESS:
            console.log('^^^^^^^^', action.payload[1])
            return {
                ...state,
                loading: false,
                error: null,
                pokemon: action.payload[0],
                pokemonUnfiltered: action.payload[1]
            };
        case pokemonRequestTypes.FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default: return state;
    }
}