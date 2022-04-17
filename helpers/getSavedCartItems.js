const getSavedCartItems = () => {
   const carrinhoU = document.querySelector('.cart__items');
  if (localStorage.length !== 0) {
    const list = localStorage.getItem('cartItems');
    carrinhoU.innerHTML = list;
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
