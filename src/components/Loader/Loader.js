import React, { memo } from 'react';
import './Loader.scss';

const Loader = () => (
  <div className="loader-wrapper">
    <div className="loader" />
  </div>
);

export default memo(Loader);
