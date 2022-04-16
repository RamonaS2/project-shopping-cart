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

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  const carrinho = document.querySelector('.cart__items');

  carrinho.removeChild(event.target);
  }

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const adicioneIten = async (event) => {
  const iten = getSkuFromProductItem(event.target.parentNode);
  console.log(event.target.parentNode);
  const resultRequi = await fetchItem(iten);
  console.log(resultRequi);
    const { id: sku, title: name, price: salePrice } = resultRequi;
    const valores = { sku, name, salePrice };
  
    const itens = createCartItemElement(valores);
    const pai = document.querySelector('.cart__items');
  
    pai.appendChild(itens);
   };

const createList = async () => {
  const resultadoRequi = await fetchProducts();
  const result = resultadoRequi.results;
  result.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
  const valores = { sku, name, image };

  const product = createProductItemElement(valores);
  const pai = document.querySelector('.items');

  pai.appendChild(product);
  });
  const botaoAddCarrinho = document.querySelectorAll('.item__add');
  botaoAddCarrinho.forEach((el) => {
    el.addEventListener('click', adicioneIten);
  });
};

 createList();

window.onload = () => { };
