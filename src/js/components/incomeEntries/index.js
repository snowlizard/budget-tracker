import { connect } from 'react-redux';
import IncomeEntries from './incomeEntries';

const mapStoreToProps = (store) => {
    return {
        description: store.income.description,
        amount     : store.income.amount,
        lineItems  : store.income.lineItems
    };
}

export default connect(mapStoreToProps)(IncomeEntries);