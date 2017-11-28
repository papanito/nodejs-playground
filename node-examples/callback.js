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

var consolelogsleep = function (string, time) {
    console.log(string)
    sleep(time)
}

setTimeout(function() { consolelog("timer 5s has ended") }, 5000)
setTimeout(function() { consolelog("timer 10ms has ended") }, 10)
setImmediate(function() { consolelog("immediate") })
for (i = 0; i < 4; i++) { 
    consolelogsleep("Synchronous call #" + i + " then wait 100ms", 100)
}