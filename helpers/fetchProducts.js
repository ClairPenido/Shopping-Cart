// const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${param}`); //! pq nao funciona?
// A lista de produtos que devem ser exibidos é o array results no JSON acima.
const fetchProducts = async (param) => {
  try {
  const aURL = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
    const a = await aURL.json();
    return a;
} catch (error) { 
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
