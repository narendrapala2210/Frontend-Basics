import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";

import { BsSearch } from "react-icons/bs";
import { AiOutlineFilter } from "react-icons/ai";

import "./index.css";
const Products = ({ filterData }) => {
  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      const url =
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json";
      const response = await fetch(url);
      const json = await response.json();
      setProductsData(json);
    };
    getData();
  }, []);
  const SearchData = productsData.filter(
    (eachProduct) =>
      eachProduct.name.toLowerCase().includes(search.toLowerCase()) ||
      eachProduct.color.toLowerCase().includes(search.toLowerCase()) ||
      eachProduct.type.toLowerCase().includes(search.toLowerCase())
  );
  const colorFilter = SearchData.filter((eachProduct) =>
    filterData.color === ""
      ? eachProduct
      : eachProduct.color.toLowerCase() === filterData.color.toLowerCase()
  );
  const genderFilter = colorFilter.filter((eachProduct) =>
    filterData.gender === ""
      ? eachProduct
      : eachProduct.gender.toLowerCase() === filterData.gender.toLowerCase()
  );
  const TypeFilter = genderFilter.filter((eachProduct) =>
    filterData.type === ""
      ? eachProduct
      : eachProduct.type.toLowerCase() === filterData.type.toLowerCase()
  );
  const priceFilter = TypeFilter.filter((eachProduct) =>
    filterData.price === "450"
      ? eachProduct.price >= 450
      : filterData.price === "250-450"
      ? eachProduct.price >= 251 && eachProduct.price <= 450
      : filterData.price === "0-250"
      ? eachProduct.price >= 0 && eachProduct.price <= 250
      : eachProduct
  );

  return (
    <div className="products-container">
      {/* div to form */}
      <div className="search-container">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input-element"
          value={search}
          type="text"
          placeholder="Search For Product here ....."
        />
        <BsSearch className="icons" />
        <AiOutlineFilter className="icons filter-small" />
      </div>
      {search.length > 0 && (
        <p className="m-auto">Search Result will appear Here</p>
      )}
      <div className="all-products">
        {priceFilter.map((eachProduct) => (
          <ProductItem key={eachProduct.id} data={eachProduct} />
        ))}
        {priceFilter.length === 0 && <h1>No Data Found</h1>}
      </div>
    </div>
  );
};

export default Products;

// filterData.price === 0
//   ? eachProduct
//   : filterData.price === "0-250"
//   ? eachProduct.price > 0 && eachProduct.price < 250
//   : eachProduct.price === "250-450"
//   ? eachProduct.price > 250 && eachProduct.price < 450
//   : eachProduct.price >= 450;
