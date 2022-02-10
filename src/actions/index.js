import fetchCoinsAPI from '../services';
// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_FAIL = 'REQUEST_FAIL';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getLogin = (email) => ({
  type: LOGIN_USER,
  email,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const getCurrecies = (expense, coins) => ({
  type: CHANGE_WALLET,
  expense,
  exchangeRates: coins,
});

export const requestApiFail = (error) => ({
  type: REQUEST_FAIL,
  error,
});

export const fetchCurriencies = (expense) => (dispatch) => {
  dispatch(requestApi());
  return fetchCoinsAPI().then(
    (coins) => dispatch(getCurrecies(expense, coins)),
    (error) => dispatch(requestApiFail(error.message)),
  );
};

export const deleteExp = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
});
