

const books = JSON.parse(window.localStorage.product).book;
const stationery = JSON.parse(window.localStorage.product).vpp;
let current_page = 1, products_per_page = 5;
//Chuyển đổi menu
function toggleMenu(){
    let leftmenu = document.querySelector('.leftmenu');
    let main = document.querySelector('.main');

    leftmenu.classList.toggle('active');
    main.classList.toggle('active');
}

//Hàm mặc định chạy khi mở website
function start(){
    renderProducts(books);
}
window.onload = start();

//Tải sản phẩm và phân trang lên trang
function renderProducts(data){
    if(data.length == 0)
        alert('Không có sản phẩm!');
    else{
        //Wrapper của sản phẩm
        let productTable = document.querySelector('.products');
        //Wrapper phân trang
        let pagination_wrapper = document.querySelector('.pagination-wrap');
        pagination_wrapper.classList.add('active');
        //Wrapper số trang
        let pagination_num = document.querySelector('.pagination-numbers');
        //Render bảng sản phẩm
        displayProducts(data, productTable, products_per_page, 1);
        //Render phân trang
        displayPagination(data, productTable, pagination_num, products_per_page);
    }
}
//Tạo bảng sản phẩm
function displayProducts(product_list, wrapper, ppp, curr_page){
    wrapper.innerHTML ="";
    let start = (curr_page - 1) * ppp;
    let end = start + ppp;
    //Cắt mảng sản phẩm cần trong 1 trang
    let curr_page_items = product_list.slice(start, end);
    let output ='';
    //Dùng vòng lặp in từng sản phẩm
    for(let i=0; i<curr_page_items.length; i++){
        output += `<tr>
                    <td>${i+1}</td>
                    <td><img src="` +curr_page_items[i].image +`"/></td>
                    <td>`+ curr_page_items[i].title +`</td>
                    <td>`+ curr_page_items[i].price +`</td>
                    <td><a href="#">Xem</a></td>
                    <td>Sửa / Xóa</td>
                    </tr>`
        wrapper.innerHTML = output;
    }
}

//Tạo phân trang
function displayPagination(product_list, product_wrapper, pagination_wrapper,ppp){
    pagination_wrapper.innerHTML ='';
    let pages = Math.ceil(product_list.length / ppp);
    for( let i=1; i<= pages; i++){
        let newButton = paginationButton(i, product_list, product_wrapper)
        pagination_wrapper.appendChild(newButton);
    }
}
//Tạo các button
function paginationButton(curr_page, product_list, product_wrapper){
    let button = document.createElement('button');
    button.innerText = curr_page;
    if( curr_page == current_page)
        button.classList.add('active');
    button.addEventListener('click', ()=>{
        current_page = curr_page;
        let curr_btn = document.querySelector('.pagination-wrap.active button.active');
        curr_btn.classList.remove('active');
        button.classList.add('active');
        displayProducts(product_list, product_wrapper, products_per_page,current_page);
    })
    return button;
}

