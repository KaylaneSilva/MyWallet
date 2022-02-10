import React from 'react';
import Header from '../components/Header';
import Forms from '../components/Forms';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <Forms />
        </section>
        <Table />
      </div>
    );
  }
}

export default Wallet;
