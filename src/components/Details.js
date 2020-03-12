import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import detailsStyles from './Details.module.css'
import { pokemon } from '../actions';
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import pokemonListStyles from "./PokemonList.module.css";
import Avatar from "@material-ui/core/Avatar";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemonData: {}
        }
    }

    componentDidMount () {
        this.setState({pokemonData: this.props.data})
    }

    handlePageReturn = () => {
        this.props.returnList()
    }

    //TODO: the update to this.state.pokemonData which should be used to render the components
    // data is working, insofar as this change can be logged when the Button for details is clicked.
    // This additional details button for each pokemon being referenced has been commented out.
    // However, updated data from state after clicking button is not rendering to page correctly.
    // May be issue with loading state -- add changes to address this.

    handleDetailsPointer = (pokemon) => {
        let pokemonList = this.props.pokemon.pokemonUnfiltered;
        let pokemonData = pokemonList.filter( (e) => {
            return e.name == pokemon
        })
        this.setState({pokemonData:pokemonData})
    }

    renderEvolution = (evol) => {
    let evolutionArray = this.state.pokemonData[evol]
    let buttonList = [];
        if (evolutionArray) {
               evolutionArray.map(( (pokemon, i) => {
                   buttonList.push(
                       <div key={i}
                            className={detailsStyles.btnList}
                       >
                           {/*TODO: resolve state loading issue for the event handler*/}
                           <Button variant="contained"
                                   size="small"
                                   onClick = { () => this.handleDetailsPointer(pokemon.name) }
                                   className={detailsStyles.evolBtn}
                           >
                               {pokemon.name}
                           </Button>
                       </div>
                   )
               }))

        }

        return buttonList;
    }

    mapTraits = () => {
        let traits = {
            name: 'Name: ',
            num: '# :',
            height: 'Height: ',
            weight: 'Weight: ',
            type: "Type: ",
            weaknesses: 'Weaknesses: '
        }

        const joinArr = (key) => {
            return this.props.data[key].join(', ')
        }

        const strData = (key) => {
            return this.state.pokemonData[key];
        }

        let pokemonTraits = Object.keys(traits).map( (key, i) => {
            return(
                <Grid item
                      key = {i}
                      className={detailsStyles.gridItem}
                >
                    <Typography variant="h6"
                                className={detailsStyles.title}
                    >
                        {traits[key]}
                    </Typography>
                    <Typography variant="h6"
                                className={detailsStyles.stat}
                    >
                        {(key === 'weaknesses') ? joinArr(key) : null}
                        {(key === 'type') ? joinArr(key) : null}
                        {(key !== 'weaknesses' && key !== 'type') ? strData(key) : null}
                    </Typography>
                </Grid>
                )
        });
        return pokemonTraits
    }

    render() {
        console.log('CURRENT POKEMON', this.state.pokemonData)
        const pokemon = this.state.pokemonData
        return (
            <div className={detailsStyles.container}>
                <div className={detailsStyles.backBtn}>
                    <Button variant="contained"
                            onClick={ () => this.handlePageReturn() }
                    >
                        Back
                    </Button>
                </div>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Avatar alt={pokemon.name}
                            src={pokemon.img}
                            className={detailsStyles.extraLarge}
                    />

                    {this.mapTraits()}

                    <Grid item>
                        <Typography variant="h6"
                                    className={detailsStyles.arrItem}
                        >
                            Previous Evolution:
                        </Typography>
                        { this.renderEvolution('prev_evolution') }
                    </Grid>
                    <Grid item>
                        <Typography variant="h6"
                                    className={detailsStyles.arrItem}
                        >
                            Next Evolution:
                        </Typography>
                        { this.renderEvolution('next_evolution') }
                    </Grid>
                </Grid>


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
