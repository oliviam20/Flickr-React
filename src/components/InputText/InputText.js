import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './InputText.scss';

const InputText = ({
  query,
  onHandleChange,
  onHandleKeyDown
}) => (
  <input
    type="text"
    placeholder="Search..."
    value={query}
    name="search"
    className="search-bar"
    onChange={onHandleChange}
    onKeyDown={onHandleKeyDown}
  />
);

InputText.defaultProps = {
  query: ''
};

InputText.propTypes = {
  query: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
  onHandleKeyDown: PropTypes.func.isRequired
};

export default memo(InputText);
