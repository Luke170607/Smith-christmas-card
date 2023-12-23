const popups = document.querySelectorAll(".popup");

// close popup when pressing escape //
function closeByEscape(event) {
  if (event.key === "Escape") {
    popups.forEach((popup) => {
      if (popup.classList.contains("popup_opened")) {
        closePopup(popup);
      }
    });
  }
}

// open popup and add the escape button event listener //
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
  document.addEventListener("mousedown", closeByClickOutside);
}

// close popup and remove the escape button and click event listeners //
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
  document.removeEventListener("mousedown", closeByClickOutside);
}

// close popup when clicking outside
function closeByClickOutside(event) {
  popups.forEach((popup) => {
    if (
      popup.classList.contains("popup_opened") &&
      !popup.contains(event.target)
    ) {
      closePopup(popup);
    }
  });
}

export { popups, openPopup, closePopup };
