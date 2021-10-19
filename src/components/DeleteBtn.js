import React, { Component } from 'react';

class DeleteBtn extends Component {
  render() {
    const { handleClick, idBtn } = this.props;
    return (
      <div>
        <button data-testid="delete-btn" id={ idBtn } type="button" onClick={ handleClick }>Apagar</button>
      </div>
    );
  }
}

export default DeleteBtn;
