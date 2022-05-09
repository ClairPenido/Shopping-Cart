const fetchItem = async (itemID) => {
  try {
  const apiUrl = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
    const retornoJSON = await apiUrl.json();
    return retornoJSON;
} catch (error) { 
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
