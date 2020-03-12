import axios from 'axios';

import { pokemonRequestTypes } from "../constants";

const filterResults = (query, response) => {
    let results = [response]
    let queriedResults = response.filter( pokemon => {
        let match = true;
        const check = (filtersArr) => {
            query[filtersArr].forEach( filter => {
                if(!pokemon[filtersArr].includes(filter)){
                    return match = false;
                }
            })
        }

        if(pokemon.name.toLowerCase().includes(query.term)){
            check('type');
            check('weaknesses');
            if (match)
                return pokemon;
        }
    })
    results.push(queriedResults)
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
