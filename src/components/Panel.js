import React from 'react';
import './Panel.css';

export default class Panel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="panel-title">
          <div className="panel-title-left">
            <span className="panel-featured-icon">
              <i className={this.props.featuredIcon} />
            </span>
            <h3 className="panel-name">{this.props.name}</h3>
          </div>
          <div className="panel-title-right">
            <span
              className="panel-action-icon"
              onClick={this.props.onActionIconPress}
            >
              <i className={this.props.actionIcon} />
            </span>
          </div>
        </div>

        <div className="panel-content">{this.props.children}</div>
      </React.Fragment>
    );
  }
}
