import React from 'react';
import './Sidebar.css';
import { toggleSidebar } from './../../actions/ui';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="main-sidebar">
        <nav className="main-sidebar-nav">
          <div className="show-hide-panel-button">
            {this.props.isSidebarVisible ? (
              <i
                className="fas fa-chevron-left"
                onClick={() => this.props.toggleSidebar()}
              />
            ) : (
              <i
                className="fas fa-chevron-right"
                onClick={() => this.props.toggleSidebar()}
              />
            )}
          </div>

          <ul className="top-menu-buttons">
            <li className="main-sidebar-menu-item-active">
              <i className="fas fa-calendar" />
            </li>
            <li>
              <i className="far fa-chart-bar" />
            </li>
            <li>
              <i className="fas fa-users" />
            </li>
            <li>
              <i className="fas fa-address-card" />
            </li>
          </ul>

          <ul className="bottom-menu-buttons">
            <li>
              <i className="fas fa-cog" />
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSidebarVisible: state.ui.isSidebarVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
