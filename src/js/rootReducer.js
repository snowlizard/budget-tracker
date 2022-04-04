import { combineReducers } from 'redux';
import expenseReducer from './components/expenseEntries/expenseReducer';
import incomeReducer from './components/incomeEntries/incomeReducer';

const rootReducer = combineReducers({
    expense : expenseReducer,
    income  : incomeReducer
});

export default rootReducer;