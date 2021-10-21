import React, { Component } from 'react';
// import { connect } from 'react-redux';

class FetchApi extends Component {
  render() {
    return (
      <div>
        <label htmlFor="currency">
          Moeda
          <select label="currency" id="currency">
            <option selected value="BRL">BRL</option>
          </select>
        </label>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {

//   };
// }

export default FetchApi;
