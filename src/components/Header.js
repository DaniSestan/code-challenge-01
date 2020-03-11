import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import headerStyles from './Header.module.css'
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    imageContainer: {
        height: '10em',
        width: '10em',
        margin: '2em',
        paddingTop: '1em'
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'contain'
    }
})


class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h1">Pokedex Search</Typography>
                </Grid>
                <Grid item>
                    <Box className={classes.imageContainer}>
                        <img src='/images/pokemon.png'
                             alt='pikachu-logo.png'
                             className={classes.image}
                        />
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Header);