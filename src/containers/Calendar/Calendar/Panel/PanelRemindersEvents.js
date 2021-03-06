import React from 'react';
import Panel from './../../../../components/Panel';
import './PanelRemindersEvents.css';

export default class PanelRemindersEvents extends React.Component {
  render() {
    const Reminders = () => (
      <ul className="reminders-list">
        <li
          className="reminders-list-item"
          onMouseMove={e => {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty('--x', `${x}px`);
            e.target.style.setProperty('--y', `${y}px`);
          }}
        >
          <div>
            <span className="reminders-list-item-datetime">5:00PM</span>
            <span className="reminders-list-item-name">Call mom</span>
          </div>
          <div>
            <span className="reminders-list-item-delete-icon">
              <i className="fas fa-minus-circle" />
            </span>
          </div>
        </li>
        <li
          className="reminders-list-item"
          onMouseMove={e => {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty('--x', `${x}px`);
            e.target.style.setProperty('--y', `${y}px`);
          }}
        >
          <div>
            <span className="reminders-list-item-datetime">6:30PM</span>
            <span className="reminders-list-item-name">Make a dinner</span>
          </div>
          <div>
            <span className="reminders-list-item-delete-icon">
              <i className="fas fa-minus-circle" />
            </span>
          </div>
        </li>
      </ul>
    );

    const TodayEvents = () => (
      <ul className="today-events-list">
        <li className="today-events-list-item today-events-list-item-color-red"
        onMouseMove={e => {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty('--x', `${x}px`);
            e.target.style.setProperty('--y', `${y}px`);
          }}
        >
          <div className="today-events-list-item-timestamp">
            <span className="today-events-list-item-timestamp-time">11:30 AM</span>
          </div>
          <div className="today-events-list-item-details">
            <span className="today-events-list-item-details-title">Finish homework</span>
            <span className="today-events-list-item-details-calendar-name text-color-red">School</span>
          </div>
        </li>

        <li className="today-events-list-item today-events-list-item-color-red"
        onMouseMove={e => {
            const x = e.pageX - e.target.offsetLeft;
            const y = e.pageY - e.target.offsetTop;

            e.target.style.setProperty('--x', `${x}px`);
            e.target.style.setProperty('--y', `${y}px`);
          }}
        >
          <div className="today-events-list-item-timestamp">
            <span className="today-events-list-item-timestamp-time">11:30 AM</span>
          </div>
          <div className="today-events-list-item-details">
            <span className="today-events-list-item-details-title">Finish homework</span>
            <span className="today-events-list-item-details-calendar-name text-color-red">School</span>
          </div>
        </li>
      </ul>
    );

    return (
      <div className="panel-reminders-events">
        <Panel
          elements={[
            {
              featuredIcon: 'fas fa-bell',
              name: 'Reminders',
              actionIcon: 'fas fa-plus',
              actionIconTooltipText: 'Create a reminder',
              onActionIconPress: () => console.log('Press'),
              content: <Reminders />,
              order: 0
            },
            {
              featuredIcon: 'fas fa-calendar-day',
              name: 'Today',
              actionIcon: 'fas fa-plus',
              actionIconTooltipText: 'Create an event',
              onActionIconPress: () => console.log('Press'),
              content: <TodayEvents />,
              order: 1
            }
          ]}
          default={0}
        />
      </div>
    );
  }
}
