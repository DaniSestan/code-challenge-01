import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class SearchFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filters: [
                'foo',
                'bar',
                'baz'
            ]
        }
    }

    handleOnChange = (filter, checkedAttrib) => {
        if(checkedAttrib){
            const filtersArr = this.state.filters;
            filtersArr.push(filter)
            console.log('new filter arr: ', filtersArr)
        }
        console.log('handleonchange arg', filter)
        console.log('handleonchange', this.state.filters)
    }

    getCheckedFilter = (filter) => {
        console.log('getchecked arg: ', filter)
        console.log('filters state: ', this.state.filters)
        return true;
    }

    renderFilters =() => {
        const filters = this.state.filters;
        return filters.map((filter, index) => {
            return (
                <div key={filter}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.getCheckedFilter()}
                                onChange={(e) => this.handleOnChange(e.target.value, e.target.attributes.checked)}
                                value={filter}
                                color="primary"
                            />
                        }
                        label="Add search filters"
                    />
                </div>
            )
        })
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
                    <FormGroup row>
                        { this.renderFilters() }
                    </FormGroup>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        Weaknesses:
                    </Typography>
                    <FormGroup row>
                        { this.renderFilters() }
                    </FormGroup>
                </Grid>
            </Grid>
        )
    }
}

export default SearchFilter;