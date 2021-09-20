import React, { memo, useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { store } from '../../reducer/store';
import { clearImages } from '../../actions/index';
import debounce from 'lodash/debounce';
import Button from '../Button/Button';
import InputText from '../InputText/InputText';
import './Search.scss';

const Search = ({
  onHandleTagChange,
  onHandleSearch,
  query
}) => {
  const onHandleKeyDown = (e) => {
    e.stopPropagation();
    if (e.keyCode === 13) onHandleSearch();
  };

  const globalState = useContext(store);
  const { dispatch } = globalState;

  // Update the function only when query updates
  const delayedQuery = useCallback(debounce(onHandleSearch, 500), [query]);

  const handleChange = (e) => {
    e.stopPropagation();
    onHandleTagChange(e);
    if (!e.currentTarget.value) {
      clearImages()
        .then(res => dispatch(res));
    };
  };

  useEffect(() => {
    delayedQuery();

    // cancel the debounce on useEffect cleanup
    return delayedQuery.cancel;
  }, [query, delayedQuery])

  return (
    <div className="search-wrapper">
      <InputText
        query={query}
        onHandleChange={handleChange}
        onHandleKeyDown={onHandleKeyDown}
      />
      <Button
        className="search-button"
        onClick={onHandleSearch}
      >
        <i className="fa fa-search" />
      </Button>
    </div>
  )
};

Search.defaultProps = {
  query: ''
};

Search.propTypes = {
  onHandleTagChange: PropTypes.func.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
  query: PropTypes.string
};

export default memo(Search);
