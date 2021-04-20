import React from "react";
import Body from "./Body";
import Title from "./Title";
class HomePage extends React.Component {
  state = {
    baslik: "Başlık",
  };
  render() {
    return (
      <div>
        <Title title={this.state.baslik} />

        <Body/>
      </div>
    );
  }
}
export default HomePage;
