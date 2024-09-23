import React from 'react';
import Balance from '../pages/User/Balance';
import TransactionHistory from '../pages/User/TransactionHistory';
import ChapaPayment from './User/ChapaPayment';

function Wallet() {
  return (
    <div>
      <p>This is display my balance and add a balance to my account from chapa payments</p>
      <Balance />
      <ChapaPayment/>
      <TransactionHistory />
    </div>
  );
}

export default Wallet;
