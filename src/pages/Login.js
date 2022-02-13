import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogin } from '../actions';
import wallet from '../images/wallet.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      inputPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // Link consultado para fazer a validação do email
  // Source: 'https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/'
  disabledButton(email, password) {
    const MIN_LENGTH = 6;
    const verificaEmail = /\S+@\S+\.\S+/;
    const validEmail = verificaEmail.test(email);
    const validPassword = password.length >= MIN_LENGTH;
    const validInputs = validEmail && validPassword;
    return validInputs;
  }

  render() {
    const { email, inputPassword } = this.state;
    const { getEmail, history } = this.props;
    return (
      <div className="div-form">
        <section className="div-logo">
          <h1>My Wallet</h1>
          <img src={ wallet } alt="Wallet Logo" />
        </section>
        <section className="section-form">
          <label htmlFor="email" className="form-label">
            Email
            <input
              className="form-control"
              name="email"
              type="email"
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password" className="form-label">
            Password
            <input
              className="form-control"
              name="inputPassword"
              type="password"
              id="password"
              data-testid="password-input"
              value={ inputPassword }
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="btn btn-primary"
            type="button"
            disabled={ !this.disabledButton(email, inputPassword) }
            onClick={ () => {
              sessionStorage.setItem('email', email);
              getEmail(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(getLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
