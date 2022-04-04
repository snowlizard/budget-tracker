import { connect } from 'react-redux';
import Summary from './summary';

const mapStoreToProps = (store) => {
    return {
        expenseItems: store.expense.lineItems,
        incomeItems : store.income.lineItems
    }
}

export default connect(mapStoreToProps)(Summary);