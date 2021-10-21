// import React from 'react';

// class AddDespP1 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       value: '',
//       description: '',
//     };
//     this.handleCh = this.handleCh.bind(this);
//   }

//   //   const responseJsonl26 = [Object.values(responseJson)];

//    criarI = (tipo, nome, id, valor) => {(
//       <input
//         type={ tipo }
//         name={ nome }
//         id={ id }
//         value={ valor }
//         onChange={ this.handleCh }
//       />
//     );}

//   handleCh({ target: { name, value } }) {
//     this.setState({ [name]: value });
//   }

//   render() {
//     const { value, description } = this.state;
//     console.log(this.state);
//     return (
//       <div>
//         <form>
//           <label htmlFor="value">
//             Valor:
//             {this.criarI('text', 'value', 'value', value)}
//           </label>
//           <label htmlFor="description">
//             Descrição:
//             {this.criarI('text', 'description', 'description', description)}
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddDespP1;
