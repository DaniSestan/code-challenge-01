import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { withStyles } from '@material-ui/styles';

import Header from "./Header";
import SearchBar from "./SearchBar";
import PostList from "./PokemonList";

const styles = theme => ({
    container: {
        width: '90vw !important'
    },
    gridItem: {
        marginTop: '5em',
        marginBottom: '5em'
    }
})

class App extends React.Component {

    state = {

    }

    render() {
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
                      className = {[classes.container, classes.gridItem].join(' ')}
                >
                    <SearchBar/>
                </Grid>
                <Grid item
                      className = {classes.container}
                >
                    <PostList/>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(App);