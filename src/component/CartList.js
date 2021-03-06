import { Button } from "bootstrap";
import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Kategori ID</th>

            <th>Ürün Adı</th>

            <th>Fiyat</th>

            <th>Stok</th>
            <th>Adet</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <button
                onClick={() => this.props.removeFromCart(cartItem.product)}
                type="button"
                class="btn btn-outline-danger"
              >
                Sil
              </button>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
