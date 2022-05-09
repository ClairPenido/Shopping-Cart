require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('1 - Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('2 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('3 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo;', async () => {
    const funcaoFetchProducts = await fetchProducts ('computador');
    expect(funcaoFetchProducts).toEqual(computadorSearch);
  })
  it('5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url;', async () => {
    const funcaoFetchProductsVazia = await fetchProducts ();
    expect(funcaoFetchProductsVazia).toEqual(new Error('You must provide an url'));
  })
}); 
