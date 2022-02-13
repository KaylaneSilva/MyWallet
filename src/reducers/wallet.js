import {
  CHANGE_WALLET,
  DELETE_EXPENSE,
  REQUEST_API, GET_EDIT_EXPENSE, EDIT_EXPENSE, GET_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editExpense: {},
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return state;
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  case CHANGE_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          exchangeRates: action.exchangeRates,
        },
      ],
      currencies: Object.keys(action.exchangeRates),
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.expense),
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      editExpense: action.expense,
    };
  case GET_EDIT_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.expense.id) {
          return action.expense;
        }
        return expense;
      }),
      editExpense: {},
    };
  default:
    return state;
  }
};

export default walletReducer;
