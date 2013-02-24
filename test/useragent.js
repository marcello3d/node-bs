var assert = require('assert')
var useragent = require('useragent')

var browserspec = require('../index.js')

suite('browserspace + useragent tests')

test('browserspec(useragent.parse("Mozilla/5.0 (X11; U; Linux i686; zh-CN; rv:1.9.2.8) Gecko/20100722 Ubuntu/10.04 (lucid) Firefox/3.6.8"))', function() {
    var spec = browserspec(useragent.parse("Mozilla/5.0 (X11; U; Linux i686; zh-CN; rv:1.9.2.8) Gecko/20100722 Ubuntu/10.04 (lucid) Firefox/3.6.8"))
    assert.ok(spec['Array.prototype.every'])
    assert.ok(spec['Array.prototype.filter'])
    assert.ok(spec['Array.prototype.forEach'])
    assert.ok(spec['Array.prototype.reduce'])
    assert.ok(spec['Date.now'])
})
test('test browserspec(useragent.parse("Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.5.24 Version/10.53"))', function() {
    var spec = browserspec(useragent.parse("Opera/9.80 (Windows NT 5.1; U; ru) Presto/2.5.24 Version/10.53"))
    assert.ok(spec['Array.prototype.every'])
    assert.ok(spec['Array.prototype.filter'])
    assert.ok(spec['Array.prototype.forEach'])
    assert.ok(spec['Array.prototype.reduce'])
    assert.ok(spec['Date.now'])
})

test('test browserspec(useragent.parse("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; en-us) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5"))', function() {
    var spec = browserspec(useragent.parse("Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; en-us) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5"))
    assert.ok(!spec['Function.prototype.bind'])
    assert.ok(spec['Array.prototype.map'])
})

test('test browserspec(useragent.parse("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 1.0.3705)"))', function() {
    var spec = browserspec(useragent.parse("Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 1.0.3705)"))
    assert.ok(!spec['Array.prototype.every'])
    assert.ok(!spec['Array.prototype.filter'])
    assert.ok(!spec['Array.prototype.forEach'])
    assert.ok(!spec['Array.prototype.reduce'])
    assert.ok(!spec['Date.now'])
    assert.ok(spec['JSON'])
})