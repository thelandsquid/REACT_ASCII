import React from 'react';
import './App.css';

export class InfoBlock extends React.Component {
  render() {
    return (
      <div className="info-block">
        <div className="info-header">{this.props.infoHeader}</div>
        <div className="info-details">{this.props.infoDetails}</div>
      </div>
        );
      }
    }
    
