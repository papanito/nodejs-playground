const fs = require('fs'); 
const cache = {}; 

function readFileSynchronous(filename) {
    if(cache[filename]) {
        return cache[filename];
    } else {
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename]
    }
}

function readFileAsynchronous(filename, callback) { 
    if(cache[filename]) { 
        process.nextTick(() => callback(cache[filename] + " (nextTick)")); 
    } else { 
        //asynchronous function 
        fs.readFile(filename, 'utf8', (err, data) => {
        if(err) {
            console.log('>> ' + err); 
        } else { 
            cache[filename] = data; 
            callback(data); 
        }
    }); 
  } 
} 

var sleep = function (time) {
    var startTime = Date.now()
    while (Date.now() <= startTime + time ) 
    {
        //do nothing
    }
}

var consolelog = function (string) {
    console.log(string)
}

var consoleLogWait = function (string, time) {
    console.log(string)
    sleep(time)
}

setTimeout(function() { consolelog("timer 5s has ended") }, 5000)
setTimeout(function() { consolelog("timer 10ms has ended") }, 10)
setImmediate(function() { consolelog("immediate") })

readFileAsynchronous("test.txt", data => console.log(data + " (not cached)"))
console.log(readFileSynchronous("test.txt") + " (1. call)")
readFileAsynchronous("test.txt", data => console.log(data + " (cached)"))
console.log(readFileSynchronous("test.txt") + " (2. call)")

for (let i = 0; i < 4; i++) { 
    consoleLogWait("Synchronous call #" + i + " then wait 100ms", 100)
}