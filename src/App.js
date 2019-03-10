import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicSelect from './components/DynamicSelect';

const dataArray = require('./testData.json');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue: 'Nothing selected'
    }
  }

  handleSelectChange = (selectedValue) => {
    this.setState({
      selectedValue: selectedValue
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dynamic Select Dropdown</h1>
        </header>
        <p className="App-intro">
          <DynamicSelect dataArray={dataArray} onSelectChange={this.handleSelectChange}/>
          <br />
          <br />
          <div>
            Selected Value: {this.state.selectedValue}
          </div>
        </p>
      </div>
    );
  }
}

export default App;
