import React from "react";
import "../body/body.css";


class Producto extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          data: response.products,
        });
      });
  }
  render() {
    return (
      <div className="divFoto">
        <h1>¡Bienvenido a nuestra tienda!</h1>

        <h2>¡Echa un vistazo a nuestros productos!</h2>

        <div className="fotos">
          {this.state.data.map((product) => (
            <div>
              <div>{product.title}</div>
              <img src={product.images[0]} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Producto;
