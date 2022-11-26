// @ts-check
/**
 * @typedef {{ id: Number,  image: String,  title: String,  author: String, price: Number,  type?: String[],   description: String }} product
 * @typedef {{ book: product[], vpp: product[] }} Products
 */

//Lấy sản phẩm
/**
 * @type { Products }
 */
var products = window.localStorage.getItem('product') ? JSON.parse(window.localStorage.product) : { book: [], vpp: [] };

/**
 * @type { HTMLTableSectionElement? }
 */
//Wrapper của sản phẩm
var productTable = document.querySelector('.content .products');

//Nút content sản phẩm
/**@type { NodeListOf <HTMLButtonElement> } */
var product_btns = document.querySelectorAll('.product_btn');

//Nút content đơn hàng
/**@type { NodeListOf <HTMLButtonElement> } */
var order_btns = document.querySelectorAll('.order_btn');

//Nút content khách
/**@type { NodeListOf <HTMLButtonElement> } */
var user_btns = document.querySelectorAll('.user_btn');

/**@type { HTMLDivElement? } */
//Bảng thêm sản phẩm
var adding_table = document.querySelector('.adding_table');

/**
 * @type { HTMLSelectElement? }
 */
//Lựa chọn loại sản phẩm
var procuct_choice = document.querySelector('#procuct_choice');
/**
 * @type { HTMLButtonElement? }
 */
//Nút tăng và giảm
var prev_button = document.querySelector('#prev_button');
/**
 * @type { HTMLButtonElement? }
 */
var next_button = document.querySelector('#next_button');

//Các thành phần cần để phân trang
var current_page = 1;
/**
 * @type { number }
 */
var max_id;
const products_per_page = 8;
/**
 * @type { number }
 */
var maxPage;

//================================================================//
function start() {
    //Hàm mặc định chạy khi mở website
    renderProducts();
}
window.onload = start;
//================================================================//

/**@type {HTMLDivElement?} */
var productContent = document.querySelector('.content.product_content');
/**@type {HTMLDivElement?} */
var orderContent = document.querySelector('.content.order_content');
/**@type {HTMLDivElement?} */
var userContent = document.querySelector('.content.user_content');

//Lựa chọn in nội dung nào
product_btns.forEach(ele => {
    ele.addEventListener('click', () => {
        if (orderContent !== null) {
            orderContent.classList.remove('active');
        }
        if (userContent !== null) {
            userContent.classList.remove('active');
        }
        if (!productContent?.classList.contains('active') && !adding_table?.classList.contains('active')) {
            productContent?.classList.add('active');
            adding_table?.classList.add('active');
        }
    })
})
order_btns.forEach(ele => {
    ele.addEventListener('click', () => {
        if (productContent !== null && adding_table!== null) {
            productContent.classList.remove('active');
            adding_table.classList.remove('active');
        }
        if (userContent !== null) {
            userContent.classList.remove('active');
        }
        if (!orderContent?.classList.contains('active')) {
            orderContent?.classList.add('active');
        }
    })
})
user_btns.forEach(ele => {
    ele.addEventListener('click', () => {
        if (productContent !== null && adding_table!== null) {
            productContent.classList.remove('active');
            adding_table.classList.remove('active');
        }
        if (orderContent !== null) {
            orderContent.classList.remove('active');
        }
        if (!userContent?.classList.contains('active')) {
            userContent?.classList.add('active');
        }
    })
})
//================================================================//

//Tùy chọn loại sản phẩm in ra
function productList() {
    /** @type { product[] } */
    var product_list = [];
    
    var choice = procuct_choice?.value;
    if (choice == 'books') {
        maxPage = Math.ceil(products.book.length / products_per_page);
        if (current_page > maxPage)
            current_page = Math.ceil(products.book.length / products_per_page);
        product_list = products.book;
    }
    else if (choice == 'stationery') {
        current_page = 1;
        product_list = products.vpp;
        maxPage = Math.ceil(product_list.length / products_per_page);
    }
    else if (choice == 'all') {
        product_list = products.book.concat(products.vpp);
        maxPage = Math.ceil(product_list.length / products_per_page);
    }
    return product_list;
}

//================================================================//
//Cập nhật id để tạo sản phẩm mới
function updateMaxId() {
    if (products.book.length == 0 && products.vpp.length == 0) {
        max_id = 0;
    }
    else {
        var temp = products.book.concat(products.vpp);
        max_id = temp[temp.length - 1].id;
        for (var i = temp.length - 1; i >= 0; i--) {
            if (max_id < temp[i].id) {
                max_id = temp[i].id;
            }
        }
    }
}

