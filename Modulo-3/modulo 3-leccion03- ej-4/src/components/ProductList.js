import React from "react";

class ProductList extends React.Component {
  render() {
    return (
      <li>
        <h2>Nombre: {this.props.name}</h2>
        <p>Descripción: {this.props.description}</p>
        <p>Cantidad: {this.props.quantity}</p>
        <p>Categoría: {this.props.category}</p>
        <p>Precio: {this.props.price}</p>
      </li>
    );
  }
}

/*ProductList.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};*/

ProductList.defaultProps = {
  description: "No hay descripción",
};

export default ProductList;
