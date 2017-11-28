setTimeout(() => {
    console.log('timeout 0');
}, 0);

setImmediate(() => {
    console.log('immediate');
});