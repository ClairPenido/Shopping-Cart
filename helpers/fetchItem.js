const fetchItem = async (itemID) => {
  try {
  const apiUrl = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
    const retornoJSON = await apiUrl.json();
    return retornoJSON;
} catch (error) { 
  return error;
}
};

console.log(fetchItem('MLB1341706310')); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
