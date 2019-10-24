const request = require("supertest"); 

const auth = require("../server.js"); 

describe("GET/users", () => {
    it("Should return a 500 http status code if something goes wrong with .get() the users", () => {

        return request(auth)
        .post("/api/users")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("GET/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .post("/api/users/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("PUT/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .post("/api/users/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("DELETE/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .post("/api/users/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})