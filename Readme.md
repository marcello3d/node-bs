Browser spec [![Build Status](https://travis-ci.org/marcello3d/node-bs.png)](https://travis-ci.org/marcello3d/node-bs)
=================

Browser spec statically defines features for a given browser so you can make 

Notes
-----

This is intended for use with [node-shimmy](https://github.com/marcello3d/node-shimmy), and not really a standalone 
module.

Usage / Examples
----------------

Browserspec takes an options object with a `family` and either a `version` string or trio of `major`, `minor`, and 
`patch`:

```js
var browserspec = require('bs')

var spec = browserspec({ family:'Firefox', version: '3.6' })
spec['Array.prototype.forEach'] // true

var spec2 = browserspec({ family:'IE', major:7, minor:0 })
spec2['Array.prototype.forEach'] // false
```

This makes it easily compatible with the [useragent](https://github.com/3rd-Eden/useragent) module:
```js
var browserspec = require('bs')
var useragent = require('useragent')

var spec = browserspec(useragent.parse( useragent ))

```

License
-------
Open source software under the [zlib license](LICENSE).