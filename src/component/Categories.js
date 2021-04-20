import React from "react";
import Products from "./Products";
//api dosyasına girip başta api'yi çalıştır sonrasında npm start yap -->  json-server --watch db.json
export class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount = () => {
    this.getCategories();
  };
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };
  render() {
    return (
      <div className="container">
        {this.state.categories.map((category) => (
          <ul key={category.id} className="list-group">
            <table className="table table-dark" >
              <tbody>
                <tr>
                  <th scope="row">{category.id}</th>
                  <td>{category.categoryName}</td>
                <Products/>

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

export default Categories;
