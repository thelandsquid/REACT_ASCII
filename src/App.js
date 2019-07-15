import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ascii: "A"
    };
  }
  handleKeyPress(e) {
    this.setState({ ascii: e.key });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this), false);
  }
  render() {
    return (
      <div className="App">
        <head><link href="https://fonts.googleapis.com/css?family=Bahianita&display=swap" rel="stylesheet"></link></head>
          <div id="ascii">
            {this.state.ascii}
          </div>
      </div>
        );
      }
    }
    
