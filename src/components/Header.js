import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import headerStyles from './Header.module.css'

const Header = () => {
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
                <Box className={headerStyles.imageContainer}>
                    <img src='/images/pokemon.png'
                         alt='pikachu-logo.png'
                         className={headerStyles.image}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header;