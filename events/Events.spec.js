const request = require("supertest"); 

const auth = require("../server.js"); 


describe("POST/events", () => {
    it("Should return a 404 http status code if it was a bad request", () => {
        
        return request(auth)
        .post("/")
        .then(event => {
            expect(event.status).toBe(404)
        })
    })
})

describe("GET/events", () => {
    it("Should return a 404 http status code if it was a bad request", () => {
        
        return request(auth)
        .get("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("PUT/events", () => {
    it("Should return a 404 http status code if it was a bad request", () => {
        
        return request(auth)
        .put("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("DELETE/events", () => {
    it("Should return a 404 http status code if it was a bad request", () => {
        
        return request(auth)
        .delete("/:id")
        .then(response => {
        expect(response.status).toBe(404)
        })
    })
})
