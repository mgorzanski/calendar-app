import React from 'react';
import './index.css';
import AppIcon from './../../assets/app/app-icon.png';
import Modal from './../../components/Modal';

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signUpModalIsVisible: false
    };
  }

  toggleSignupModal = () => {
    this.setState({ signUpModalIsVisible: !this.state.signUpModalIsVisible });
  };

  render() {
    return (
      <div className="login-container">
        <header className="navbar">
          <nav className="main-nav">
            <ul className="main-menu">
              <li onClick={() => this.toggleSignupModal()}>
                Sign up for early access
              </li>
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
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input type="email" name="email" className="form-input" />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" name="password" className="form-input" />
              <button className="button-submit">Sign In</button>
              <button className="button-outline" disabled>
                Create account
              </button>
            </form>
          </div>
        </div>

        <Modal
          title="Sign up for early access"
          hasCloseButton
          footerButtons={[
            {
              text: 'Send request',
              type: 'success'
            },
            {
              text: 'Cancel',
              type: 'danger',
              onClick: this.toggleSignupModal
            }
          ]}
          visible={this.state.signUpModalIsVisible}
          toggleModal={this.toggleSignupModal}
          id="signUpModal"
        >
          <p>Test modal</p>
        </Modal>
      </div>
    );
  }
}
