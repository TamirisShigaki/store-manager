const sinon = require("sinon");
const { expect } = require("chai");
const productModel = require("../../../models/productModel");
const { products, product } = require("../../../helpers/productsMock");
const connection = require("../../../models/connection");

describe("Arquivo Models", () => {
  after(() => {
    sinon.restore();
  });

  describe("#listAll", () => {
    sinon.stub(productModel, "listAll").resolves(products);

    it("verifica se é possivel retornar um array de produtos", async () => {
      const res = await productModel.listAll();

      expect(res).to.be.an("array");

      products.forEach((product) => expect(product).to.be.an("object"));
    });

    it("verifica se os objetos retornados pelo array possuem id e nome", async () => {
      const res = await productModel.listAll();

      expect(res).to.have.keys[("id", "name")];
    });
  });

  describe("#getById", () => {
    sinon.stub(connection, "execute").resolves(product);

    it("verifica se os objetos retornados pelo array possuem id e nome", async () => {
      const res = await productModel.getById(1);

      expect(res).to.be.an("object");

      expect(res).to.have.keys[("id", "name")];
    });
  });
});
