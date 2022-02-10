// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CHANGE_WALLET, DELETE_EXPENSE, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return state;
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
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense !== action.expense),
    };
  default:
    return state;
  }
};

export default walletReducer;
