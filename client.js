const io = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("message", (msg) => {
    console.log(msg);
})

socket.emit("message", "test");

let secs = 0;

setInterval(() => {
    secs++;
    console.log("Running for " + secs);

    if(secs % 10 === 0)
    {
        socket.emit("message", "test");
    }
}, 1000);