/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

import Button from './Button';

const styles = css`
  .modal-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    display: none;
    transition: background-color 250ms linear;
    background-color: black;
    opacity: 0.7;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: auto;
    margin-top: -18%;
    margin-left: -25%;
    padding: 30px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    z-index: 20;
    display: none;
  }

  .modal .modal-close {
    position: relative;
    float: right;
    font-size: 18px;
    transition: transform 500ms ease;
    z-index: 11;
    cursor: pointer;
  }

  .modal .modal-close:hover {
    color: #5e5e5e;
  }

  .modal header {
    position: relative;
    display: block;
    border-bottom: 1px solid #eee;
  }

  .modal header h2 {
    margin: 0 0 10px;
    padding: 0;
    font-size: 34px;
    color: #414141;
    font-family: 'Roboto Condensed', sans-serif;
  }

  .modal article {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.75;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .modal footer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 0;
    padding: 40px 0 0;
  }

  .modal footer * {
    margin: 0 0 0 10px;
  }
`;

function Modal(props) {
  let footerButtons;
  if (props.footerButtons) {
    footerButtons = props.footerButtons.map(button => {
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

  const display = css`
    display: ${props.visible ? 'block' : 'none'};
  `;

  return (
    <div css={styles}>
      <div className="modal-bg" />
      <div className="modal">
        {props.hasCloseButton ? (
          <label
            htmlFor={props.id}
            className="modal-close"
            onClick={() => props.toggleModal()}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </label>
        ) : null}
        <header>
          <h2>{props.title}</h2>
        </header>
        <article>{props.children}</article>
        {props.footerButtons ? <footer>{footerButtons}</footer> : null}
      </div>
    </div>
  );
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

export default Modal;
