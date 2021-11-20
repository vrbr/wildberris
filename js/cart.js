const cart = function () {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.querySelector('#modal-cart');
    const cartClose = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    });

    cartClose.addEventListener('click', () => {
        cart.style.display = '';
    });
}

cart();