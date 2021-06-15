//Making a scroll to top button
const scrollButton = document.querySelector(".scrollToTop-arrow");

window.addEventListener("scroll", function() {
  scrollButton.classList.toggle("active", window.scrollY > 500)
});

//clicking on the Scroll to top button, taking you back to the start of the page  
scrollButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});