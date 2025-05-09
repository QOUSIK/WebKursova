document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
  
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartCount.textContent = cart.length;
    }
  
    document.querySelectorAll('.order-btn').forEach(button => {
      button.addEventListener('click', function () {
        const product = this.dataset.product;
        const price = parseFloat(this.dataset.price);
  
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ product, price });
        localStorage.setItem('cart', JSON.stringify(cart));
  
        updateCartCount();
  
        //  Анимация корзины
        cartIcon.classList.add('animate');
        setTimeout(() => {
          cartIcon.classList.remove('animate');
        }, 400);
      });
    });
  
    updateCartCount();
  });
  