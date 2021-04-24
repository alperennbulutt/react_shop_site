import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
    };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    this.state = {
      products: this.props.products,
    };
  }

  // componentDidMount = () => {
  // this.getProducts();
  // };

  render() {
    this.handleEvent();

    console.log("Categories'den gelen props:", this.props.currentCategory);
    return (
      <div>
        <div className="list-group">
          {this.state.products.map((product) => (
            <ul key={product.id} className="list-group">
              <a
                href="#"
                className="list-group-item list-group-item-action flex-column align-items-start"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{product.productName}</h5>
                  <small className="text-muted">
                    Unit Price:{product.unitPrice}
                  </small>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    size="lg"
                    color="primary"
                  >
                    Sepete Ekle
                  </Button>
                </div>
                <p className="mb-1">{product.quantityPerUnit}</p>
                <small className="text-muted">
                  Units in Stock:{product.unitsInStock}
                </small>
              </a>

              <br />
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
