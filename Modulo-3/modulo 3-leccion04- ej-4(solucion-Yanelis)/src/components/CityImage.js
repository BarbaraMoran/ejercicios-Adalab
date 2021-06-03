import React from "react";

class CityImage extends React.Component {
  constructor(props) {
    super(props);
    this.cities = {
      Praga:
        "https://i0.wp.com/www.pragueando.com/wp-content/uploads/2018/07/c700x420-e1537389220336.jpg",
      Boston:
        "https://cdn.getyourguide.com/img/location/533597d7653a9.jpeg/88.jpg",
      "Buenos Aires":
        "https://img1.viajar.elperiodico.com/fe/7a/55/buenos-aires-argentina-650x442.jpg",
      Tokio: "https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg",
      Sydney:
        "https://astelus.com/wp-content/viajes/Guia-turistica-de-Sidney.jpg",
    };
  }
  render() {
    return <img src={this.cities[this.props.city]} alt={this.props.city} />;
  }
}

export default CityImage;
