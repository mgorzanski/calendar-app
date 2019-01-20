import React from 'react';
import './index.css';
import PanelUser from './PanelUser';
import PanelCalendar from './PanelCalendar';
import PanelCalendars from './PanelCalendars';

export default class PanelContainer extends React.Component {
  render() {
    return (
      <div className="panel-container">
        <PanelUser />
        <PanelCalendar />
        <PanelCalendars />
      </div>
    );
  }
}