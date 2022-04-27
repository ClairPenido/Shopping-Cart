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
  // return item.querySelector('span.item__sku').innerText;
  console.log(item);
}
getSkuFromProductItem();

function cartItemClickListener(event) {
  return event;
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
async function retornaComputador() {
  const pegaItems = document.querySelector('.items');
  const pegaResultados = await fetchProducts(); // CUIDADO
  pegaResultados.forEach((produto) => {
     const resultado = createProductItemElement(produto);
     console.log(produto);
     pegaItems.append(resultado);
    });
  console.log('aqui', pegaResultados);
  return pegaResultados;
  }
  retornaComputador();

window.onload = () => { };
