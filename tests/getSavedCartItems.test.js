const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
 it('Ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
  getSavedCartItems();
  expect(localStorage.setItem).toHaveBeenCalled();
 })
 it('Ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
  getSavedCartItems('cartItems')
  expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
 })
});
