import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Forms from '../components/Forms';
import Table from '../components/Table';
import FormEdit from '../components/FormEdit';

class Wallet extends React.Component {
  render() {
    const { editInfo } = this.props;
    return (
      <div>
        <Header />
        <section>
          { editInfo !== undefined && editInfo.value > 0 ? <FormEdit /> : <Forms /> }
        </section>
        <Table />
      </div>
    );
  }
}


Wallet.propTypes = {
  editInfo: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    currency: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    exchangeRates: PropTypes.objectOf(PropTypes.object),
    id: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  editInfo: state.wallet.editExpense,
});

export default connect(mapStateToProps)(Wallet);
