import React from 'react';
import './index.css';
import PanelUser from './PanelUser';

export default class PanelContainer extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <PanelUser />
      </div>
    );
  }
}