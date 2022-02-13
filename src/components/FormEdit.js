import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCoinsAPI from '../services';
import { getEditedExpense, getCurrencies } from '../actions';
import '../css/FormEdit.css';

class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
      moedas: [],
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInitialState = this.handleInitialState.bind(this);
    this.handleStateWithInfo = this.handleStateWithInfo.bind(this);
  }

  async componentDidMount() {
    this.handleStateWithInfo();
    const { getCurrencie } = this.props;
    const coins = await fetchCoinsAPI();
    getCurrencie(Object.keys(coins));
  }

  async handleStateWithInfo() {
    const { editInfo } = this.props;
    const coins = await fetchCoinsAPI();
    this.setState({
      value: editInfo !== undefined ? Number(editInfo.value) : '',
      description: editInfo !== undefined ? editInfo.description : '',
      currency: editInfo !== undefined ? editInfo.currency : '',
      method: editInfo !== undefined ? editInfo.method : '',
      tag: editInfo !== undefined ? editInfo.tag : '',
      exchangeRates: editInfo !== undefined ? editInfo.exchangeRates : '',
      moedas: editInfo !== undefined ? Object.values(coins) : '',
      id: editInfo !== undefined ? editInfo.id : '',
    });
  }

  handleInitialState() {
    this.setState({
      value: '',
      description: '',
      method: '',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { editedExpense } = this.props;
    const {
      id,
      value,
      description,
      tag,
      currency,
      method,
      exchangeRates,
      moedas,
    } = this.state;
    return (
      <div className="div-Info">
      <div className="input-group mb-3">
        <span html="description" className="input-group-text">
          Descrição
        </span>
        <input
          name="description"
          id="description"
          type="text"
          value={ description }
          onChange={ this.handleChange }
          data-testid="description-input"
        />
      </div>
        <div className="input-group input-group-sm mb-3">
          <span html="valor" className="input-group-text">
            Valor
          </span>
          <input
            name="value"
            id="valor"
            type="number"
            data-testid="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </div>
        <div className="input-group mb-3">
          <span htmlFor="method" className="input-group-text">
            Pagamento
          </span>
          <select
            className="form-select"
            name="method"
            value={ method }
            id="method"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option> </option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <span htmlFor="tag" className="input-group-text">
            Tag
          </span>
          <select
            className="form-select"
            name="tag"
            value={ tag }
            id="tag"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option> </option>
            <option value="Alimentção">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </div>
        <div className="input-group mb-3">
          <label htmlFor="currency" className="label-coin">
            <span className="input-group-text">
              Moeda
            </span>
            <select
              className="form-select"
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              { moedas ? moedas.map((coin, index) => {
                if (coin.code === 'USDT' || coin.codein === 'BRLT') {
                  return '';
                }
                return (
                  <option
                    key={ index }
                    value={ coin.code }
                    data-testid={ coin.code }
                  >
                    { coin.code }
                  </option>);
              }) : ''}
            </select>
          </label>
        </div>
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={ () => {
            editedExpense({
              id,
              value,
              description,
              currency,
              method,
              tag,
              exchangeRates,
            });
            this.handleInitialState();
          } }
        >
          Editar despesa
        </button>
      </div>
    );
  }
}

Forms.propTypes = {
  editedExpense: PropTypes.func.isRequired,
  getCurrencie: PropTypes.func.isRequired,
  editInfo: PropTypes.shape({
    value: PropTypes.number,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  editInfo: state.wallet.editExpense,
});

const mapDispatchToProps = (dispatch) => ({
  editedExpense: (expense) => dispatch(getEditedExpense(expense)),
  getCurrencie: (currencies) => dispatch(getCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
