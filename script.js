function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) { // passar proprio objeto como parametro
  const section = document.createElement('section'); // sku = id - name = title - image = thumbnail 
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku)); // codigo unico de identificação do produto 
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
 return item.querySelector('span.item__sku').innerText; // tipo span com a classe item sku
}

function cartItemClickListener(event) {

}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li'); // id = id - título = title - preço = price
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
async function retornaComputador(param) {
  const pegaItems = document.querySelector('.items');
  const pegaResultados = await fetchProducts(param); // CUIDADO
  pegaResultados.results.forEach((produto) => {
     const resultado = createProductItemElement(produto);
     pegaItems.appendChild(resultado);
    });
  return pegaResultados;
  }
  
  function criaCarrinhoDeCompras() {
  const pegaBotao = document.querySelectorAll('.item__add');
  const pegaLista = document.querySelector('.cart__items');
  pegaBotao.forEach((elem) => { // escutar cada botao
      elem.addEventListener('click', async (event) => {
        const seila = getSkuFromProductItem(event.target.parentNode); 
        const pegaID = await fetchItem(seila);
        const aff = createCartItemElement(pegaID);
        pegaLista.appendChild(aff);
      });
  });
}

window.onload = async () => { 
  await retornaComputador('computador');
  criaCarrinhoDeCompras();
};
