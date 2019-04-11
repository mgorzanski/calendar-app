import React from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.props.default
    };
  }

  render() {
    const titles = this.props.elements.map((element, index) => (
      <h3
        className={
          this.state.current === index
            ? 'panel-name'
            : 'panel-name panel-inactive'
        }
        key={index}
        onClick={() => this.setState({ current: index })}
      >
        {element.name}
      </h3>
    ));

    return (
      <>
        <div className="panel-title">
          <div className="panel-title-left">
            <span className="panel-featured-icon">
              <i
                className={this.props.elements[this.state.current].featuredIcon}
              />
            </span>
            {titles}
          </div>
          <div className="panel-title-right">
            <span
              className="panel-action-icon"
              onClick={
                this.props.elements[this.state.current].onActionIconPress
              }
            >
              <i
                className={this.props.elements[this.state.current].actionIcon}
              />
            </span>
          </div>
        </div>

        <div className="panel-content">
          {this.props.elements[this.state.current].content}
        </div>
      </>
    );
  }
}

Panel.defaultProps = {
  default: 0
};

Panel.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  default: PropTypes.number
};
