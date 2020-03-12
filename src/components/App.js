import React from 'react';
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import { pokemon } from '../actions';
import {connect} from "react-redux";
import styles from './App.module.css'
import Details from "./Details";

class App extends React.Component {

    state = {
        query: {
            term: '',
            type: [],
            weaknesses: []
        },
        list: {},
        pokemonData: null
    }

    componentDidMount() {
        this.setState({ list: this.props.fetchPokemon(this.state.query)})
    }

    getQuery = (query) => {
        this.setState({query: query})
        this.props.fetchPokemon(query)
    }

    getDetails = (pokemonData) => {
        this.setState({pokemonData: pokemonData})
        console.log('$$$$$$$$$', pokemonData);
    }

    returnList = () => {
        this.setState({pokemonData: null})
    }

    renderPokemonList = () => {
        return (
            <PokemonList list={this.props.pokemon.pokemon} details={this.getDetails}/>
        )
    }

    renderDetails = () => {
        return (
            <Details data={this.state.pokemonData} returnList={this.returnList}/>
        )
    }

    render() {

        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Header/>
                </Grid>
                <Grid item
                      className = {[styles.container, styles.gridItem].join(' ')}
                >
                    <SearchBar query={this.getQuery}/>
                </Grid>
                <Grid item
                      className = {styles.container}
                >
                    {!this.state.pokemonData ? this.renderPokemonList() : this.renderDetails()}

                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = {
    fetchPokemon: pokemon
};

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
    }
};

export default (connect(mapStateToProps, mapDispatchToProps)(App));
