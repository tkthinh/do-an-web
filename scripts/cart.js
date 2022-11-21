const cartIcon = document.querySelector(".cart-icon")
const cartClose = document.querySelector(".close-cart")
const cartclear = document.querySelector(".clear-cart")
const cartDOM = document.querySelector(".cart")
const cartOverlay = document.querySelector(".cart-overlay")
const cartCounter =document.querySelector(".cart-counter")
const cartTotal =document.querySelector(".cart-total")
const cartContent =document.querySelector(".cart-content")
const cartItems = document.querySelector(".cart-counter")

const buttons =[...document.querySelectorAll(".buy-btn")];

let cart=[];

let buttonsDOM=[]


    
    buttonsDOM=buttons
    buttons.forEach(button => {
        let id = button.dataset.id;
        let inCart =cart.find(item => item.id === id);
        if(inCart){
            button.innerText ="Đã thêm vào giỏ";
            button.disabled = true;
        }
        else{
            button.addEventListener("click",event =>{
                event.target.innerText="Đã thêm vào giỏ";
                event.target.disabled =true;
                let cartItem = {...getProduct(id), amount:1}
                cart=[...cart,cartItem]
                saveCart(cart)
                setCartValue(cart)
                addCartItem(cartItem)
                
            })
            
        }

    });
    
    
    
     getProduct=(id)=>{
        let products =JSON.parse(window.localStorage.getItem('product')).book;
        return products.find(ele=>{return ele.id ==id})
    };
    saveCart=(cart)=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    setCartValue=(cart)=>{
        let tempTotal =0
        let itemsTotal =0
        cart.map(item =>{
            tempTotal += item.price * item.amount
            itemsTotal +=item.amount
        })
        cartTotal.innerHTML = parseFloat(tempTotal.toFixed(2))
        cartItems.innerHTML = itemsTotal
        console.log(cartTotal, cartItems)
    }
    addCartItem=(item)=>{
        const div = document.createElement('div')
        div.classList.add('cart-item')
            div.innerHTML=`<img src="`+item.image+`" alt="">
            <div>
              <h4>`+item.title+`</h4>
              <h5>`+item.price+`.000đ</h5>
              <span class="remove-item" data-id="`+item.id +`">remove</span>
            </div>
            <div>
              <i class="fas fa-chevron-up" data-id="`+item.id +`"></i>
              <p class="item-amount">`+item.amount+`</p>
              <i class="fas fa-chevron-down" data-id="`+item.id +`"></i>
          </div>`
          cartContent.appendChild(div)
          console.log(cartContent)
    }
    showCart=()=>{
        cartOverlay.classList.add("transparentBcg")
        cartDOM.classList.add("showCart")
    }
    hideCart=()=>{
        cartOverlay.classList.remove("transparentBcg")
        cartDOM.classList.remove("showCart")
    }
    getCart=()=>{
        return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
    }
    populate=(cart)=>{
        cart.forEach(item => this.addCartItem(item))
    }

    // setupAPP=()=>{
    //     cart= getCart()
    //     this.populate(cart)
        cartIcon.addEventListener('click',function(){showCart()})
        cartClose.addEventListener('click',function(){hideCart()})
    // }
   