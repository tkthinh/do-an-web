const filter_button=document.querySelectorAll('.left-sidebar .btn');
// đổi màu nút khi click
Array.from(filter_button).forEach(function(element){
    element.addEventListener('click',function(event){
        for(let i=0; i<filter_button.length; i++)
        filter_button[i].classList.remove('active');
        this.classList.add('active');
    })
})
function filter_type(name){
let http = new XMLHttpRequest();
http.open('get','../data/index_book.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      products= products.filter(function(ele){
         return (ele.type.includes(name));
       });
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
}