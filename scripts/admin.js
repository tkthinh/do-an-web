function toggleMenu(){
    let nav = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    nav.classList.toggle('active');
    main.classList.toggle('active');
}