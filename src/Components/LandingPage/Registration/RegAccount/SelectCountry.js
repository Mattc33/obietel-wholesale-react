import React, { Component } from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class SelectCountry extends Component {

    state = {
        options: []
    }

    componentDidMount() {
        this.fetchCountryOptions()
    }

    fetchCountryOptions() {
        fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json')
            .then( (res) => {
                return res.json();
            })
            .then( (json) => {
                this.setState({options: json});
                console.log(this.state.options);
            })
    }
    
    render() {
        return (
            <Select
                showSearch
                placeholder="Select Country"
                optionFilterProp="children"
            >
                { this.state.options.map((option, key) => <option key={key} >{option.country}</option>) }
            </Select>
        )
    }
}

export default SelectCountry;