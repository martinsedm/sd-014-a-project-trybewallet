import React from 'react';

class apiMoedas extends React.Component {
  componentDidMount() {
    this.getAPI();
  }

  async getAPI() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const responseJson = await response.json();
    this.setState = ({ resultado: [responseJson] });
  }
}
export default apiMoedas;
