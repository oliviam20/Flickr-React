import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './ImageLink.scss';

const ImageLink = ({
  link,
  thumbnail,
  title
}) => (
  <a href={link} rel="noopener noreferrer" target="_blank">
    <img
      alt={title}
      className="image"
      loading="lazy"
      src={thumbnail}
    />
    <div className="overlay">
      <span className="overlay-text">Open</span>
    </div>
  </a>
);

ImageLink.defaultProps = {
  link: '',
  thumbnail: '',
  title: ''
};

ImageLink.propTypes = {
  link: PropTypes.string,
  thumbnail: PropTypes.string,
  title: PropTypes.string
};

export default memo(ImageLink);