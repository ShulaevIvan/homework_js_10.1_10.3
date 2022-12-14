
function createGood(quantity, img, goodId, good){

    let cart = document.querySelector('.cart__products')
    let cartProducts = Array.from(cart.querySelectorAll('.cart__products .cart__product'))
    let idList = []

    let newGood = document.createElement('div')
    newGood.innerHTML = `
                        <div class="cart__product" data-id="${goodId}">
                         <img class="cart__product-image" src="${img.src}">
                        <div class="cart__product-count">${quantity}</div>
                        </div>
                   `

    let check = cartProducts.find(item => item.dataset.id == goodId)

    if (check != undefined && check.dataset.id == good.dataset.id){
        let count = Number(good.querySelector('.cart__product-count'))
        let tag = check.querySelector('.cart__product-count')
        console.log(tag)
        tag.textContent = Number(quantity) + Number(tag.textContent)
    }
    else {
        cart.appendChild(newGood)
    };
};

function incDecBtn(btnsTag){

    btnsTag.forEach((btn)=>{

        btn.addEventListener('click', (e)=>{
        let target = e.target
        let blockValue, value

        if (btn.classList.contains('product__quantity-control_inc')){
            blockValue = target.previousElementSibling
            value = Number(blockValue.textContent)
            value++
            blockValue.textContent = value
        }
        else if (btn.classList.contains('product__quantity-control_dec')){
            blockValue = target.nextElementSibling
            value = Number(blockValue.textContent)
            value--
            value < 0 ? value = 0 : blockValue.textContent = value        
        };
        });
    });
};



window.addEventListener('DOMContentLoaded', ()=>{

    let btns= document.querySelectorAll('.product__add')
    let incrBtns = document.querySelectorAll('.product__quantity-control_inc')
    let decBtns = document.querySelectorAll('.product__quantity-control_dec')

    incDecBtn(incrBtns)
    incDecBtn(decBtns)

    btns.forEach((item)=>{

        item.addEventListener('click', (e)=>{
            let target = e.target
            let good = target.closest('.product')
            let goodImg = good.querySelector('.product__image')
            let goodId = good.getAttribute('data-id')
            let qnt = Number(target.previousElementSibling.querySelector('.product__quantity-value').textContent)

            createGood(qnt, goodImg, goodId, good) 
        });
    });
});