import { Component } from "react";
import Layout from "../layout";
import PageNav from "../PageNav";

import "./index.css";

const btnDetails = [
  {
    id: -20,
    text: "<<",
  },
  {
    id: -10,
    text: "<",
  },
  {
    id: 0,
    text: "1",
  },
  {
    id: 10,
    text: "2",
  },
  {
    id: 20,
    text: "3",
  },
  {
    id: 30,
    text: "4",
  },
  {
    id: 40,
    text: "5",
  },
  {
    id: 50,
    text: ">",
  },
  {
    id: 60,
    text: ">>",
  },
];

class Home extends Component {
  state = {
    searchInput: "",
    userDetails: [],
    isActivePage: 0,
  };

  componentDidMount() {
    this.apiCallForUserData();
  }

  apiCallForUserData = async () => {
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      userDetails: data,
    });
  };

  onChangeTabItem = async (id) => {
    const { isActivePage } = this.state;
    if (id >= 0 && id <= 40) {
      this.setState({
        isActivePage: id,
      });
    }

    if (id === -10 && isActivePage > 0 && isActivePage < 50) {
      this.setState({
        isActivePage: isActivePage - 10,
      });
    }
    if (id === 50 && isActivePage >= 0 && isActivePage < 40) {
      this.setState({
        isActivePage: isActivePage + 10,
      });
    }
    if (id === -20) {
      this.setState({
        isActivePage: 0,
      });
    }
    if (id === 60) {
      this.setState({
        isActivePage: 40,
      });
    }
  };

  onChangeSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onDeleteDataList = (id) => {
    console.log(id);
  };

  render() {
    let { searchInput, userDetails, isActivePage } = this.state;
    let Data = userDetails.slice(isActivePage, isActivePage + 10);

    if (searchInput.length > 0) {
      Data = Data.filter(
        (each) =>
          each.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          each.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          each.role.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return (
      <div className="bg-container">
        <input
          type="text"
          placeholder="Search by name, email or role"
          className="search-input"
          onChange={this.onChangeSearch}
          value={searchInput}
        />
        <ul className="ul-container">
          <li>
            <div className="layout">
              <div className="start-layout-checkbox">
                <input type="checkbox" />
              </div>
              <p className="start-layout-name">Name</p>
              <p className="start-layout-email">Email</p>
              <p className="start-layout-role">Role</p>
              <p className="start-layout-action">Action</p>
            </div>
          </li>

          {Data.map((each) => (
            <Layout
              profileDetails={each}
              key={each.id}
              onDeleteDataList={this.onDeleteDataList}
            />
          ))}
        </ul>
        <div className="page-nav-container">
          <div className="delete-container">
            <button className="delete-btn-select" type="button">
              Delete Selected
            </button>
          </div>

          <div className="page-container">
            {btnDetails.map((each) => (
              <PageNav
                btnDetails={each}
                key={each.id}
                isActive={each.id === isActivePage}
                onChangeTabItem={this.onChangeTabItem}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
