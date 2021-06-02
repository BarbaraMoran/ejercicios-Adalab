import React from "react";

const onChangeListener = (event) => {
  const selectedDestiny = event.currentTarget.value;
  alert(`Tu destino es ${selectedDestiny}`);
};

const alertTextArea = (
  <select
    className="js-select"
    id="size"
    name="size"
    onChange={onChangeListener}
  >
    <option value="Buenos Aires">Buenos Aires</option>
    <option value="Sidney">Sidney</option>
    <option value="Praga">Praga</option>
    <option value="Boston">Boston</option>
    <option value="Tokio">Tokio</option>
  </select>
);

class Destiny extends React.Component {
  render() {
    return alertTextArea;
  }
}

export default Destiny;
