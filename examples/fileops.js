const fs = require('fs'); 
const cache = {}; 
function readFileSynchronous(filename) {
    if(cache[filename]) {
        return cache[filename];
    } else {
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename];
    }
}

readFileSynchronous("LICENSE")