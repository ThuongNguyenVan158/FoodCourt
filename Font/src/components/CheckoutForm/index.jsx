import React from 'react';
import PropTypes from 'prop-types';
import { PaymentMethod, Receiver } from './part';

function CheckoutForm(props) {
  return (
    <>
      <Receiver />
      <PaymentMethod />
    </>
  );
}

CheckoutForm.propTypes = {};

export default CheckoutForm;
