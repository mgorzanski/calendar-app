import React from 'react';
import './Sidebar.css';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="main-sidebar">
        <nav className="main-sidebar-nav">
          <div className="show-hide-panel-button">
            <i className="fas fa-chevron-left"></i>
          </div>

          <ul className="top-menu-buttons">
            <li className="main-sidebar-menu-item-active"><i className="fas fa-calendar"></i></li>
            <li><i className="far fa-chart-bar"></i></li>
            <li><i className="fas fa-users"></i></li>
            <li><i className="fas fa-address-card"></i></li>
          </ul>

          <ul className="bottom-menu-buttons">
            <li><i className="fas fa-cog"></i></li>
          </ul>
        </nav>
      </div>
    );
  }
}