import * as request from "supertest";
import server from "../dist/core/server";

describe("Server", () => {
  it("should respond with a 200 for root", async () => {
    // const response = await request(server).get("/");
    const response = await request(server).get("/api/users");
    expect(response.status).toBe(200);
    // expect(response.header["content-type"]).toEqual("text/html; charset=UTF-8");
    expect(response.header["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(response.header["content-encoding"]).toEqual("gzip");
    // expect(response.header["cache-control"]).toEqual("public, max-age=0");
  });
});
