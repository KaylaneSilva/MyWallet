import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import wallet from '../images/walletWhite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Header.css';

class Header extends React.Component {
  render() {
    const { expenses } = this.props;
    const totalValue = expenses
      ? expenses.reduce((acc, expense) => {
        const cotacao = expense.exchangeRates[expense.currency].ask;
        const valorCotado = (Number(expense.value) * cotacao).toFixed(2);
        acc += Number(Number(valorCotado).toFixed(2));
        return acc;
      }, 0)
      : '';
    return (
      <div className='container-header'>
        <div className="div-header">
          <section className="div-logo logo">
            <h1>My Wallet</h1>
            <img src={wallet} alt="Wallet Logo" />
          </section>
          <section className="section-info">
            <p data-testid="email-field" className="email">
              { sessionStorage.getItem('email') }
            </p>
            <section className="info">
              <p data-testid="total-field" className="despesa">
                Total:
              </p>
              <p>
                R$
              </p>
              <span>{totalValue}</span>
              <span data-testid="header-currency-field">BRL</span>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
