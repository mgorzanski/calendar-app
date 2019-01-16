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
        </nav>
      </div>
    );
  }
}