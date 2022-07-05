const sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');
const products = require('../../../helpers/productsMock');

discribe('Arquivo Services', () => {
  
  after(() => {
    sinon.restore();
  });

  discribe('listAll', () => {
    it('verifica se é possivel retornar um array de objetos se houver produtos', async () => {
      sinon.stub(productModel, 'listAll').resolves(products);

      const res = await productService.listAll();

      expect(res).to.be.an('array');
    });
  });
});
