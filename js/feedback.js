let feedbackLink = document.querySelector(".write-us");
let feedbackPopup = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".button-close");

feedbackLink.addEventListener("click", function (evt){
	evt.preventDefault();
	feedbackPopup.classList.add("feedback-show");
	//feedbackPopup.style.top = "30px";
});

feedbackClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("feedback-show");
});
 
console.log (window.pageYOffset);
console.log (window.innerHeight);
console.log (window.screen.width);