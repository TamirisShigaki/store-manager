const sinon = require('sinon');
const { expect } = require('chai');
const productModel = require('../../../models/productModel');
const products = require('../../../helpers/productsMock');

discribe('Arquivo Models', () => {
  
  before(() => {
    sinon.stub(productModel, 'listAll').resolves(products);
  });
  
  
  after(() => {
    sinon.restore();
  });

  discribe('listAll', () => {
    it('verifica se é possivel retornar um array de produtos', async () => {
      const res = await productModel.listAll();

      expect(res).to.be.an('array');

      products.forEach((product) => expect(product).to.be.an('object'))
    });

    it('verifica se os objetos retornados pelo array possuem id e nome', () => {
      const res = await productModel.listAll();

      expect(res).to.have.keys['id', 'name'];
    });
  });
});




