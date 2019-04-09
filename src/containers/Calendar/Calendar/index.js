import React from 'react';
import PanelContainer from './Panel';
import './index.css';
import Header from './Header';
import Agenda from './Agenda';
import CalendarGrid from './CalendarGrid';
import { connect } from 'react-redux';

class CalendarScreen extends React.Component {
  render() {
    return (
      <div className="calendar-screen">
        <PanelContainer />
        <div className={ this.props.isSidebarVisible ? "main-container" : "main-container main-container-full-size" }>
          <Header />
          <main className="calendar-view">
            <div className="condensed-view">
              <CalendarGrid />
            </div>
            <Agenda />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSidebarVisible: state.ui.isSidebarVisible
  };
};

export default connect(mapStateToProps)(CalendarScreen);
