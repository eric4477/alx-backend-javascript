// 4-pricing.js
import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    // Verify types during object creation
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }

    // Store attributes with underscore prefix
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount attribute
  get amount() {
    return this._amount;
  }

  // Setter for amount attribute
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for currency attribute
  get currency() {
    return this._currency;
  }

  // Setter for currency attribute
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = newCurrency;
  }

  // Method to display the full price in the format 'amount currency_name (currency_code)'
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method to convert the price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
