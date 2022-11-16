const filter_button=document.querySelectorAll('.left-sidebar .btn');
// đổi màu nút khi click
Array.from(filter_button).forEach(function(element){
    element.addEventListener('click',function(event){
        for(let i=0; i<filter_button.length; i++)
        filter_button[i].classList.remove('active');
        this.classList.add('active');
    })
})
// lọc item và phân trang
const main =JSON.parse(window.localStorage.product);

let totalPage=0
let limitPage=9

filter_type=(name)=>{
    let perPage=[]
    let currentPage=1
    let products = main.book;

    products= products.filter(function(ele){return (ele.type.includes(name));});
    
    totalPage = Math.ceil(products.length/limitPage)
    
    
    perPage = products.slice(
        (currentPage-1)*limitPage,
        (currentPage-1)*limitPage + limitPage
    )
    renderPage(products)
    renderItem(perPage)
    
}

handlePageNumber=(num)=>{
    currentPage = num
    perPage = products.slice(
        (currentPage-1)*limitPage,
        (currentPage-1)*limitPage + limitPage
    )
    renderItem(perPage)
}

renderPage=(products)=>{
    totalPage =Math.ceil(products.length/limitPage)
    let output = "";
    for(let i=1; i<= totalPage; i++)
    { output += `<div onclick="handlePageNumber(${i})">${i}</div>`}
    document.getElementById("pagination-numbers").innerHTML=output
}

renderItem=(products)=>{
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
})
document.querySelector(".item-container").innerHTML = output
}
// renderItem=()=>{
//     let output = "";
//     products.forEach(item => {
//     output += `
//       <div class="item">
//          <a class="item-img"><img src="`+item.image+`"/></a>
//          <p class="item-name">`+item.title+`</p> 
//          <p class="book-author">`+item.author+`</p>             
//          <p class="item-price">`+item.price+`</p>
//          <button type="button" class="buy-btn">
//           <i class="fa-solid fa-cart-shopping"></i>
//         <p>Thêm vào giỏ hàng</p>
//           </button>
//       </div>
//       `;
// })
// document.querySelector(".item-container").innerHTML = output
// }
   
      //  products.forEach(function(item, index) {
      //   if(index < 8) {
      //     output += `
      //        <div class="item">
      //           <a class="item-img"><img src="`+item.image+`"/></a>
      //           <p class="item-name">`+item.title+`</p> 
      //           <p class="book-author">`+item.author+`</p>             
      //           <p class="item-price">`+item.price+`</p>
      //           <button type="button" class="buy-btn">
      //            <i class="fa-solid fa-cart-shopping"></i>
      //          <p>Thêm vào giỏ hàng</p>
      //            </button>
      //        </div>
      //        `;
      //   }
      // document.querySelector(".item-container").innerHTML = output;

      //  })
      // }       


//====================================================================================================
// let perPage = 9;
// let currentPage = 1;
// let start = 0;
// let end = 0;
// const totalPage = Math.ceil(products.length / perPage);
// const btnNext = document.querySelector('.btnNext');
// const btnPrev = document.querySelector('.btnPrevious');

// function getCurrentPage(currentPage){
//     start = (currentPage - 1) * perPage;
//     end = (currentPage - 1) * perPage + perPage;
//     console.log(start,end);
// }

// function renderProduct() {
//     html = '';
//     const content_product = product.map((item, index) => {
//         if (index >= start && index < end) {
//             html += '<div class ="col l-3">'
//             html += '<div class = "item">';
//             html += '<img src=' + item.image + '>';
//             html += '<h2>' + item.title + '</h2>';
//             html += '<h3>' + item.price + '</h3>';
//             html += '<button class="btn_buy">'+item.buy+'</button>';
//             html += '</div>'
//             html += '</div>'
//             return html;
//         }
//     })
//     document.getElementById('product').innerHTML = html;
// }

// renderProduct();
// renderListPage()
// function renderListPage() {
//     let html = '';
//     html += `<li class="count_page"><button>${1}</button></li>`;
//     for (let i = 2; i <= totalPage; i++) {
//         html += `<li class="count_page"><button>${i}</button></li>`;
//     }
//     document.getElementById('number-page').innerHTML = html;
    
//     function changePage() {
//         const currentPages = document.querySelectorAll('.number-page li');
//         console.log(currentPage);
//         for(let i = 0 ; i < currentPages.length; i++){
//             currentPages[i].onclick=()=>{
//                 let value = i + 1;
//                 currentPage = value;
//                 getCurrentPage(currentPage);
//                 renderProduct();
//             }
//         }
//     }
//     changePage();
// }


// renderListPage();
// btnNext.addEventListener('click', () => {
//     currentPage++;
//     if (currentPage > totalPage) {
//         currentPage = totalPage;
//     }
//     getCurrentPage(currentPage);
//     renderProduct();

// })
// btnPrev.addEventListener('click', () => {
//     currentPage--;
//     if (currentPage <= 1) {
//         currentPage = 1;
//     }
//     getCurrentPage(currentPage);
//     renderProduct();

// })