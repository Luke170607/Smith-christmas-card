import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { popup, openPopup, closePopup } from "../utils/utils.js";

// ELEMENTS //

const initialCards = [
  {
    name: "Kilaue lighthouse- Kauai      HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/WzTKjv5T/hawai-couple-pic.jpg",
  },
  {
    name: "Josh & April's engagement pictures! Beautiful sunset in the background       HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/FzS83XZJ/josh-april-engagement-pics.jpg",
  },
  {
    name: "4th of July in Lake City        HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/fyCPRrPX/4th-of-july-pic.jpg",
  },
  {
    name: "Lunch in Temecula with Darren & Mari        HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/W1CHzr59/dinner-with-smith-s.jpg",
  },
  {
    name: "Duane's birthday celebreation.  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/cJKfjJ6h/Screenshot-2023-12-01-151730.jpg",
  },
  {
    name: "At the Pourhouse with Darryl and Liza     HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/qqc6Ng9h/dinner-with-darryl.jpg",
  },
  {
    name: "Lori and sons (and granddog)       HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/4xkxhJJs/IMG-3054.jpg",
  },
  {
    name: "Picture with the grandkids in Loma Linda for thanksgiving!  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/x1zDgvn1/smith-grandkids.jpg",
  },
  {
    name: "Duane and sons.  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/XY1wQ5NX/smith-sons-pic.jpg",
  },
  {
    name: "Bumpass Hell- Lassen National Park.  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/13K9Q0V5/national-park-pic.jpg",
  },
  {
    name: "Hanging out with good friends!  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/vHggbKG8/profile-pic.jpg",
  },
  {
    name: "Lake City snow day.  HIT ESCAPE TO CLOSE",
    link: "https://i.postimg.cc/43NXNKpv/snow-day-pic.jpg",
  },
];

const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

//Wrappers //

const profileEditPopup = document.querySelector("#edit-popup");
const profileEditForm = document.querySelector("#edit-profile-form");
const cardList = document.querySelector(".cards__list");
const addPhotoPopup = document.querySelector("#add-photo-popup");
const addPhotoForm = addPhotoPopup.querySelector(".popup__form");
const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, addPhotoForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

// Buttons //

const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector("#profile-name");
const profileDescription = document.querySelector("#profile-description");
const profileAddButton = document.querySelector("#profile-add-button");
// FORM INPUTS //

const profileNameInput = profileEditPopup.querySelector("#name-input");
const profileDescriptionInput = profileEditPopup.querySelector(
  "#owners-description"
);
const photoTitleInput = addPhotoPopup.querySelector("#image-title");
const photoLinkInput = addPhotoPopup.querySelector("#image-url");
const inputElements = document.querySelectorAll(".popup__input");
// const inputErrorClass.textContent = inputElements.validationMessage;
// FUNCTIONS //

function createCard(cardData, cardList) {
  const cardElement = new Card(cardData, cardList);
  return cardElement.getView();
}

function renderCard(cardData, cardList) {
  const cardElement = createCard(cardData, "#card-template");
  cardList.prepend(cardElement);
}

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileName.innerText = profileNameInput.value;
  profileDescription.innerText = profileDescriptionInput.value;
  editFormValidator.resetValidation();
  closePopup(profileEditPopup);
}

function handleAddPhotoSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: photoTitleInput.value,
    link: photoLinkInput.value,
  };
  renderCard(cardData, cardList);
  closePopup(addPhotoPopup);
  addPhotoForm.reset();
}

// EVENT LISTENERS //
//creating the cards //

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, "#card-template");
  cardList.append(cardElement);
});

// Open edit profile popup //

profileEditButton.addEventListener("click", function () {
  profileNameInput.value = profileName.innerText;
  profileDescriptionInput.value = profileDescription.innerText;
  openPopup(profileEditPopup);
});

// save the edit profile popup //

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

// open the photo popup //

profileAddButton.addEventListener("click", function () {
  addFormValidator.resetValidation();
  openPopup(addPhotoPopup);
});

//add photo popup  SAVE//

addPhotoForm.addEventListener("submit", handleAddPhotoSubmit);

// Overlay for open and close popup//
