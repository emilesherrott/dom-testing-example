/**
 * @jest-environment jsdom
 */
// Code above sets the environment to be able to access DOM elements


// Requires the functionality from index.js
const { addElement } = require("./index")

beforeEach(()=> {
    jest.resetAllMocks()
})

// Set the test suite
describe("jest-environment jsdom", () => {

    // Set the test
    it("addElement to add p tag when triggered", () => {
        // Assign the DOMParser to variable 'parser'
        const parser = new DOMParser()
        // Create limited HTML and assign to varibale 'dom'
        const dom = parser.parseFromString('<main><button>Click me</button></main>', 'text/html')

        // Sets up a mock (fake version) of the document.querySelector function for testing purposes
            // jest.spyOn(document, 'querySelector') creates a spy 'document.querySelector' function.
            // A spy is testing utility that allows you to keep track of function calls and modify behaviour during tests
            // .mockImplementation(selector => dom.querySelector(selector))
            // dom is a reference to the parsed HTML
        jest.spyOn(document, 'querySelector').mockImplementation(selector => dom.querySelector(selector))

        // Our imported 'addElement()' function is triggered
        addElement()
        // We check the dom
            // The 'dom.body.children[0]' evaluates as 'main'
            // The 'main' has two children after the initial run: 'button' and 'p'
        expect(dom.body.children[0].children[1].tagName.toLowerCase()).toEqual('p')
    })
})