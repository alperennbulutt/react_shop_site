import React from "react";
import { ListGroupItem, ListGroup, Row, Col } from "reactstrap";
import Products from "./Products";
import Navi from "./Navi";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router";
import CartList from "./CartList";

import NotFound from "./NotFound";

//api dosyasına girip başta api'yi çalıştır sonrasında npm start yap -->  json-server --watch db.json
export class Body extends React.Component {
  state = {
    categories: [],
    currentCategory: "",
    products: [],
    cart: [],
  };

  componentDidMount = () => {
    this.getCategories();
  };
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    //Eklendi Uyarısı
    alertify.success(product.productName + " Sepete Eklendi");
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  getProducts = (category) => {
    console.log("changeCategory", category);
    this.setState({ currentCategory: category.id });

    let url = "http://localhost:3000/products";
    if (category) {
      url += "?categoryId=" + category.id;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  };

  render() {
    return (
      <Row>
        <Row>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
        </Row>
        <Col sm={4}>
          <ListGroup className="card">
            {this.state.categories.map((category) => (
              <ListGroupItem
                active={category.id === this.state.currentCategory}
                key={category.id}
                onClick={() => this.getProducts(category)}
              >
                {category.categoryName}
              </ListGroupItem>
            ))}

            <br />
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Products
                  //propsların bir tane kopyasını al o kopyayı gönder
                  {...props}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  products={this.state.products}
                />
              )}
            ></Route>
            <Route
              exact
              path="/cart"
              render={(props) => (
                <CartList
                  //propsların bir tane kopyasını al o kopyayı gönder
                  {...props}
                  removeFromCart={this.removeFromCart}
                  cart={this.state.cart}
                />
              )}
            ></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Col>
      </Row>
    );
  }
}

export default Body;
