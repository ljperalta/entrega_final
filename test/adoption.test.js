const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app.js");

describe("Adoptions API", () => {
  it("debería crear una adopción", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({
        userId: "64f8c7d6e13e2b45a9c12345",
        petId: "64f8c8f0e13e2b45a9c67890"
      });

    expect(res.statusCode).to.equal(201);
    expect(res.body).to.have.property("status", "success");
    expect(res.body).to.have.property("payload");
  });

  it("debería devolver la adopcion con el id ingresado", async () => {
    const adoptionId = "68c2156ced8925d95283248f";
    const res = await request(app)
    .get(`/api/adoption/${adoptionId}`);
    if (res.statusCode === 404) {
      expect(res.body).to.have.property("error", "Adoption not found");
    } else {
      expect(res.statusCode).to.equal(200);
      expect(res.body).to.have.property("payload");
      expect(res.body.payload).to.be.an("object");
      expect(res.body.payload).to.have.property("_id").that.equals(adoptionId);
    }
  });

  it("debería obtener todas las adopciones", async () => {
    const res = await request(app)
    .get("/api/adoption");
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("payload");
    expect(Array.isArray(res.body.payload)).to.be.true;
  });
});
