import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import FormattedDate from "../FormattedDate/FormattedDate";
import FormattedText from "../FormattedText/FormattedText";
import ImageLink from "../ImageLink/ImageLink";
import Tag from "../Tag/Tag";
import "./Card.scss";

const Card = ({
  author,
  date,
  thumbnail,
  tags,
  title,
  fullImage,
  onHandleSearch,
}) => {
  const tagsArr =
    tags &&
    tags
      .split(" ")
      .slice(0, 5)
      .map((tag) => (
        <li key={`${tag}-${date}`}>
          <Tag tag={tag} onHandleSearch={onHandleSearch} />
        </li>
      ));

  const [isTag, setIsTag] = useState(false);

  const toggleTagStyle = {
    backgroundColor: isTag ? "#4ca9e6" : "transparent",
    color: isTag ? "#fff" : "#4ca9e6",
  };

  const toggleTags = () => {
    setIsTag(!isTag);
  };

  return (
    <figure className="card-wrapper">
      <ImageLink link={fullImage} thumbnail={thumbnail} title={title} />
      <figcaption>
        {author && <FormattedText text={author} />}
        {date && <FormattedDate date={date} />}
        <div className="toggle-tags-wrapper">
          <Button
            className="toggle-tags-button"
            onClick={toggleTags}
            style={toggleTagStyle}
            text="Toggle Tags"
          />
        </div>
        {tags && <ul className={isTag ? "" : "tag-list"}>{tagsArr}</ul>}
      </figcaption>
    </figure>
  );
};

Card.defaultProps = {
  author: "",
  date: "",
  thumbnail: "",
  tags: "",
  title: "",
  fullImage: "",
};

Card.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.string,
  tags: PropTypes.string,
  title: PropTypes.string,
  fullImage: PropTypes.string,
  onHandleSearch: PropTypes.func.isRequired,
};

export default memo(Card);
