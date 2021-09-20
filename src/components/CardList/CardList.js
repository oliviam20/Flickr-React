import React from "react";
import PropTypes from "prop-types";
import FadeIn from "react-fade-in";
import Card from "../Card/Card";
import "./CardList.scss";

const CardList = ({ onHandleSearch, images }) => {
  return (
    <div className="card-list-wrapper">
      <FadeIn>{renderCards()}</FadeIn>
    </div>
  );

  function renderCards() {
    if (!images.length) {
      return null;
    }

    return images.map((img, index) => (
      <Card
        key={index}
        author={img.author}
        date={img.date_taken}
        thumbnail={img.media.m}
        tags={img.tags}
        title={img.title}
        fullImage={img.link}
        onHandleSearch={onHandleSearch}
      />
    ));
  }
};

CardList.defaultProps = {
  images: [],
};

CardList.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
  images: PropTypes.array,
};

export default CardList;
