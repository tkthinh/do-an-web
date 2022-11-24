const isLoggedIn = sessionStorage.getItem('isloggedin')
const userState = document.querySelector('.user')
const userWelcome = document.querySelector('.user-text')
const logOut = document.querySelector('.logout')
if(isLoggedIn){
    userState.classList.add('logged')
    userWelcome.innerHTML = 'Xin chào, ' + isLoggedIn + '!'
    userWelcome.href = ''
    logOut.addEventListener('click', function logOut(){
        sessionStorage.clear()
        window.location.reload()
})
}

const buyBtns = document.querySelectorAll('.buy-btn')

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', function(){
        if(!isLoggedIn)
        window.alert('Vui lòng đăng nhập để mua hàng!')
    })
});