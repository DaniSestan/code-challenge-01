import axios from 'axios';

import { pokemonRequestTypes } from "../constants";

const filterResults = (query, response) => {
    let testQuery = {
        term: 'saur',
        type: [],
        weaknesses: []
    }
    console.log('#######', response);
    let results = response;
    // let results = {};

    let foo = results.filter( pokemon => {
        if (pokemon.type.includes('Fire'))
            return pokemon;
    })

    console.log('foo!!!!!!!!!', foo);
    return results;
}
export const pokemon = pokemon => (dispatch, getState) => {
    dispatch(requestLoading(pokemonRequestTypes.FETCH_POSTS_REQUEST));
    return axios.get(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
        .then (res => {
            let results = filterResults(pokemon, res.data.pokemon)
            dispatch(requestSuccess(pokemonRequestTypes.FETCH_POSTS_SUCCESS, results));
        })
        .catch(err => {
            dispatch(requestFailure(pokemonRequestTypes.FETCH_POSTS_FAILURE, err.message));
        })
};

const requestLoading = type => ({
    type: type,
    payload: null,
});

const requestSuccess = (type, response, query) => ({
    type: type,
    payload: response,
});

const requestFailure = (type, error) => ({
    type: type,
    payload: {error},
});
