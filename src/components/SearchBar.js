import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import searchBarStyles from './SearchBar.module.css';
import {pokemon} from "../actions";
import {connect} from "react-redux";
import SearchFilter from "./SearchFilter";

class SearchBar extends React.Component {

    state = {
        term: '',
        returnResults: true,
        checkedSearchFilters: false

    }

    componentDidMount() {
        this.props.fetchPokemon('');
    }

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    renderSearchFilters = () => {
        return (
            <SearchFilter/>
        )
    }

    renderResultsHdr = () => {
        return (
            <div>
                <Typography variant="h5"
                            color="textSecondary"
                            className={searchBarStyles.resultsHdr}
                >
                    {this.props.pokemon.pokemon.length} results
                </Typography>
                <Button color="primary"
                        className={searchBarStyles.clearResultsBtn}
                        onClick={ () => this.props.fetchPokemon('')}
                >
                    Clear search results
                </Button>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item
                          className={searchBarStyles.gridItem}
                    >
                        <Typography variant="h4">
                            Search List:
                        </Typography>
                    </Grid>
                    <Grid item
                          className={[searchBarStyles.searchBarContainer, searchBarStyles.gridItem].join(' ')}
                    >
                        <TextField id="outlined-basic"
                                   label="Enter full or partial name: "
                                   variant="outlined"
                                   className={searchBarStyles.inputElement}
                                   fullWidth={true}
                                   value={this.state.term}
                                   onChange={e => this.setState({term: e.target.value})}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={this.state.checkedSearchFilters}
                                    onChange={ (e) => {
                                        this.setState({ checkedSearchFilters: e.target.checked })
                                    } }
                                    value="checkedSearchFilters"
                                    color="primary"
                                />
                            }
                            label="Add search filters"
                        />
                    </Grid>
                    <Grid item
                          className={searchBarStyles.gridItem}
                    >
                        <Button variant="outlined"
                                color="primary"
                                size="large"
                                onClick={ () => { this.setState({returnResults: true})}}

                        >
                            Catch 'em!
                        </Button>
                    </Grid>
                </Grid>
                { this.state.checkedSearchFilters ? this.renderSearchFilters() : null }
                { this.state.returnResults ? this.renderResultsHdr() : null }
            </div>
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

export default (connect(mapStateToProps, mapDispatchToProps)(SearchBar));
