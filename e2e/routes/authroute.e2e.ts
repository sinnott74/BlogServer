import * as request from "supertest";
import server from "../../dist/core/server";

describe("Auth Route", () => {
  describe("/api/login", () => {
    describe("Incorrect credentials", () => {
      let response: request.Response;
      const wrongCredentials = {
        username: "NotAUser",
        password: "NotAPassword"
      };

      beforeAll(async () => {
        response = await request(server)
          .post("/api/auth/login")
          .send(wrongCredentials);
      });

      it("returns 404 for a get request", () => {
        expect(response.status).toBe(404);
      });

      it("returns text", () => {
        expect(response.header["content-type"]).toEqual(
          "application/json; charset=utf-8"
        );
      });

      it("returns a test saying credentials not found", () => {
        expect(response.text).toEqual(
          '{"name":"RecordNotFoundException","status":404}'
        );
      });
    });
  });
});

// yarn build && ../node_modules/jest/bin/jest.js authroute.e2e.ts
