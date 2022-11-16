
      let products = JSON.parse(window.localStorage.product).book;
      let output = "";
      products.forEach(item => {
         output += `
            <div class="item">
               <a class="item-img"><img src="`+item.image+`"/></a>
               <p class="item-name">`+item.title+`</p> 
               <p class="book-author">`+item.author+`</p>             
               <p class="item-price">`+item.price+`</p>
               <button type="button" class="buy-btn">
                <i class="fa-solid fa-cart-shopping"></i>
              <p>Thêm vào giỏ hàng</p>
                </button>
            </div>
            `;
      });
      document.querySelector(".item-container").innerHTML = output;
      
//    }
// }

 