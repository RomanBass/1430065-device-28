let feedbackLink = document.querySelector(".write-us");
let feedbackPopup = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".button-close");

feedbackLink.addEventListener("click", function (evt){
	evt.preventDefault();
	feedbackPopup.classList.add("feedback-show");
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("feedback-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("feedback-show");
    }
  }
});
 
