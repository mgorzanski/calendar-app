import React from 'react';
import './PanelUser.css';
import ProfileImageThumbnail from './../../../../assets/images/thumbnails/profile-image.png';

function PanelUser() {
  const [isDropdownUnfolded, setIsDropdownUnfolded] = React.useState(false);

  return (
    <div
      className="panel-user"
      onClick={() => setIsDropdownUnfolded(!isDropdownUnfolded)}
    >
      <div
        className={
          isDropdownUnfolded
            ? 'panel-user-profile panel-user-dropdown-active'
            : 'panel-user-profile'
        }
      >
        <div className="panel-user-profile-img">
          <img src={ProfileImageThumbnail} alt="Mateusz Górzański" />
        </div>
        <h3 className="panel-user-profile-name">Mateusz Górzański</h3>
      </div>
      <div className="panel-user-dropdown">
        <i className="fas fa-caret-down fa-2x" />
      </div>
      {isDropdownUnfolded ? (
        <ul className="panel-user-dropdown-menu">
          <li className="panel-user-dropdown-menu-item">Visit profile</li>
          <li className="panel-user-dropdown-menu-item">Change account</li>
          <li className="panel-user-dropdown-menu-item">Logout</li>
        </ul>
      ) : null}
    </div>
  );
}

export default PanelUser;
