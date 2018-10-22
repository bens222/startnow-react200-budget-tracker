import { connect } from 'react-redux';
import IncomeEntries from './IncomeEntries';

function mapStoreToProps(store) {
  return {
    descritpion: store.income.descritpion,
    amount: store.income.amount,
    lineItems: store.income.lineItems
  };
}

export default connect(mapStoreToProps)(IncomeEntries);
