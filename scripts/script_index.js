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
fetch('../data/index_book.json')
.then(res =>res.json)
.then(data => {})
 