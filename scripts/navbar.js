window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var topElement = document.querySelectorAll(".top-menu div a")
    header.classList.toggle("sticky", window.scrollY > 0);
    // topElement.classList.toggle("sticky", window.scrollY > 0);
})