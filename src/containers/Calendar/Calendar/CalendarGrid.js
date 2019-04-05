import React from 'react';
import './CalendarGrid.css';

class CalendarGrid extends React.Component {
  render() {
    return (
      <div className="calendar-week-grid">
        <div classNamee="calendar-week-days">
            <th><span className="table-day-name">Sunday</span><span className="table-day-num">2</span></th>
            <th><span className="table-day-name">Monday</span><span className="table-day-num">3</span></th>
            <th><span className="table-day-name">Tuesday</span><span className="table-day-num">4</span></th>
            <th><span className="table-day-name">Wednesday</span><span className="table-day-num">5</span></th>
            <th><span className="table-day-name">Thursday</span><span className="table-day-num">6</span></th>
            <th><span className="table-day-name">Friday</span><span className="table-day-num">7</span></th>
            <th><span className="table-day-name">Saturday</span><span className="table-day-num">8</span></th>
        </div>
      </div>
    );
  }
}

export default CalendarGrid;