//================================================================//

//Tạo bảng sản phẩm
/**
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} wrapper
 * @param {number} ppp
 * @param {number} curr_page
 */
function displayProducts(list, wrapper, ppp, curr_page) {
    //@ts-expect-error
    wrapper.innerHTML = "";
    var start;
    var end;
    if (1 == 1) {
        start = (curr_page - 1) * ppp;
        end = start + ppp;
    }
    //Cắt mảng sản phẩm cần trong 1 trang
    var curr_page_items = list.slice(start, end);
    var output = '';
    //Dùng vòng lặp in từng sản phẩm
    for (var i = 0; i < curr_page_items.length; i++) {
        //Sản phẩm là sách 
        if (curr_page_items[i].type === undefined) {
            output += `<tr>
                    <td>${curr_page_items[i].id}</td>
                    <td><img src="${curr_page_items[i].image}"/></td>
                    <td><h3>${curr_page_items[i].title}</h3><br/>
                        <p><b>Mô tả: </b> ${curr_page_items[i].description}</p><br/>
                        <p><b>Tác giả/Nhà sản xuất: </b>${curr_page_items[i].author}</p></td>
                    <td>${curr_page_items[i].price}</td>
                    <td><button class="del_btn" value="${curr_page_items[i].id}" onclick="delItem(this)">Xóa</button> </td>
                    </tr>`
        }
        //Sản phẩm là vpp 
        else {
            output += `<tr>
                        <td>${curr_page_items[i].id}</td>
                        <td><img src="${curr_page_items[i].image}"/></td>
                        <td><h3>${curr_page_items[i].title}</h3><br/>
                        <p><b>Thể loại: </b> ${curr_page_items[i].type?.join(', ')}</p><br/>
                        <p><b>Mô tả: </b> ${curr_page_items[i].description}</p><br/>
                        <b>Tác giả/Nhà sản xuất: </b>${curr_page_items[i].author}</p></td>
                        <td>${curr_page_items[i].price}</td>
                        <td><button class="del_btn" value="${curr_page_items[i].id}" onclick="delItem(this)">Xóa</button> </td>
                        </tr>`
        }
        //@ts-expect-error
        wrapper.innerHTML = output;
    }
}
//Tải sản phẩm và phân trang lên trang
function renderProducts() {
    var list = productList();
    //Kiểm tra mảng sản phẩm rỗng
    if (list.length == 0) {
        var checkPagination = document.querySelector('.pagination-wrap.active');
        if (checkPagination)
            checkPagination.classList.remove('active');
        displayProducts(list, productTable, products_per_page, current_page);
        console.warn('Không có sản phẩm!');
    }
    //Tiến hành in nếu mảng không rỗng
    else {
        //Wrapper phân trang
        /** @type {HTMLDivElement?} */
        var pagination_wrapper = document.querySelector('.pagination-wrap');
        pagination_wrapper?.classList.add('active');
        //Wrapper số trang
        var pagination_num = document.querySelector('.pagination-numbers');
        //Xử lí nút tăng và giảm 1 trang
        handleNextAndPrevButton();
        //Render bảng sản phẩm
        displayProducts(list, productTable, products_per_page, current_page);
        //Render phân trang
        displayPagination(list, productTable, pagination_num, products_per_page);
    }
}

//================================================================//
//Tạo phân trang
/**
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} content_wrapper
 * @param {Element | null} pagination_wrapper
 * @param {number} ppp
 */
function displayPagination(list, content_wrapper, pagination_wrapper, ppp) {
    //@ts-expect-error
    pagination_wrapper.innerHTML = '';
    //Số trang bằng tổng sản phẩm chia số sản phẩm 1 trang
    var pages = Math.ceil(list.length / ppp);
    for (var i = 1; i <= pages; i++) {
        //Thêm hàm tạo nút và thêm nút vào phần phân trang
        var newButton = paginationButton(i, list, content_wrapper)
        //@ts-expect-error
        pagination_wrapper.appendChild(newButton);
    }
}
//Tạo các button
/**
 * @param {number} curr_page
 * @param {product[]} list
 * @param {HTMLTableSectionElement | null} content_wrapper
 */
