import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Tag.scss';

const Tag = ({
  tag,
  onHandleSearch
}) => {
  const handleGetImages = (e) => {
    onHandleSearch(e, tag)
  }
  return (
    <>
      <Button
        className="tag-button"
        onClick={handleGetImages}
      >
        {tag}
      </Button>
    </>
  );
};

Tag.defaultProps = {
  tag: ''
};

Tag.propTypes = {
  tag: PropTypes.string,
  onHandleSearch: PropTypes.func.isRequired
};

export default memo(Tag);
