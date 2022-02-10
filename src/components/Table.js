import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPen } from '@fortawesome/free-solid-svg-icons';
import { deleteExp } from '../actions';
import '../css/Table.css';

class Table extends React.Component {
  // Links consultados para a criação da tabela
  // Source: https://www.homehost.com.br/blog/criar-sites/tabela-html/
  // Source: https://github.com/testing-library/dom-testing-library/issues/583/

  render() {
    const { expenses, deleteButton } = this.props;

    return (
      <div className="container-xxl">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses ? expenses.map((gasto, index) => {
              const { value, description, currency, method, tag, exchangeRates } = gasto;
              const cotacao = Number(exchangeRates[currency].ask).toFixed(2);
              const valor = Number(value).toFixed(2);
              const valorCotado = (valor * exchangeRates[currency].ask).toFixed(2);
              const currencyName = exchangeRates[currency].name.split('/');
              return (
                <tr key={ gasto.id }>
                  <td>{ index }</td>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ valor }</td>
                  <td>{ currencyName[0] }</td>
                  <td>{ cotacao }</td>
                  <td>{ valorCotado }</td>
                  <td>Real</td>
                  <td className="buttons">
                    <FontAwesomeIcon
                      type="button"
                      data-testid="edit-btn"
                      icon={ faPen }
                    />
                    <FontAwesomeIcon
                      type="button"
                      data-testid="delete-btn"
                      onClick={ () => deleteButton(gasto) }
                      icon={ faTrashCan }
                    />
                  </td>
                </tr>
              );
            }) : 'ola'}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteButton: (expense) => dispatch(deleteExp(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
