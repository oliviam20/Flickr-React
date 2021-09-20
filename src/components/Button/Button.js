import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children,
  className,
  onClick,
  style,
  text
}) => (
  <button
    type="submit"
    name="search"
    className={className}
    onClick={onClick}
    style={style}
  >
    {children || text}
  </button>
);

Button.defaultProps = {
  className: '',
  style: {},
  text: ''
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  text: PropTypes.string
};

export default memo(Button);
