/** @jsx jsx */
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

const button = css`
  background-color: rgb(247, 247, 247, 0.6);
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  font-family: 'Roboto Condensed', sans-serif;
  color: #727272;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
  display: inline;
  outline: none;
  border: 0;
  padding: 10px;
`;

const success = css`
  background-color: rgba(0, 209, 0, 0.6);
  color: #000;
  &:hover,
  &:active {
    background-color: rgba(0, 209, 0, 1);
  }
`;

const danger = css`
  background-color: rgb(208, 0, 0, 0.6);
  color: #000;
  &:hover,
  &:active {
    background-color: rgb(208, 0, 0, 1);
  }
`;

function Button(props) {
  const backgroundColor = css`
    background-color: ${props.backgroundColor};
  `;

  const textColor = css`
    color: ${props.textColor};
  `;

  let buttonType = null;
  if (props.type === 'success') buttonType = success;
  else if (props.type === 'danger') buttonType = danger;

  const styles = css`
    ${button}
    ${props.backgroundColor && backgroundColor}
    ${props.textColor && textColor}
    ${buttonType}
  `;

  return (
    <button onClick={props.onClick ? () => props.onClick() : null} css={styles}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.oneOf(['success', 'danger'])
};

export default Button;
