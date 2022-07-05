const sinon = require("sinon");
const productService = require("../../../services/productService");
const productModel = require("../../../models/productModel");
const { expect, use } = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { products, product } = require("../../../helpers/productsMock");

use(chaiAsPromised);

describe("Arquivo Services", () => {
  after(() => {
    sinon.restore();
  });

  describe("#listAll", () => {
    it("verifica se é possível retornar um array de objetos se houver produtos", async () => {
      sinon.stub(productModel, "listAll").resolves(products);

      const res = await productService.listAll();

      expect(res).to.be.an("array");

      products.forEach((product) => expect(product).to.be.an("object"));
    });
  });
  

 describe('#getById', () => {
    it('verifica se os objetos retornados pelo array possuem id e nome', async () => {
      sinon.stub(productModel, "getById").resolves(product);

      const res = await productService.getById(1);

      products.forEach((product) => expect(product).to.be.an("object"));

      expect(res).to.have.keys['id', 'name'];
    });
  });
});
