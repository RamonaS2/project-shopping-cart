const fetchProducts = async (produto) => {
  try {
 const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
 const requisicao = await (await fetch(url)).json();
  return requisicao;
} catch (error) {
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
