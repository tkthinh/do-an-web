const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

var users = JSON.parse(localStorage.getItem('user'))

function signin(e){
  event.preventDefault();

  var email = document.querySelector('.email').value;
  var username = document.querySelector('.username').value;
  var password = document.querySelector('.password').value;

  var user ={
  email : email,
  username : username,
  password : password
  }

  var storedUser = JSON.parse(localStorage.getItem('user'))
  users.push(user)
  localStorage.setItem('user', JSON.stringify(users));

  window.alert('Đã tạo tài khoản')
}

function login(e){
  event.preventDefault();
  
  var username = document.querySelector('.log_username').value;
  var password = document.querySelector('.log_password').value;
  var result = document.querySelector('.result');

  for(savedUser of users){
    if(username == savedUser.username && password == savedUser.password){
        result.innerHTML = 'Đăng nhập thành công'
        localStorage.setItem('isloggedin',username)
        window.location.href = '/index.html'
      }
      else if(username == 'admin' && password == 'admin'){
        window.location.href = '/admin.html'
      }
      else if((username != savedUser.username || password != savedUser.password)){
        result.innerHTML = "Sai tài khoản hoặc mật khẩu !"
      }
  }
}