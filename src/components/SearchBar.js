import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import searchBarStyles from './SearchBar.module.css';


class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
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
                               label="Name"
                               variant="outlined"
                               className={searchBarStyles.inputElement}
                               fullWidth={true}
                    />
                    <FormGroup row
                               className={searchBarStyles.inputElement}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    // onChange={handleChange('checkedB')}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                            label="Add search filters"
                        />
                    </FormGroup>
                </Grid>
                <Grid item
                      className={searchBarStyles.gridItem}
                >
                    <Button variant="outlined"
                            color="primary"
                            size="large"
                    >
                        Catch 'em!
                    </Button>
                </Grid>


            </Grid>
        )
    }
}

export default SearchBar;