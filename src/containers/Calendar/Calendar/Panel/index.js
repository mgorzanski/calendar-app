import React from 'react';
import './index.css';
import PanelUser from './PanelUser';
import PanelCalendar from './PanelCalendar';

export default class PanelContainer extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <PanelUser />
        <PanelCalendar />
      </div>
    );
  }
}