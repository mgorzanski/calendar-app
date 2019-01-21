import React from 'react';
import Panel from './../../../../components/Panel';
import './PanelRemindersEvents.css';

export default class PanelRemindersEvents extends React.Component {
  render() {
    return (
      <div className="panel-reminders-events">
        <Panel
            featuredIcon="fas fa-bell"
            name="Reminders"
            actionIcon="fas fa-plus"
            onActionIconPress={() => console.log('Press')}
          >
            <ul className="reminders-list">
              <li className="reminders-list-item">
                <div>
                  <span className="reminders-list-item-datetime">5:00PM</span>
                  <span className="reminders-list-item-name">Call mom</span>
                </div>
                <div>
                  <span className="reminders-list-item-delete-icon">
                    <i className="fas fa-minus-circle"></i>
                  </span>
                </div>
              </li>
              <li className="reminders-list-item">
                <div>
                  <span className="reminders-list-item-datetime">6:30PM</span>
                  <span className="reminders-list-item-name">Make a dinner</span>
                </div>
                <div>
                  <span className="reminders-list-item-delete-icon">
                    <i className="fas fa-minus-circle"></i>
                  </span>
                </div>
              </li>
            </ul>
        </Panel>
      </div>
    );
  }
}