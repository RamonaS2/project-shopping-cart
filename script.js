const carrinho = document.querySelector('.cart__items');

const carregar = () => {
  const paraCarregar = document.createElement('h2');
  paraCarregar.className = 'loading';
  paraCarregar.innerText = 'carregando...';
  const catagalo = document.querySelector('.container');

  catagalo.appendChild(paraCarregar);
};

const vaiEmbora = () => {
  const paraCarregar = document.querySelector('.loading');
  // const catagalo = document.querySelector('.container');
  paraCarregar.remove();
};

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
  carrinho.removeChild(event.target);
  saveCartItems(carrinho.innerHTML);
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
    saveCartItems(carrinho.innerHTML);
   };

const createList = async () => {
   carregar();
  const resultadoRequi = await fetchProducts();
  const result = resultadoRequi.results;
  result.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
  const valores = { sku, name, image };

  const product = createProductItemElement(valores);
  const pai = document.querySelector('.items');

  pai.appendChild(product);
  });
  vaiEmbora();
  const botaoAddCarrinho = document.querySelectorAll('.item__add');
  botaoAddCarrinho.forEach((el) => {
    el.addEventListener('click', adicioneIten);
  });
};

 createList();

 const exclui = () => {
  const item = document.getElementsByClassName('cart__item');
  for (let i = 0; i < item.length; i += 0) {
      carrinho.removeChild(item[i]);
  }
  saveCartItems(carrinho.innerHTML);
 };

 const botaoEsvazia = document.querySelector('.empty-cart');

 botaoEsvazia.addEventListener('click', exclui);

window.onload = () => { 
  getSavedCartItems();
  const itens = document.querySelectorAll('.cart__item');
  itens.forEach((el) => {
    el.addEventListener('click', cartItemClickListener);
  });
};
