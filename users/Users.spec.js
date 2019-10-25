const request = require("supertest"); 

const auth = require("../server.js"); 

describe("GET/users", () => {
    it("Should return a 200 http status code if users is fetched correctly", () => {

        return request(auth)
        .get("/")
        .then(response => {
            expect(response.status).toBe(200)
        })
    })
})

describe("GET/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .get("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("PUT/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .put("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})

describe("DELETE/users", () => {
    it("Should return a 404 http status code if user makes a bad request ", () => {
        
        return request(auth) 
        .delete("/:id")
        .then(response => {
            expect(response.status).toBe(404)
        })
    })
})