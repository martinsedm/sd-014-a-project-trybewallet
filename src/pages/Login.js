import React from 'react';

class Login extends React.Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   emailInput: '',
  //   //   passwordInput: '',
  //   //   isLoading: false,
  //   //   button: true,
  //   // };

  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ searchInput: event.target.value }, () => {
  //     const { searchInput } = this.state;
  //     const minSearchLength = 2;
  //     if (searchInput.length >= minSearchLength) {
  //       this.setState({ button: false });
  //     } else {
  //       this.setState({ button: true });
  //     }
  //   });
  // }

  // async handleClick() {
  //   try {
  //     this.setState({ isLoading: true, search: false });
  //     const { searchInput } = this.state;
  //     const searchResponse = await searchAlbumsAPI(searchInput);
  //     this.setState({
  //       isLoading: false,
  //       search: true,
  //       searchArray: searchResponse,
  //       searchInputSaved: searchInput,
  //       searchInput: '',
  //     });
  //   } catch {
  //     console.log('error');
  //   }
  // }

  render() {
    return (
      <form>
        <label htmlFor="Email">
          <input
            type="text"
            name="Email"
            data-testid="email-input"
            // value={ emailInput }
            // onChange={ handleChange }
          />
        </label>
        <label htmlFor="Password">
          <input
            type="password"
            name="Password"
            data-testid="password-input"
            // value={ passwordInput }
            // onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          // disabled={ button }
          // onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
