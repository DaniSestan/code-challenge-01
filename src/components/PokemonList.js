import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import { pokemon } from "../actions";

class PokemonList extends React.Component {

    useStyles() {
        return makeStyles(theme => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
            inline: {
                display: 'inline',
            },
        }));
    }

    componentDidMount() {
        this.props.fetchPokemon('');
    }

    renderList() {
        const classes = this.useStyles();
        const pokemon = this.props.pokemon.pokemon;
        return pokemon.map((pokemon, index) => {
            return(
                <div key = {pokemon.id}>
                    <ListItem>
                        <ListItemText
                            primary={pokemon.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Name: {pokemon.name}
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
        const classes = this.useStyles();

        return (
            <Container>
                <List className={classes.root}>
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
        pokemon: state.pokemon
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
