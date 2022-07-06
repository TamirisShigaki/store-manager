const sinon = require('sinon');
const { expect } = require('chai');
const productService = require('../../../services/productService');
const productController = require('../../../controllers/productController');
const { products, product } = require('../../../helpers/productsMock');

describe('Arquivo Controller', () => {
  const res = {};
  const req = {};

  before(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();
  });

  after(() => {
    sinon.restore();
  });

  describe('#listAll', () => {
    before(() => {
      sinon.stub(productService, 'listAll').resolves(products);
    });

    it('verifica se retorna o status 200', async () => {
      await productController.listAll(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se retorna um json com um array de objetos', async () => {
      await productController.listAll(req, res);

      products.forEach((product) => expect(product).to.be.an('object'));
    });

    it('verifica se os objetos retornados pelo array possuem id e nome', async () => {
      await productController.listAll(req, res);

      expect(res.json).to.have.keys[('id', 'name')];
    });
  });

  describe('#getById', () => {
    before(() => {
      req.params = {id: 1}
    });

    it('verifica se retorna o status 200', async () => {
      await productController.getById(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
    });

    it('verifica se retorna um json com um array de objetos e se possui id e name', async () => {
      await productController.getById(req, res);

      expect(res.json).to.have.keys[('id', 'name')];
    });
  });

  // describe('#insertProduct', () => {
  //   before(() => {
  //     req.body = { name: 'ProdutoY' };
  //   });

  //   it('verifica se chama o método status 201', async () => {
  //     await productController.insertProduct(req, res);

  //     expect(res.status.calledWith(201)).to.be.equal(true);
  //   });

  //   it('verifica se retorna um json com um array de objetos e se possui id e name', async () => {
  //     await productController.insertProduct(req, res);

  //     expect(res.json).to.have.keys[('id', 'name')];
  //   });
  // });
});