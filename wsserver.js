var WebSocket = require('ws');

let ws = new WebSocket('ws://api.larik.tech/ws', null, {
    handshakeTimeout: 86400
});

ws.on('open', () => {
    console.log("Connected to server");
});

ws.on("message", (data) => {
    console.log(data);
});

ws.on("error", (err) => {
    console.log(err);
});

ws.on("close", (code, reason) => {
    console.log(code, ",", reason);
});

let secs = 0;

setInterval(() => {
    console.log("Running for " + secs);
    secs++;

    // if(secs%5 === 0)
    // {
    //     ws.send("test");
    // }
}, 1000);
