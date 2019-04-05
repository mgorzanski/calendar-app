import React from 'react';
import Panel from './../../../../components/Panel';
import './PanelCalendars.css';

export default class PanelCalendars extends React.Component {
  render() {
    return (
      <div className="panel-calendars">
        <Panel
          featuredIcon="far fa-calendar-alt"
          name="Calendars"
          actionIcon="fas fa-plus"
          onActionIconPress={() => console.log('Press')}
        >
          <ul className="calendars-list">
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-red" />
              <span className="calendars-list-item-name">School</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-purple" />
              <span className="calendars-list-item-name">Personal</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-yellow calendars-list-item-not-active" />
              <span className="calendars-list-item-name">Work</span>
            </li>
            <li className="calendars-list-item">
              <span className="calendars-list-item-color calendars-list-item-color-green calendars-list-item-not-active" />
              <span className="calendars-list-item-name">Sport</span>
            </li>
          </ul>
        </Panel>
      </div>
    );
  }
}
