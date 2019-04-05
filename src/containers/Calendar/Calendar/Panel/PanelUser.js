import React from 'react';
import './PanelUser.css';
import ProfileImageThumbnail from './../../../../assets/thumbnails/profile-image.png';

export default class PanelUser extends React.Component {
  render() {
    return (
      <div className="panel-user">
        <div className="panel-user-profile">
          <div className="panel-user-profile-img">
            <img src={ProfileImageThumbnail} alt="Mateusz Górzański" />
          </div>
          <h3 className="panel-user-profile-name">Mateusz Górzański</h3>
        </div>
        <div className="panel-user-dropdown">
          <i className="fas fa-caret-down fa-2x"></i>
        </div>
      </div>
    );
  }
}