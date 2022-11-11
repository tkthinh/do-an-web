const name_item = document.querySelectorAll('.name_item');
const search_item= document.getElementById('search-item');
const element_cakes=document.querySelectorAll('.element_cakes');
const filter_button=document.querySelectorAll('.left-sidebar .btn');
const h1_price=document.querySelectorAll('h1.price');

Array.from(filter_button).forEach(function(element){
    element.addEventListener('click',function(event){
        for(let i=0; i<filter_button.length; i++)
        filter_button[i].classList.remove('active');
        this.classList.add('active');
    })
    let name_filter= element.dataset.filter;
    Array.from()
})