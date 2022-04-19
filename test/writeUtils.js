var expect = require("chai").expect;
var wutils = require("../bin/writeUtils.js");

describe("#parseTask()", function() {
  context("with array containing multiple strings", function() {
    it("should concat them and add a newline", function() {
      expect(wutils.parseTasks(["hello", "world"])).to.equal("hello world\n");
    })
  });
  context("with array containing a single string", function() {
    it("should return the string and add a newline", function() {
      expect(wutils.parseTasks(["hello world"])).to.equal("hello world\n");
    })
  });
  context("with array containing a single string already ending with a newline", function() {
    it("should return the string without adding a newline", function() {
      expect(wutils.parseTasks(["hello world\n"])).to.equal("hello world\n");
    })
  });
  context("with empty array", function() {
    it("should throw error", function() {
      expect(() => wutils.parseTasks([])).to.throw("Additional arguments expected");
    })
  });
  context("with empty input", function() {
    it("should throw error", function() {
      expect(() => wutils.parseTasks()).to.throw("Additional arguments expected");
    })
  })

})
// not an array