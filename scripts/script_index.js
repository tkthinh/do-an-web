const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")
let http = new XMLHttpRequest();
http.open('get','../data/index_book.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         output += `
            <div class="item">
               <a class="item-img"><img src="${item.image}"/></a>
               <p class="item-name">${item.title}</p> 
               <p class="book-author">${item.author}</p>             
               <p class="item-price">${item.price}</p>
               <button type="button" class="buy-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              <p>Thêm vào giỏ hàng</p>
                </button>
            </div>
         `;
      }
      document.querySelector(".item-container").innerHTML = output;
      
   }
}
let users=[]
searchInput.addEventListener("onkeyup", e=>{
   const value = e.target.value
   users.forEach(user =>{
      const isVisible = user.title.toLowerCase().includes(value) || user.type.toLowerCase().includes(value)
   })
})
fetch('../data/index_book.json')
.then(res =>res.json())
.then(data => {
   user = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const img = card.querySelector("[data-image]")
      const titl = card.querySelector("[data-title]")
      const pri = card.querySelector("[data-price]")
      const typ = card.querySelector("[data-type]")
      img.textContent = user.image;
      titl.textContent = user.title;
      pri.textContent = user.price;
      typ.textContent = user.type;
      userCardContainer.append(card)
      return{ image: user.image, title: user.title, price: user.price, type: user.type, element: card }
   })
   
})
 