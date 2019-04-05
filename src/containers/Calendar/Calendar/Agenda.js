import React from 'react';
import './Agenda.css';

class Agenda extends React.Component {
  render() {
    return (
      <div className="agenda-view">
        <h2 className="agenda-view-title">Agenda</h2>
        <div className="agenda-listview">
          <section className="agenda-listview-item">
            <h3 className="agenda-listview-item-date agenda-listview-item-date-current">2nd September</h3>
            <ul className="agenda-listview-item-events-list">
              <li className="agenda-listview-item-events-list-item agenda-listview-item-events-list-item-color-purple">
                <div className="agenda-listview-item-events-list-item-timestamp">
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">Start</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">6:30 AM</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">End</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">8:00 AM</span>
                </div>
                <div className="agenda-listview-item-events-list-item-details">
                  <span className="agenda-listview-item-events-list-item-details-text">Do the shopping</span>
                  <span className="agenda-listview-item-events-list-item-details-calendar text-color-purple">Personal</span>
                </div>
              </li>

              <li className="agenda-listview-item-events-list-item agenda-listview-item-events-list-item-color-red">
                <div className="agenda-listview-item-events-list-item-timestamp">
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">Start</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">11:30 AM</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">End</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">2:00 PM</span>
                </div>
                <div className="agenda-listview-item-events-list-item-details">
                  <span className="agenda-listview-item-events-list-item-details-text">Finish homework</span>
                  <span className="agenda-listview-item-events-list-item-details-calendar text-color-red">School</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="agenda-listview-item">
            <h3 className="agenda-listview-item-date">3td September</h3>
            <ul className="agenda-listview-item-events-list">
              <li className="agenda-listview-item-events-list-item agenda-listview-item-events-list-item-color-purple">
                <div className="agenda-listview-item-events-list-item-timestamp">
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">Start</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">6:30 AM</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">End</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">8:00 AM</span>
                </div>
                <div className="agenda-listview-item-events-list-item-details">
                  <span className="agenda-listview-item-events-list-item-details-text">Do the shopping</span>
                  <span className="agenda-listview-item-events-list-item-details-calendar text-color-purple">Personal</span>
                </div>
              </li>

              <li className="agenda-listview-item-events-list-item agenda-listview-item-events-list-item-color-red">
                <div className="agenda-listview-item-events-list-item-timestamp">
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">Start</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">11:30 AM</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-start-end">End</span>
                  <span className="agenda-listview-item-events-list-item-timestamp-time">2:00 PM</span>
                </div>
                <div className="agenda-listview-item-events-list-item-details">
                  <span className="agenda-listview-item-events-list-item-details-text">Finish homework</span>
                  <span className="agenda-listview-item-events-list-item-details-calendar text-color-red">School</span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Agenda;