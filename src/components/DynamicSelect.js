import React, { Component } from 'react';

class DynamicSelect extends Component {

    handleChange = (e) => {
        let selectedValue = e.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render() {
        let dataArray = this.props.dataArray;
        let options = dataArray.map((data) => 
            <option
                key={data.id}
                value={data.id}
            >
                {data.name}
            </option>
        );

        return (
            <select 
                name="customSearch" 
                className="custom-search-select" 
                onChange={this.handleChange}
            >
                <option>Select Item</option>
                {options}
            </select>
        )
    }
}

export default DynamicSelect;