import { openPopup, closePopup } from "../utils/utils.js";

const fullPhotoPopup = document.querySelector("#popup-preview-image");

const previewPhoto = fullPhotoPopup.querySelector(".popup__image-preview");

const previewTitle = fullPhotoPopup.querySelector(".popup__image-title");

export default class Card {
  constructor({ name, link }, cardTemplateSelector) {
    this._name = name;

    this._link = link;

    this._cardTemplateSelector = cardTemplateSelector;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handlePreviewPicture() {
    previewPhoto.src = this._link;

    previewPhoto.alt = this._name;

    previewTitle.innerText = this._name;

    openPopup(fullPhotoPopup);
  }

  _handlePhotoPopup() {
    previewPhoto.src = this._link;

    previewPhoto.alt = this._name;

    previewTitle.innerText = this._name;

    openPopup(fullPhotoPopup);
  }

  _setEventListeners() {
    //".card__like-button_active"

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    //".card__delete-button"

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handlePhotoPopup();
    });
  }

  getView() {
    this._element = document

      .querySelector(this._cardTemplateSelector)

      .content.querySelector(".card")

      .cloneNode(true);

    this._likeButton = this._element.querySelector(".card__like-button");

    this._deleteButton = this._element.querySelector(".card__delete-button");

    this._cardImage = this._element.querySelector(".card__image");

    this._cardTitle = this._element.querySelector(".card__title");

    this._setEventListeners();

    this._cardImage.src = this._link;

    this._cardImage.alt = this._name;

    this._cardTitle.textContent = this._name;

    return this._element;
  }
}

// camelCase
// PascalCase
