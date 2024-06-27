class Currency {
  constructor(code, name) {
    // Verify types during object creation
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    // Store attributes with underscore prefix
    this._code = code;
    this._name = name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Setter for code attribute
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display the full currency in the format 'name (code)'
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
