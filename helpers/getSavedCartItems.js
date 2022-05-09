const getSavedCartItems = () => {
// A função getSavedCartItems deve recuperar os itens do carrinho de compras do localStorage quando carregamos a página.
//* pegar o que ta salvo no local storage
  const listaSalvaLS = localStorage.getItem('cartItems');
   return listaSalvaLS;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
