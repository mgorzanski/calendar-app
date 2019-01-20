import React from 'react';
import './PanelCalendars.css';

export default class PanelCalendars extends React.Component {
  render() {
    return (
      <div className="panel-calendars">
        <div className="panel-title">
          <div className="panel-title-left">
            <span className="panel-featured-icon">
              <i className="far fa-calendar-alt"></i>
            </span>
            <h3 className="panel-name">
              Calendars
            </h3>
          </div>
          <div className="panel-title-right">
            <span className="panel-action-icon">
              <i className="fas fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}