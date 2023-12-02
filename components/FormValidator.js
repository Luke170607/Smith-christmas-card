export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;

    this._inputElements = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._submitBtn = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  // this?._(object) --> checks validity of the object. Doesn't crash site to check. If Object is well defined then it will return with no errors, better than console error! //

  _hasInvalidInput() {
    return !this._inputElements.every(
      (inputElements) => inputElements.validity.valid
    );
  }

  _toggleBtnState() {
    if (this._hasInvalidInput(this._inputElements)) {
      this._submitBtn.classList.add(this._inactiveButtonClass);
      this._submitBtn.disabled = true;
      return;
    }
    this._submitBtn.classList.remove(this._inactiveButtonClass);
    this._submitBtn.disabled = false;
  }

  _showInputError(inputElements) {
    this._errorMessageElement = this._formElement.querySelector(
      `#${inputElements.id}-error`
    );
    inputElements.classList.add(this._inputErrorClass);
    this._errorMessageElement.textContent = inputElements.validationMessage;
    this._errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElements) {
    this._errorMessageElement = this._formElement.querySelector(
      `#${inputElements.id}-error`
    );
    inputElements.classList.remove(this._inputErrorClass);
    this._errorMessageElement.textContent = "";
    this._errorMessageElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElements) {
    if (!inputElements.validity.valid) {
      this._showInputError(inputElements);
    } else {
      this._hideInputError(inputElements);
    }
  }

  resetValidation() {
    this._toggleBtnState();
    this._inputElements.forEach((inputElements) => {
      this._hideInputError(inputElements);
    });
  }

  _setEventListeners() {
    this._inputElements.forEach((inputElements) => {
      inputElements.addEventListener("input", () => {
        this._checkInputValidity(inputElements);
        this._toggleBtnState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
}
