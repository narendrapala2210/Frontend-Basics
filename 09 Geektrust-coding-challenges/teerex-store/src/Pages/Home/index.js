import React, { Component } from "react";

import NavBar from "../../Components/NavBar";
import Filter from "../../Components/Filter";
import Products from "../../Components/Products";

import "./index.css";

class Home extends Component {
  state = {
    filterData: {
      color: "",
      gender: "",
      price: 0,
      type: "",
    },
  };

  getFilterData = (data) => {
    this.setState({ filterData: data });
  };

  render() {
    const { filterData } = this.state;
    return (
      <div>
        <NavBar />
        <div className="home">
          <Filter getFilterData={this.getFilterData} />
          <Products filterData={filterData} />
        </div>
      </div>
    );
  }
}

export default Home;
