import { pokemonRequestTypes } from "../constants";

const initialState = {
    loading: false,
    error: null,
    pokemon: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case pokemonRequestTypes.FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case pokemonRequestTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                pokemon: action.payload,
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