const request = require("supertest"); 

const auth = require("../server.js"); 

describe("POST/register", () => {
    it("Should return a 500 http status code if something goes wrong with .get() the users", () => {

        return request(auth)
        .post("/api/auth/register")
        .then(response => {
            expect(response.status).toBe(500)
        })
    })
})