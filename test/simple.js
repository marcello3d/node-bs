var assert = require('assert')

var browserspec = require('../index.js')

suite('Simple')

test('test browserspec({family:"firefox", version:"3"})', function() {
    var spec = browserspec({family:"firefox", version:"3"})
    assert.ok(spec['Array.prototype.every'])
    assert.ok(spec['Array.prototype.filter'])
    assert.ok(spec['Array.prototype.forEach'])
    assert.ok(spec['Array.prototype.reduce'])
    assert.ok(spec['Date.now'])
})
test('test browserspec({family:"firefox", version:"3"})', function() {
    var spec = browserspec({family:"firefox", version:"3"})
    assert.ok(spec['Array.prototype.every'])
    assert.ok(spec['Array.prototype.filter'])
    assert.ok(spec['Array.prototype.forEach'])
    assert.ok(spec['Array.prototype.reduce'])
    assert.ok(spec['Date.now'])
})

test('test browserspec({family:"safari", version:"5.0.1"})', function() {
    var spec = browserspec({family:"safari", version:"5.0.1"})
    assert.ok(!spec['Function.prototype.bind'])
    assert.ok(spec['Array.prototype.map'])
})

test('test browserspec({family:"safari", major:5, minor:1})', function() {
    var spec = browserspec({family:"safari", major:5, minor:1})
    assert.ok(spec['Function.prototype.bind'])
    assert.ok(spec['Array.prototype.map'])
})

test('test browserspec({family:"ie", version:"7.0"})', function() {
    var spec = browserspec({family:"ie", version:"7.0"})
    assert.ok(!spec['Array.prototype.every'])
    assert.ok(!spec['Array.prototype.filter'])
    assert.ok(!spec['Array.prototype.forEach'])
    assert.ok(!spec['Array.prototype.reduce'])
    assert.ok(!spec['Date.now'])
    assert.ok(!spec['JSON'])
})