import React from "react";
import Categories from "./Categories";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="input-group m-5">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username with two button addons"
            />
            <button className="btn btn-outline-secondary" type="button">
              Filtrele
            </button>
          </div>

          <div>
            <Categories />
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
