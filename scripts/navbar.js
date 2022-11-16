window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var topElement = document.querySelectorAll(".top-menu div a")
    header.classList.toggle("sticky", window.scrollY > 50);
    // topElement.classList.toggle("sticky", window.scrollY > 0);
})


// document.addEventListener("click", function(){
//     const dropdown = document.querySelector(".dropdown")
//     dropdown.classList.add('active')

//     if(!dropdown.contains(event.target)){
//         dropdown.classList.remove('active')
//     }
// })
