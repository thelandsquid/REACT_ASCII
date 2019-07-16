import React from 'react';
import github_mark from './github-mark.svg';
import { InfoBlock } from './InfoBlock';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: "Press a key to start",
      ascii: "",
      which: "",
      key: "",
      code: ""
    };
  }
  handleKeyPress(e) {
    debugger;
    this.setState({
      pressed: this.getKey(e),
      ascii: this.getAscii(e),
      which: e.which,
      key: e.key,
      code: e.code
    });
  }
  getKey(e) {
    if (e.key == ' ')
      return 'Space';
    return e.key;
  }
  getAscii(e) {
    if (e.key.match(/^.$/g))
      return e.key.charCodeAt(0);
    return "N/A";
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this), false);
  }
  render() {
    return (
      <div className="App">
        <head>
          <link href="https://fonts.googleapis.com/css?family=Bahianita&display=swap" rel="stylesheet" />
        </head>
        <a href="https://github.com/thelandsquid/ascii-value-react">
          <img src={github_mark} alt="Github Logo" />
        </a>
        <div id="ascii">
          {this.state.pressed}
        </div>
        <div id="info-block-container">
          <InfoBlock infoHeader="ASCII" infoDetails={this.state.ascii} />
          <InfoBlock infoHeader="event.which" infoDetails={this.state.which} />
          <InfoBlock infoHeader="event.key" infoDetails={this.state.key} />
          <InfoBlock infoHeader="event.code" infoDetails={this.state.code} />
        </div>
      </div>
    );
  }
}

