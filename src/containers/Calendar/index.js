import React from 'react';
import './index.css';
import Sidebar from './Sidebar';

export default class CalendarContainer extends React.Component {
  render() {
    return (
      <div className="calendar-container">
        <Sidebar />
      </div>
    );
  }
}