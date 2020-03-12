import React from 'react';
import Grid from "@material-ui/core/Grid";

import Header from "./Header";
import SearchBar from "./SearchBar";
import PokemonList from "./PokemonList";
import { pokemon } from '../actions';
import {connect} from "react-redux";
import styles from './App.module.css'

class App extends React.Component {

    state = {
        query: {
            term: '',
            type: [],
            weaknesses: []
        },
        list: {}
    }

    componentDidMount() {
        this.setState({ list: this.props.fetchPokemon(this.state.query)})
    }

    getQuery = (query) => {
        this.setState({query: query})
        this.props.fetchPokemon(query)
    }

    render() {

        console.log('##########state', this.state)
        const { classes } = this.props;

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
                    {/*<SearchBar/>*/}
                </Grid>
                <Grid item
                      className = {styles.container}
                >
                    <PokemonList list={this.props.pokemon.pokemon}/>
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
