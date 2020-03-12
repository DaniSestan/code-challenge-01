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

import { pokemon } from '../actions';
import pokemonListStyles from './PokemonList.module.css'
class PokemonList extends React.Component {

    state = {
    }

    renderList = () => {

        const pokemon = this.props.list;

        return pokemon.map((pokemon, index) => {
            return(
                <div key = {pokemon.id}>
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
                                        Type: {pokemon.type}
                                        <br/>
                                        Weaknesses: {pokemon.weaknesses}
                                    </Typography>
                                </React.Fragment>

                            }

                        />
                    </ListItem>
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
