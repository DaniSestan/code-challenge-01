import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import clsx from 'clsx';

import searchBarStyles from './SearchBar.module.css';
import {pokemon} from "../actions";
import {connect} from "react-redux";
import SearchFilter from "./SearchFilter";

class SearchBar extends React.Component {

    state = {
        term: '',
        returnResults: false,
        checkedSearchFilters: false,
        clearedSearch: true,
        filters: {
            weaknesses: [],
            type: []
        },
    }

    onSearchSubmit = (event) => {
        this.setState({returnResults: true})
        console.log('######check', this.state.filters)
        let type = []
        let weaknesses = []

        if(this.state.filters !== {}) {
            Object.values(this.state.filters.type).map( f => {
                if (f[Object.keys(f)[0]])
                    type.push(Object.keys(f)[0])
            })
            Object.values(this.state.filters.weaknesses).map( f => {
                if (f[Object.keys(f)[0]])
                    weaknesses.push(Object.keys(f)[0])
            })
        }

        this.props.query({
            term: this.state.term,
            type: type,
            weaknesses: weaknesses
        })

    };

    handleClearSearch = () => {
        this.setState({
            returnResults: false,
            term: '',
            checkedSearchFilters: false
        })

        this.props.fetchPokemon({
            term: '',
            type: [],
            weaknesses: []
        })

    }

    getSelectedFilters = (filters) => {
        this.setState({filters: filters})
    }

    renderSearchFilters = () => {
        return (
            <SearchFilter onSubmit={this.state.returnResults} selectedFilters={this.getSelectedFilters}/>
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
                        onClick={ () => this.handleClearSearch()}
                >
                    Clear results | New Search
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
                                   disabled={this.state.returnResults}
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
                                    disabled={this.state.returnResults}
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
                                onClick={ this.onSearchSubmit }
                                className={clsx({
                                    [searchBarStyles.buttonOnRenderResults] : this.state.returnResults
                                })}

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
