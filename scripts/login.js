const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

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

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  window.alert('Đã tạo tài khoản')
}

function login(e){
  event.preventDefault();
  
  var username = document.querySelector('.log_username').value;
  var password = document.querySelector('.log_password').value;
  var result = document.querySelector('.result');

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  console.log(data);

  if((username != data.username || password != data.password)){
    result.innerHTML = "Sai tài khoản hoặc mật khẩu !"
  }
  else if(username == data.username && password == data.password){
    result.innerHTML = 'Đăng nhập thành công'
    sessionStorage.setItem('isloggedin',username)
    window.location.href = '/index.html'
  }
}