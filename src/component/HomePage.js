import React from "react";
import Body from "./Body";
import { Col, Container } from "reactstrap";
class HomePage extends React.Component {
  state = {
    baslik: "Başlık",
  };
  render() {
    return (
      <Container>
        <Col>
          <Body />
        </Col>
      </Container>
    );
  }
}
export default HomePage;
