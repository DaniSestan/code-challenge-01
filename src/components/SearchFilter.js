import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import searchFilterStyles from './SearchFilter.module.css'

class SearchFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: [
                {'Normal': false},
                {'Fighting': false},
                {'Flying': false},
                {'Poison': false},
                {'Ground': false},
                {'Rock': false},
                {'Bug': false},
                {'Ghost': false},
                {'Steel': false},
                {'Fire': false},
                {'Water': false},
                {'Grass': false},
                {'Electric': false},
                {'Psychic': false},
                {'Ice': false},
                {'Dragon': false},
                {'Fairy': false},
                {'Dark': false},
            ],
            weaknesses: [
                {'Normal': false},
                {'Fighting': false},
                {'Flying': false},
                {'Poison': false},
                {'Ground': false},
                {'Rock': false},
                {'Bug': false},
                {'Ghost': false},
                {'Steel': false},
                {'Fire': false},
                {'Water': false},
                {'Grass': false},
                {'Electric': false},
                {'Psychic': false},
                {'Ice': false},
                {'Dragon': false},
                {'Fairy': false},
                {'Dark': false},
            ],

        }
    }

    handleOnChange = async (key, filter) => {
        let filtersArray = this.state[key];

        await Object.values(filtersArray.map( (o, i) => {
                if (Object.keys(o)[0] == filter)
                    return o[filter] ? filtersArray[i] = {[filter]: false} : filtersArray[i] = {[filter]: true};
            })
        )
        await this.setState({ [key]: filtersArray })
        this.props.selectedFilters(this.state);
    }

    getCheckedFilter = (key, filter) => {
        Object.values(this.state[key].map((o) => {
                if (Object.keys(o)[0] == filter) {
                    return Object.keys(o)[0][filter]
                }
            })
        )
    }

    renderFilters = (key) => {
        let filters = []
        Object.values(this.state[key].map((o) =>
            filters.push(Object.keys(o)[0])
        ))

        return filters.map((filter, index) => {
            return (
                <div key={filter}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.getCheckedFilter(key, filter)}
                                onChange={(e) => this.handleOnChange(key, e.target.value, e.target.attributes)}
                                value={filter}
                                color="primary"
                                disabled={this.props.onSubmit}
                            />
                        }
                        label={filter}
                    />
                </div>
            )
        })
    }

    render() {
        return (
            <div className={searchFilterStyles.wrapGroup}>
                <div className={searchFilterStyles.filtersGroup}>
                    <Typography variant="h6">
                        Type:
                    </Typography>
                    <FormGroup row>
                        { this.renderFilters('type') }
                    </FormGroup>
                </div>
                <div className={searchFilterStyles.filtersGroup}>
                    <Typography variant="h6">
                        Weaknesses:
                    </Typography>
                    <FormGroup row>
                        { this.renderFilters('weaknesses') }
                    </FormGroup>
                </div>
            </div>
        )
    }
}

export default SearchFilter;