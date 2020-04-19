import React from "react";

import "./Filters.scss";

const renderColorFilters = ({ colors, filterProducts }) => {
  return colors.map((color) => {
    return (
      <li
        data-filtervalue={color}
        data-filterattr="color"
        onClick={(e) => filterProducts(e.target)}
      >
        <div className={`color-label ${color}`}></div>
        <p style={{ width: "50%" }}>{color}</p>
      </li>
    );
  });
};

const renderSizeFilters = ({ sizes, filterProducts }) => {
  return sizes.map((size) => {
    return (
      <li
        data-filtervalue={size}
        data-filterattr="size"
        onClick={(e) => filterProducts(e.target)}
      >
        {size}
      </li>
    );
  });
};

const Filters = (props) => {
  return (
    <div className="filters">
      <p className=" filters__title">Filter by:</p>
      <div className="filter--color">
        <p>Color:</p>
        <ul className="filter--color__list">{renderColorFilters(props)}</ul>
      </div>
      <div className="filter--size">
        <p>Size:</p>
        <ul className="filter--size__list">{renderSizeFilters(props)}</ul>
      </div>
    </div>
  );
};

export default Filters;
