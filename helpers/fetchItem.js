const fetchItem = async (iten) => {
try {
  const url = `https://api.mercadolibre.com/items/${iten}`;
  const requisicao = await (await fetch(url)).json();
  return requisicao;
} catch (error) {
  return error;
} 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
