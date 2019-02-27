import React from 'react';
import PanelContainer from './Panel';
import './index.css';
import Header from './Header';
import Agenda from './Agenda';

export default class CalendarScreen extends React.Component {
  render() {
    return (
      <div className="calendar-screen">
        <PanelContainer />
        <div className="main-container">
          <Header />
          <main className="calendar-view">
            <div className="condensed-view">
              
            </div>
            <Agenda />
          </main>
        </div>
      </div>
    );
  }
}
