const saveCartItems = (listaAserSalva) => { 
// Para que isso funcione, o carrinho de compras deve ser salvo no LocalStorage, ou seja, todas as adições e remoções devem ser abordadas para que a lista esteja sempre atualizada.
// A função saveCartItems deve salvar os itens do carrinho de compras no localStorage, 
// em uma chave denominada cartItems.
 localStorage.setItem('cartItems', listaAserSalva);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
