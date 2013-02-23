var semver = require('semver')

var browsers = {
}
var database = {}

function load(data, browserMap) {
    Object.keys(browserMap).forEach(function(compatBrowserName) {
        var browserKey = browserMap[compatBrowserName][0]
        if (!browsers[browserKey]) browsers[browserKey] = {}
    })
    
    data.tests.forEach(function(test) {
        var featureName = test.name
        var match = /<a .*>(.+)<\/a>/i.exec(featureName)
        if (match) featureName = match[1]

        if (!database[featureName]) database[featureName] = {}
        
        Object.keys(test.res).forEach(function(browserId) {
            var browser = browserMap[browserId]
            if (!browser) return
            var browserName = browser[0]
            var browserVersion = browser[1]
            
            if (!browsers[browserName]) browsers[browserName] = {}
            if (!browsers[browserName][browserVersion]) browsers[browserName][browserVersion] = {}
            browsers[browserName][browserVersion][featureName] = test.res[browserId]
            
            if (!database[featureName][browserName]) database[featureName][browserName] = {}
            database[featureName][browserName][browserVersion] = test.res[browserId]
        })
    })
}

load(require('es5-compat-table/data-es5'), {
    ie7: ["ie", "~7"],
    ie8: ["ie", "~8"],
    ie9: ["ie", "~9"],
    ie10: ["ie", "~10"],
    firefox3: ["firefox", "~3.0"],
    firefox3_5: ["firefox", "~3.5 || ~3.6"],
    firefox4: ["firefox", ">=4"],
    safari3: ["safari", "~3"],
    safari4: ["safari", "~4"],
    safari5: ["safari", "~5.0"],
    safari51: ["safari", "~5.1"],
    safari6: ["safari", "~6.0"],
    webkit: ["webkit", "~120398"],
    
    chrome5: ["chrome", "~5"],
    chrome6: ["chrome", "~6"],
    chrome7: ["chrome", ">=7 <13"],
    chrome13: ["chrome", ">=13 <19"],
    chrome19: ["chrome", "~19"],
    opera10_10: ["opera", ">=10.10 <10.50"],
    opera10_50: ["opera", ">=10.50 <12"],
    opera12: ["opera", ">=12 <12.10"],
    opera12_10: ["opera", "~12.10"],
    konq43: ["konqueror", ">=4.3 <4.9"],
    konq49: ["konqueror", "~4.9"]
})
load(require('es5-compat-table/data-es6'), {
    ie10: ["ie", "~10"],
    firefox11: ["firefox", ">=11 <13"],
    firefox13: ["firefox", ">=13 <16"],
    firefox16: ["firefox", "~16"],
    firefox17: ["firefox", "~17"],
    firefox18: ["firefox", ">=18"],
    chrome: ["chrome", "~19"],
    safari51: ["safari", ">=5.1 <6"],
    safari6: ["safari", "~6"],
    opera: ["opera", ">12"],
    konq49: ["konqueror", "~4.9"]
})
load(require('es5-compat-table/data-non-standard'), {
    ie7: ["ie", "~7"],
    ie8: ["ie", "~8"],
    ie9: ["ie", "~9"],
    firefox3: ["firefox", "~3.0"],
    firefox3_5: ["firefox", ">=3.5 <4"],
    firefox4: ["firefox", "~4"],
    firefox5: ["firefox", "~5"],
    firefox6: ["firefox", "~6"],
    firefox7: ["firefox", ">=7 <12"],
    firefox12: ["firefox", "~12"],
    safari3: ["safari", "~3"],
    safari4: ["safari", "~4"],
    safari5: ["safari", "~5.0"],
    chrome7: ["chrome", ">=7 <11"],
    opera10_10: ["opera", ">=10.10 <10.50"],
    opera10_50: ["opera", ">=10.50 <12"],
    konq43: ["konqueror", ">=4.3 <4.9"],
    konq49: ["konqueror", "~4.9"]
})

exports = function(browserName, browserVersion) {
    var result = {}
    var browserVersions = browsers[browserName]
    if (browserVersions) 
        Object.keys(browserVersions).forEach(function(versionRange) {
            if (semver.satisfies(browserVersion, versionRange)) {
                var features = browserVersions[versionRange]
                Object.keys(features).forEach(function(feature) {
                    result[feature] = features[feature]
                })
            }
        })
    return result 
}