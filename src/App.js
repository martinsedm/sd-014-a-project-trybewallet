import React from 'react';

export default function App() {
  return (
    <>
      <div>Hello, TrybeWallet!</div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/wallet" component={ Wallet } />
      </Switch>
    </>
  );
}
