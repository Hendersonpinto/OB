// Third Party
import React from "react";

// Local Files
import "../stylesheets/Filters.scss";

const renderColorFilters = ({ colors, filterProducts }) => {
  return colors.map((color) => {
    return (
      <li
        data-filtervalue={color}
        data-filterattr="color"
        onClick={(e) => filterProducts(e.target)}
        key={color}
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
        key={size}
        data-filtervalue={size}
        data-filterattr="size"
        onClick={(e) => filterProducts(e.target)}
      >
        {size}
      </li>
    );
  });
};

const renderGenderFilters = ({ sizes, filterProducts, genders }) => {
  return genders.map((gender) => {
    return (
      <li
        key={gender}
        data-filtervalue={gender}
        data-filterattr="gender"
        onClick={(e) => filterProducts(e.target)}
      >
        <p style={{ pointerEvents: "none" }}>{gender}</p>
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
      <div className="filter--gender">
        <p>Gender:</p>
        <ul className="filter--color__list">{renderGenderFilters(props)}</ul>
      </div>
    </div>
  );
};

export default Filters;
