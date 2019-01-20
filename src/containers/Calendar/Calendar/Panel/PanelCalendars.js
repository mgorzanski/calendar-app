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

        <div className="panel-content">
          <ul className="calendars-list">
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-red"></span>
              <span className="calendars-list-item-name">School</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-purple"></span>
              <span className="calendars-list-item-name">Personal</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-yellow calendars-list-item-not-active"></span>
              <span className="calendars-list-item-name">Work</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-green calendars-list-item-not-active"></span>
              <span className="calendars-list-item-name">Sport</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}