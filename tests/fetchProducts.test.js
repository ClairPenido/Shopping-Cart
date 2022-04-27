require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  fail('Teste vazio');
  it('1 - Teste se fetchProducts é uma função;', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('2 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {
    fetchProducts('computador');
    expect(fetch).tobeCalled();
  })
  it('3 - Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {
    fetchProducts('computador');
    expect(fetch).tobeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  it('4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo;', () => {
    const funcaoFetchProducts = fetchProducts ('computador');
    expect(funcaoFetchProducts).toEqual(computadorSearch);
  })
  it('5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url;', () => {
    const funcaoFetchProductsVazia = fetchProducts ();
    expect(funcaoFetchProductsVazia).toEqual(new Error('You must provide an url'));
  })
});
