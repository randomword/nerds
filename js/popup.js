var linkWrite = document.querySelector(".btn-write-us");
var popupWrite = document.querySelector(".modal-write");
var closeWrite = document.querySelector(".modal-write-close");

linkWrite.addEventListener("click", function(event){
  event.preventDefault();
  popupWrite.classList.add("modal-content-show");
});

closeWrite.addEventListener("click", function(event){
  event.preventDefault();
  popupWrite.classList.remove("modal-content-show");
});
