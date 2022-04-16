const fetchProducts = async () => {
 const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
 const requisicao = await (await fetch(url)).json();
  return requisicao;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
