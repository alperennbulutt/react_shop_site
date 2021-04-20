import React, { Component } from "react";

export default class Products extends Component {
  state = {
    products: [
      {
        id: 1,
        productName: "alperen",
      },
      {
        id: 2,
        productName: "blt",
      },
      {
        id: 3,
        productName: "cizmeli",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <ul key={product.id} className="list-group">
            <table className="table table-dark">
              <tbody>
                <tr>
                  <td>{product.productName}</td>
                </tr>
              </tbody>
            </table>

            <br />
          </ul>
        ))}
      </div>
    );
  }
}
