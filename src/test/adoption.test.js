const request = require("supertest");
const app = require("../app");

describe("Adoptions API", () => {
  it("debería crear una adopción", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({
        userId: "64f8c7d6e13e2b45a9c12345",
        petId: "64f8c8f0e13e2b45a9c67890"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("payload");
  });

  it("debería obtener todas las adopciones", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("payload");
    expect(Array.isArray(res.body.payload)).toBe(true);
  });
});
