import React from "react";

class SelectCurrency extends React.Component {
  render() {
    return (
      <label htmlFor="currency-select">
        Moeda
        <select id="currency-select">
          <option value="empty">Vazio</option>
        </select>
      </label>
    );
  }
}

export default SelectCurrency;