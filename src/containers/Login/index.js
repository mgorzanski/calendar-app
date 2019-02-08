import React from 'react';
import './index.css';
import AppIcon from './../../assets/app/app-icon.png';

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-container">
        <header className="navbar">
          <nav className="main-nav">
            <ul className="main-menu">
              <li>Sign up for early access</li>
            </ul>
          </nav>
        </header>

        <div className="main">
          <div className="app-presentation">
            <img className="app-icon" src={AppIcon} alt="Weekly" />
            <h2 className="app-title">Weekly</h2>
            <h4 className="app-subtitle">Calendar app designed for Windows</h4>
          </div>

          <div className="sign-in-form">
            <h2 className="sign-in-title">Sign In</h2>
            <form className="form">
              <label for="email">E-mail</label>
              <input type="email" name="email" className="form-input" />
              <label for="password">Password</label>
              <input type="password" name="password" className="form-input" />
              <button className="button-submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}