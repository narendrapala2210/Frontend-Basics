import React, { useState } from "react";
import "./index.css";

const Filter = ({ getFilterData }) => {
  const [filterData, setFilters] = useState({
    color: "",
    gender: "",
    price: "",
    type: "",
  });
  const onColorChange = (e) => {
    const getData = filterData;
    setFilters((prev) => ({ ...prev, color: e.target.value }));
    getData.color = e.target.value;
    getFilterData(getData);
  };
  const onGenderChange = (e) => {
    const getData = filterData;
    setFilters((prev) => ({ ...prev, gender: e.target.value }));
    getData.gender = e.target.value;
    getFilterData(getData);
  };
  const onPriceChange = (e) => {
    const getData = filterData;
    setFilters((prev) => ({ ...prev, price: e.target.value }));
    getData.price = e.target.value;
    getFilterData(getData);
  };
  const onTypeChange = (e) => {
    const getData = filterData;
    setFilters((prev) => ({ ...prev, type: e.target.value }));
    getData.type = e.target.value;
    getFilterData(getData);
  };

  return (
    <div className="main-filters">
      {/* color */}
      <div className="filter-container">
        <span className="filter-title">Colour</span>
        <div className="filter-input-container">
          <input
            onChange={onColorChange}
            name="color"
            type="radio"
            className="filter-input"
            value="red"
            id="red"
          />
          <label htmlFor="red" className="filter-label">
            Red
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onColorChange}
            name="color"
            type="radio"
            className="filter-input"
            value="blue"
            id="blue"
          />
          <label htmlFor="blue" className="filter-label">
            Blue
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onColorChange}
            name="color"
            type="radio"
            className="filter-input"
            value="green"
            id="green"
          />
          <label htmlFor="green" className="filter-label">
            Green
          </label>
        </div>
      </div>
      {/* gender */}
      <div className="filter-container">
        <span className="filter-title">Gender</span>
        <div className="filter-input-container">
          <input
            onChange={onGenderChange}
            name="gender"
            type="radio"
            className="filter-input"
            value="men"
            id="men"
          />
          <label htmlFor="men" className="filter-label">
            Men
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onGenderChange}
            name="gender"
            type="radio"
            className="filter-input"
            value="women"
            id="women"
          />
          <label htmlFor="women" className="filter-label">
            Women
          </label>
        </div>
      </div>
      {/* Price */}
      <div className="filter-container">
        <span className="filter-title">Price</span>
        <div className="filter-input-container">
          <input
            onChange={onPriceChange}
            name="price"
            type="radio"
            className="filter-input"
            value="0-250"
            id="0-250"
          />
          <label htmlFor="0-250" className="filter-label">
            0-Rs250
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onPriceChange}
            name="price"
            type="radio"
            className="filter-input"
            value="250-450"
            id="250-450"
          />
          <label htmlFor="250-450" className="filter-label">
            Rs250-450
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onPriceChange}
            name="price"
            type="radio"
            className="filter-input"
            value="450"
            id="450"
          />
          <label htmlFor="450" className="filter-label">
            Rs450
          </label>
        </div>
      </div>
      {/* Type */}
      <div className="filter-container">
        <span className="filter-title">Type</span>
        <div className="filter-input-container">
          <input
            onChange={onTypeChange}
            name="type"
            type="radio"
            className="filter-input"
            value="polo"
            id="polo"
          />
          <label htmlFor="polo" className="filter-label">
            Polo
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onTypeChange}
            name="type"
            type="radio"
            className="filter-input"
            value="hoodie"
            id="hoodie"
          />
          <label htmlFor="hoodie" className="filter-label">
            Hoodie
          </label>
        </div>
        <div className="filter-input-container">
          <input
            onChange={onTypeChange}
            name="type"
            type="radio"
            className="filter-input"
            value="basic"
            id="basic"
          />
          <label htmlFor="basic" className="filter-label">
            Basic
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
