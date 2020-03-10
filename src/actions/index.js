import axios from 'axios';

import { pokemonRequestTypes } from "../constants";

export const pokemon = pokemon => (dispatch, getState) => {
    dispatch(requestLoading(pokemonRequestTypes.FETCH_POSTS_REQUEST));
    return axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`).then (res => {
            dispatch(requestSuccess(pokemonRequestTypes.FETCH_POSTS_SUCCESS, res.data.pokemon));
        })
        .catch(err => {
            dispatch(requestFailure(pokemonRequestTypes.FETCH_POSTS_FAILURE, err.message));
        })
};

const requestLoading = type => ({
    type: type,
    payload: null
});

const requestSuccess = (type, response) => ({
    type: type,
    payload: response
});

const requestFailure = (type, error) => ({
    type: type,
    payload: {error}
});
