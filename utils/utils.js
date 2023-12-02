const popup = document.querySelectorAll(".popup");

// close popup when pressing escape //

function closeByEscape(event) {
  if (event.key === "Escape") {
    popup.forEach((popup) => {
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
}

// close popup and remove the escape button event listener //

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export { popup, openPopup, closePopup };
