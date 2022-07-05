const sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');
const products = require('../../../helpers/productsMock');

discribe('Arquivo Controller', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(productService, 'listAll').resolves(products);
  });

  after(() => {
    sinon.restore();
  });

  discribe('listAll', () => {
    it('verifica se retorna o status 200', async () => {
      await productController.listAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se retorna um json com um array de objetos', async () => {
      await productController.listAll(req, res);

      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('verifica se retorna um json com um array de objetos', async () => {
      await productController.listAll(req, res);

      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('verifica se os objetos retornados pelo array possuem id e nome', () => {
      await productController.listAll(req, res);

      expect(res.json).to.have.keys[('id', 'name')];
    });
  });
});