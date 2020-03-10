import { combineReducers } from "redux";
import pokemonReducer from './pokemonListReducers'

export default combineReducers({
    pokemon: pokemonReducer,
})