function paginationButton(curr_page, list, content_wrapper) {
    //Tạo button và đánh số các trang cho button
    var button = document.createElement('button');
    button.innerText = curr_page.toString();

    //Nếu button được kích hoạt thì active nó (xem chi tiết active ở file admin.css)
    if (curr_page == current_page)
        button.classList.add('active');

    //Nếu chọn button sẽ đưa danh sách sản phẩm tương ứng
    button.addEventListener('click', () => {
        current_page = curr_page;
        /** @type {HTMLButtonElement?} */
        var curr_btn = document.querySelector('.pagination-wrap.active button.active');
        curr_btn?.classList.remove('active');
        button.classList.add('active');
        handleNextAndPrevButton();
        displayProducts(list, content_wrapper, products_per_page, current_page);
    })
    return button;
}
//Xử lí các nút tăng giảm 1 trang
/**
 * @param {HTMLButtonElement | null} button
 */
function disableButton(button) {
    if (button !== null) {
        button.classList.add("disabled");
        button.setAttribute("disabled", 'true');
    }
}
/**
 * @param {HTMLButtonElement | null} button
 */
function enableButton(button) {
    if (button !== null) {
        button.classList.remove("disabled");
        button.removeAttribute("disabled");
    }
}
function handleNextAndPrevButton() {
    if (current_page === 1) {
        disableButton(prev_button);
    }
    else {
        enableButton(prev_button);
    }
    if (current_page === maxPage) {
        disableButton(next_button);
    }
    else {
        enableButton(next_button);
    }
}
prev_button?.addEventListener('click', () => {
    current_page -= 1;
    handleNextAndPrevButton();
    /**@type {HTMLButtonElement?} */
    var curr_btn = document.querySelector('.pagination-wrap.active button.active');
    curr_btn?.classList.remove('active');
    var btn = document.querySelectorAll('.pagination-numbers button');
    btn[current_page - 1].classList.add('active');

    displayProducts(productList(), productTable, products_per_page, current_page);
})

next_button?.addEventListener('click', () => {
    current_page += 1;
    handleNextAndPrevButton();
    var curr_btn = document.querySelector('.pagination-wrap.active button.active');
    /**@type {HTMLButtonElement?} */
    curr_btn?.classList.remove('active');
    var btn = document.querySelectorAll('.pagination-wrap.active button');
    btn[current_page].classList.add('active');

    displayProducts(productList(), productTable, products_per_page, current_page);
})
//================================================================//


//=====================================================================================================================//
//                                           Chức năng
//===================================================================================//
//Thêm sản phẩm
/**@type {HTMLSelectElement?} */
var product_type = document.querySelector('#product_type');         //Bảng thêm sản phẩm 
/**@type {HTMLButtonElement?} */
var add_img_btn = document.querySelector('#add_img_btn');           //Nút thêm ảnh
/**@type {HTMLInputElement?} */
var add_img_input = document.querySelector('#add_img_input');       //Input ảnh vào
/**@type {HTMLButtonElement?} */
var submit_btn = document.querySelector('#submit_btn');             //Nút xác nhận thêm sản phẩm
/**@type {HTMLDivElement?} */
var tacgia_nsx = document.querySelector('#tacgia_nsx');

var img;                      //Ảnh mới

/**@type {string[]} */
var bookTypes = [];
/**@type {product} */
var newItem;                  //SP mới

//Thêm ảnh
add_img_btn?.addEventListener('click', () => {
    add_img_input?.click();
})
//Show ảnh
add_img_input?.addEventListener('change', (event) => {
    /**@type { HTMLInputElement }*/
    //@ts-expect-error
    var eT = event.target;
    //@ts-expect-error
    img = showFileImg(eT.files[0]);
})
/**
 * @param {File} file
 */
function showFileImg(file) {
    var fileType = file.type;
    var checkFileType = ['image/png', 'image/jpeg', 'image/png'];
    if (checkFileType.includes(fileType)) {
        /**@type {HTMLDivElement} */
        //@ts-expect-error
        var file_img = document.querySelector('.file_img');
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.addEventListener("load", () => {
            file_img.innerHTML = `<img src=\"${fr.result}\">`;
        })
    }
    else {
        alert('Không phải file ảnh!');
    }
    return file.name;
}
//Kiểm tra giá trị input
/**@type { NodeListOf <HTMLInputElement> } */
var product_inputs = document.querySelectorAll('.input_product');   //Input các giá trị
/**@type { NodeListOf <HTMLInputElement> } */
var error_messages = document.querySelectorAll('.error_message');   //Báo lỗi chưa điền thông tin
/**@type {NodeListOf <HTMLInputElement>} */
var add_type_input = document.querySelectorAll('.add_type_input');


