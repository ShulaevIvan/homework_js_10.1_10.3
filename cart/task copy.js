
function createGood(quantity, img, goodId, good){

    let cart = document.querySelector('.cart__products')
    let cartProducts = cart.querySelectorAll('.cart__products .cart__product')
    let idList = []

    let newGood = document.createElement('div')
    newGood.innerHTML = `
                        <div class="cart__product" data-id="${goodId}">
                         <img class="cart__product-image" src="${img.src}">
                        <div class="cart__product-count">${quantity}</div>
                        </div>
                   `
    cartProducts.forEach((item)=>{
        idList.push(Number(item.dataset.id))
    });

    if (idList.includes(Number(good.dataset.id))){
        cartProducts.forEach((product)=>{
            if (product.dataset.id == goodId){
                let count = Number(product.querySelector('.cart__product-count').textContent)
                let tag = product.querySelector('.cart__product-count')
                tag.textContent = count + quantity
            };
        });
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