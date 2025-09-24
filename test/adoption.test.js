const request = require("supertest");
const mongoose = require("mongoose");
const { expect } = require("chai");
const app = require("../src/app.js");
require("dotenv").config();

const req = request(app);

describe("Adoptions API", function() {
    this.timeout(15000);
    before(async function () {
      // Conexión a MongoDB antes de correr los tests
      await mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
          console.log("Connected to MongoDB for testing");
        })
        .catch((err) => {
          console.error("Error connecting to MongoDB for testing:", err);
        });
    });
  it("debería crear una adopción", async () => {
    const res = req
      .post("/api/adoption")
      .send({
        userId: "68d47ddfd7015f8a9efb74f3",
        petId: "68d47ddfd7015f8a9efb74f8"
      });

    //expect(res.statusCode).to.equal(201);
    //expect(res.body).to.have.property("status", "success");
    //expect(res.body).to.have.property("payload");
  });

  it("debería devolver la adopcion con el id ingresado", async () => {
    const adoptionId = "68c2156ced8925d95283248f";
    const res = await req
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
    const res = await req
    .get("/api/adoption");
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.have.property("payload");
    expect(Array.isArray(res.body.payload)).to.be.true;
  });
});
