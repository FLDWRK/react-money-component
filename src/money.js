import React from 'react';
import PropTypes from 'prop-types';
import Currency from 'js-money/lib/currency';
import accounting from 'accounting';

function formattedAmount(cents, currency) {
  const { symbol, decimal_digits: precision } = Currency[currency];
  const amount = cents / Math.pow(10, precision);

  return accounting.formatMoney(amount, { symbol, precision });
}

export default function Money({ cents, currency }) {
  return <span>{formattedAmount(cents, currency)}</span>;
}

Money.propTypes = {
  cents: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
};
