import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div>
        <div>
          <aside>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
              alt="404 Image"
            />
          </aside>
          <main>
            <h1>Oppss!</h1>
            <p>
               <em>Sayfa Bulunamadı...</em>
            </p>
          </main>
        </div>
      </div>
    );
  }
}
export default NotFound;
