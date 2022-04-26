var expect = require("chai").expect;
var init = require("../bin/functions/init.js");

describe("#parseTask()", function() {
  context("with array containing multiple strings", function() {
    it("should concat them", function() {
      expect(init.parseTasks(["hello", "world"])).to.equal("hello world");
    })
  });
  context("with array containing a single string", function() {
    it("should return the string", function() {
      expect(init.parseTasks(["hello world"])).to.equal("hello world");
    })
  });
  context("with a single string", function() {
    it("should return the string", function() {
      expect(init.parseTasks("hello world")).to.equal("hello world");
    })
  });
  context("with empty array", function() {
    it("should throw error", function() {
      expect(() => init.parseTasks([])).to.throw("Additional arguments expected");
    })
  });
  context("with empty input", function() {
    it("should throw error", function() {
      expect(() => init.parseTasks()).to.throw("Additional arguments expected");
    })
  })

})
