import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Modal extends React.Component {
  render() {
    let footerButtons;
    if (this.props.footerButtons) {
      footerButtons = this.props.footerButtons.map(button => {
        const type = button.type ? button.type : null;
        const text = button.text ? button.text : null;
        const onClick = button.onClick ? button.onClick : null;
        return (
          <Button type={type} onClick={onClick} key={text}>
            {text}
          </Button>
        );
      });
    }

    const styles = {
      display: this.props.visible ? 'block' : 'none'
    };

    return (
      <>
        <div className="modal-bg" style={styles} />
        <div className="modal" style={styles}>
          {this.props.hasCloseButton ? (
            <label
              htmlFor={this.props.id}
              className="modal-close"
              onClick={() => this.props.toggleModal()}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </label>
          ) : null}
          <header>
            <h2>{this.props.title}</h2>
          </header>
          <article className="modal-content">{this.props.children}</article>
          {this.props.footerButtons ? <footer>{footerButtons}</footer> : null}
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  hasCloseButton: PropTypes.bool,
  footerButtons: PropTypes.arrayOf(PropTypes.object),
  visible: PropTypes.bool,
  id: PropTypes.string,
  toggleModal: PropTypes.func
};
