import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  render() {
    const styles = {
      backgroundColor: this.props.backgroundColor
        ? this.props.backgroundColor
        : null,
      color: this.props.textColor ? this.props.textColor : null
    };

    let classNames = 'button';
    if (this.props.type) classNames += ' button-' + this.props.type;

    return (
      <button
        className={classNames}
        onClick={this.props.onClick ? () => this.props.onClick() : null}
        style={styles}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.oneOf(['success', 'danger'])
};