//Kiểm tra vô hiệu hóa thanh thể loại
function checkProductTypeWhenAdd(){
    if(product_type?.value == 'themvpp'){
        add_type_input.forEach(ele => {
            ele.setAttribute('disabled', 'true');
        })
    }
    else if(product_type?.value == 'themsach'){
        add_type_input.forEach(ele => {
            ele.removeAttribute('disabled');
        })
    }
}
//Kiểm tra thể loại
function validateBookTypeInput(){
    bookTypes = ['All'];

    /**@type {boolean} */
    var chk = false;
    add_type_input.forEach(ele => {
        if(ele.checked){
            chk = true;
            bookTypes.push(ele.name);
        }
    })
    if(chk === false){
        error_messages[error_messages.length-1].innerText = 'Chưa chọn thể loại';
    }
    else if(chk === true){
        error_messages[error_messages.length-1].innerText = ''; 
    }
}
//Kiểm tra ảnh
function validateImgInput(){
    if (img === undefined) {
        error_messages[0].innerText = 'Chưa chọn ảnh';
    }
    else {
        error_messages[0].innerText = '';
    }
}
function validateInput() {
    validateImgInput();
    for (var i = 1; i < error_messages.length-1; i++) {
        if (product_inputs[i - 1].value == '') {
            error_messages[i].innerText = `Chưa nhập ${product_inputs[i - 1].name}`;
        }
        else {
            error_messages[i].innerText = ``;
        }
    }
    if(product_type?.value == 'themsach'){
        validateBookTypeInput();
    }
}

//Thêm vào localstorage
function handleAdding() {
    updateMaxId();
    if (product_type?.value == 'themsach') {
        newItem = {
            id: max_id + 1,
            image: `/img/sanPhamMoi/${img}`,
            title: `${product_inputs[0].value}`,
            author: `${product_inputs[2].value}`,
            price: Number(product_inputs[1].value),
            type: bookTypes,
            description: `${product_inputs[3].value}`
        };
        products.book.push(newItem);
        localStorage.setItem('product', JSON.stringify(products));

        renderProducts();
    }
    else if (product_type?.value == 'themvpp') {
        newItem = {
            id: max_id + 1,
            image: `/img/sanPhamMoi/${img}`,
            title: `${product_inputs[0].value}`,
            author: `${product_inputs[2].value}`,
            price: Number(product_inputs[1].value),
            description: `${product_inputs[3].value}`
        };
        products.vpp.push(newItem);
        localStorage.setItem('product', JSON.stringify(products));

        renderProducts();
    }
}
//Thêm thông tin còn lại
function addItem() {
    validateInput();
    var arrError = [];
    for (var i = 0; i < error_messages.length; i++) {
        arrError.push(error_messages[i].innerText);
    }
    /**@type {boolean} */
    var check = arrError.every(ele => ele == '');

    if (check) {
        handleAdding();
    }
    else {
        console.warn('Nhập thiếu!');
    }
}
//=======================================================================================//

//=======================================================================================//
//Xóa sản phẩm
/**
 * @param {{value: string}} obj
 */
function delItem(obj) {
    var ck = confirm('Xác nhận xóa sản phẩm ?');
    var id = obj.value;
    if (ck == true) {
        handleDeletingProduct(products.book, products.book.length, id);
        handleDeletingProduct(products.vpp, products.vpp.length, id);

        localStorage.setItem('product', JSON.stringify(products));
        renderProducts();
        console.log('xóa!');
    }
    else {
        console.log('Không xóa!');
    }
}
/**
 * @param {product[]} product_list
 * @param {number} length
 * @param {string} id
 */
function handleDeletingProduct(product_list, length, id) {
    if (length == 0) {
        return;
    }
    else if (length == 1) {
        product_list.pop();
    }
    else if (length > 1) {
        for (var i = 0; i < length; i++) {
            if (product_list[i].id == Number(id)) {
                console.log(`Xóa sản phẩm có id ${product_list[i].id}`);
                product_list.splice(i, 1);
                break;
            }
        }
    }
}
//=====================================================================================================================//


//=====================================================================================================================//
//Chuyển đổi thanh left menu
function toggleMenu() {
    /** @type {HTMLDivElement?} */
    var leftmenu = document.querySelector('.leftmenu');
    /** @type {HTMLDivElement?} */
    var main = document.querySelector('.main');
    leftmenu?.classList.toggle('active');
    main?.classList.toggle('active');
}
//=====================================================================================================================//