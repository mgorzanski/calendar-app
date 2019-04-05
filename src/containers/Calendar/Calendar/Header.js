import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="calendar-header">
        <nav className="calendar-header-date-selector-nav">
          <p className="calendar-header-date-text">September 2019</p>
          <div className="calendar-header-date-selector-buttons">
            <i className="fas fa-chevron-circle-left" />
            <i className="fas fa-chevron-circle-right" />
          </div>
        </nav>
        <nav className="calendar-header-right-nav">
          <ul className="calendar-header-view-selector">
            <li className="calendar-header-view-active">Condensed</li>
            <li>Month</li>
            <li>Week</li>
          </ul>

          <ul className="calendar-header-menu">
            <li>
              <i className="fas fa-info-circle" />
            </li>
            <li>
              <i className="far fa-bell" />
            </li>
            <li>
              <i className="fas fa-search" />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
