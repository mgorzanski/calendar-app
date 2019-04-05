import React from 'react';
import './index.css';
import Sidebar from './Sidebar';
import CalendarScreen from './Calendar';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export default class CalendarContainer extends React.Component {
  render() {
    return (
      <div className="calendar-container">
        <Sidebar />
        <Router>
          <div className="app-router">
            <Route exact path="/" render={() => (
              <Redirect to="/calendar/main" />
            )} />
            <Route exact path="/calendar/main" component={CalendarScreen} />
          </div>
        </Router>
      </div>
    );
  }
}