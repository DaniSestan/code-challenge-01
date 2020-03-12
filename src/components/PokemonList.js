import React from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import { pokemon } from '../actions';
import pokemonListStyles from './PokemonList.module.css'

class PokemonList extends React.Component {

    handleViewDetails = (pokemon) => {
        this.props.details(pokemon)
    }

    renderList = () => {

        const pokemon = this.props.list;

        return pokemon.map((pokemon, index) => {
            return(
                <div key = {pokemon.id}>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt={pokemon.name}
                                            src={pokemon.img}
                                            className={pokemonListStyles.large}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="h4"
                                                color="textPrimary"
                                            >
                                                {pokemon.name}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="h6"
                                                color="textSecondary"
                                            >
                                                # {pokemon.num}
                                                <br/>
                                                Type: {pokemon.type.join(', ')}
                                                <br/>
                                                Weaknesses: {pokemon.weaknesses.join(', ')}
                                            </Typography>
                                        </React.Fragment>

                                    }

                                />
                            </ListItem>
                        </Grid>
                        <Grid item>
                            <Button variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={ () => this.handleViewDetails(pokemon) }
                            >
                                Details
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider />
                </div>
            )
        })
    }

    render () {
        console.log(this.props.pokemon)

        return (
            <Container>

                <List>
                    {this.renderList()}
                </List>
            </Container>
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

export default (connect(mapStateToProps, mapDispatchToProps)(PokemonList));
