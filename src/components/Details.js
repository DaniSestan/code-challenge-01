import React from "react";
import Button from "@material-ui/core/Button";

import detailsStyles from './Details.module.css'
import { pokemon } from '../actions';
import {connect} from "react-redux";

class Details extends React.Component {
    state = {
        pokemonData: this.props.pokemonData
    }

    render() {
        return (
            <div>
                <Button variant="contained">Back</Button>
            </div>

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

export default (connect(mapStateToProps, mapDispatchToProps)(Details));
