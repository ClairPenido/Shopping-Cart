const getSavedCartItems = () => {
// A função getSavedCartItems deve recuperar os itens do carrinho de compras do localStorage quando carregamos a página.
//* pegar o que ta salvo no local storage
  const pegaLista = document.querySelector('.cart__items');
  const listaSalvaLS = localStorage.getItem('cartItems');
  pegaLista.innerHTML = listaSalvaLS; 
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
