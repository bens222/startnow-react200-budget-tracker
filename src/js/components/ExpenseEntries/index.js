import { connect } from 'react-redux';
import ExpenseEntries from './ExpenseEntries';

function mapStoreToProps(store) {
  return {
    descritpion: store.expense.descritpion,
    amount: store.expense.amount,
    lineItems: store.expense.lineItems
  };
}

export default connect(mapStoreToProps)(ExpenseEntries);
