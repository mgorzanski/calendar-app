import React from 'react';
import PanelContainer from './Panel';
import './index.css';
import Header from './Header';
import Agenda from './Agenda';
import CalendarGrid from './CalendarGrid';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <div className="calendar-screen">
        <PanelContainer />
        <div className="main-container">
          <Header />
          <main className="calendar-view">
            <div className="condensed-view overflow-scroll">
              <CalendarGrid />
            </div>
            <Agenda />
          </main>
        </div>
      </div>
    );
  }
}
