let hash = window.location.hash
let hasg = Number(hash.slice(1,hash.length))
const moreb =JSON.parse(window.localStorage.product).book;
console.log(typeof(hasg));
getProduct=(id)=>{
    let products =JSON.parse(window.localStorage.getItem('product')).book;
    return products.find(ele=>{return ele.id ==id})
};
 ranNum=(min, max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
let DetailProduct = getProduct(hasg)
rendersItem=(products)=>{
    let output = ""
    let min=0
    let max=5
    for(i=0; i<8; i++){
    let num=ranNum(min,max)
    output += `
    <div class="item swiper-slide">
    <a class="item-img" href="chi-tiet.html#`+products[num].id+`" target="_blank" ><img src="`+products[num].image+`"/></a>
    <a class="item-name" href="chi-tiet.html#`+products[num].id+`">`+products[num].title+`</a>
    <a class="book-author">`+products[num].author+`</a>
    <span class="item-price">`+products[num].price+`.000đ</span>
  </div>
      `;
    min+=5;max+=5
}
    document.querySelector('.swiper-wrapper').innerHTML = output
}
rendersItem(moreb)
document.querySelector('.main-info').innerHTML=`<div class="item-img-large">
                                                <img src="`+DetailProduct.image+`">
                                                </div>
                                                <div class="item-info">
                                                <h2 class="item-name-large">`+DetailProduct.title+`</h2>
                                                <div class="author">
                                                    <span class="by">Tác giả: </span>
                                                    <a href="#" class="author-name">`+DetailProduct.author+`</a>
                                                </div>
                                                <h3 class="price">`+DetailProduct.price+`.000đ</h3>
                                                <div class="condition">
                                                    <i class="fa-solid fa-circle-check con"></i>
                                                    <p class="con">Còn hàng</p>
                                                </div>
                                                <div class="condition">
                                                    <i class="fa-solid fa-circle-xmark het"></i>
                                                    <p class="het">Hết hàng</p>
                                                </div>
                                                <button class="btn add-cart">
                                                    <i class="fa-solid fa-cart-plus"></i>
                                                    Thêm vào Giỏ hàng
                                                </button>
                                                <button class="btn wishlist">
                                                    <i class="fa-regular fa-heart"></i>
                                                    Thêm vào Ưa thích
                                                </button>
                                                </div>
                                                </section>
                                                <section class="overview">
                                                <h3>Tổng quan</h3>`+DetailProduct.description+`.`

