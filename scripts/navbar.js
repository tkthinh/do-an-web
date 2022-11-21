window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var topElement = document.querySelectorAll(".top-menu div a")
    header.classList.toggle("sticky", window.scrollY > 50);
    // topElement.classList.toggle("sticky", window.scrollY > 0);
})

const menuBtn = document.querySelector('.dropdown');

const searchBar = document.querySelector('.search');
const searchInput = document.getElementById('search_bar')
const searchResult = document.querySelector('.search-results')

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('drop');
    searchBar.classList.remove('drop');
})

searchBar.addEventListener("click", () =>{
    menuBtn.classList.remove('drop');
    if(searchInput.value = ''){
        searchBar.classList.remove('drop')
    }
    else{
        searchBar.classList.toggle('drop');
    }
})

window.onbeforeunload = function () {
    if(window.scrollTo) window.scrollTo(0,0);
};
