import { connect } from 'react-redux';
import ExpenseEntries from './expenseEntries';

const mapStoreToProps = (store) => {
    return {
        description: store.expense.description,
        amount     : store.expense.amount,
        lineItems  : store.expense.lineItems
    };
}


export default connect(mapStoreToProps)(ExpenseEntries);