import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class SearchFilter extends React.Component {
    constructor(props){
        super(props);
        this.filters = [
            'fire',
            'ice',
            'water'
        ]
        this.state = {

        }
    }

    renderFilters() {
        return (
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={this.state.checkedSearchFilters}
                            // onChange={ (e) => {
                            //     this.setState({ checkedSearchFilters: e.target.checked })
                            // } }
                            // value="checkedSearchFilters"
                            // color="primary"
                        />
                    }
                    label="Add search filters"
                />
            </FormGroup>
        )
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h6">
                        Type:
                    </Typography>
                    { this.renderFilters() }
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Weaknesses:
                    </Typography>
                    { this.renderFilters() }
                </Grid>
            </Grid>
        )
    }
}

export default SearchFilter;