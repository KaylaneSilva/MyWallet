import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCoinsAPI from '../services';
import { fetchCurriencies } from '../actions';
import '../css/Forms.css';

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
      id: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInitialState = this.handleInitialState.bind(this);
    this.getCurriencesState = this.getCurriencesState.bind(this);
  }

  async componentDidMount() {
    const coins = await fetchCoinsAPI();
    this.getCurriencesState(coins);
  }

  getCurriencesState(moedas) {
    this.setState({
      exchangeRates: Object.values(moedas),
    });
  }

  handleInitialState() {
    this.setState((state) => ({
      id: state.id + 1,
      value: '',
      description: '',
      method: '',
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { getInfo } = this.props;
    const {
      id,
      value,
      description,
      tag,
      currency,
      method,
      exchangeRates,
    } = this.state;
    return (
      <div className="div-putInfo">
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
              { exchangeRates ? exchangeRates.map((coin, index) => {
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
        <div className="input-group mb-3">
          <span htmlFor="method" className="input-group-text">
            Método de pagamento
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
        <button
          className="btn btn-primary btn-sm"
          type="button"
          onClick={ () => {
            getInfo({
              id,
              value,
              description,
              currency,
              method,
              tag,
            });
            this.handleInitialState();
          } }
        >
          Adicionar despesa
        </button>
      </div>
    );
  }
}

Forms.propTypes = {
  getInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getInfo: (currience) => dispatch(fetchCurriencies(currience)),
});

export default connect(null, mapDispatchToProps)(Forms);
