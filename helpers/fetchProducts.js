// const url = (`https://api.mercadolibre.com/sites/MLB/search?q=${param}`); //! pq nao funciona?
// A lista de produtos que devem ser exibidos é o array results no JSON acima.
const fetchProducts = async (param) => {
  const aurl = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
    const a = await aurl.json()
    .then((data) => data).catch((error) => error);
    return a.results;
};
console.log(fetchProducts());

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// const fetchItem = async () => {
//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   return coins;
// };

// const setCoins = async () => {
//   const coins = await fetchCoins();

//   const coinsList = document.getElementById('coins-list');

//   coins.forEach((coin) => {
//     const newLi = document.createElement('li');
//     const usdPrice = Number(coin.priceUsd);

//     newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

//     coinsList.appendChild(newLi);
//   });
// };
