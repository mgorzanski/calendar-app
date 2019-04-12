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

    return (
      <div className="panel-reminders-events">
        <Panel
          elements={[
            {
              featuredIcon: 'fas fa-bell',
              name: 'Reminders',
              actionIcon: 'fas fa-plus',
              onActionIconPress: () => console.log('Press'),
              content: <Reminders />,
              order: 0
            },
            {
              featuredIcon: 'far fa-list-alt',
              name: 'Today',
              actionIcon: 'fas fa-plus',
              onActionIconPress: () => console.log('Press'),
              content: <Reminders />,
              order: 1
            }
          ]}
          default={0}
        />
      </div>
    );
  }
}
