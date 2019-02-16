import React from 'react';
import './index.css';
import PanelUser from './PanelUser';
import PanelCalendar from './PanelCalendar';
import PanelCalendars from './PanelCalendars';
import PanelRemindersEvents from './PanelRemindersEvents';
import { connect } from 'react-redux';

class PanelContainer extends React.Component {
  render() {
    if (this.props.isSidebarVisible) {
      return (
        <div className="panel-container">
          <PanelUser />
          <PanelCalendar />
          <PanelCalendars />
          <PanelRemindersEvents />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    isSidebarVisible: state.isSidebarVisible
  };
};

export default connect(mapStateToProps)(PanelContainer);
