const sinon = require('sinon');
const { expect, use } = require('chai');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');
const { products, product } = require('../../../helpers/productsMock');
const chaiAsPromised = require("chai-as-promised");

use(chaiAsPromised);

discribe('Arquivo Services', () => {
  
  after(() => {
    sinon.restore();
  });

  discribe('#listAll', () => {
    it('verifica se é possivel retornar um array de objetos se houver produtos', async () => {
      sinon.stub(productModel, 'listAll').resolves(products);

      const res = await productService.listAll();

      expect(res).to.be.an('array');

      products.forEach((product) => expect(product).to.be.an('object'));
    });
  });

  describe('#getById', () => {
  it('verifica se os objetos retornados pelo array possuem id e nome', async () => {
    sinon.stub(productModel, 'getById').resolves(product);

    const res = await productService.getById(1);

    expect(res).to.be.an('object');

    expect(res).to.have.keys[('id', 'name')];
  });

  it('verifica se não houver produto retorna uma exceção', async () => {
    sinon.stub(productModel, 'getById').resolves(false);
    
    expect(productService.getById(200).to.be.rejectedWith({ message: 'Product not found' }))
  });
});

});
