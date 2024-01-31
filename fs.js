const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const log = `${Date.now}: ${req.url}    new request recieved \n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        switch(req.url){
            case '/':
                res.end("Homepage");
                break
            case '/about':
                res.end("about page opened");
            default:
                res.end("404, error not found");
        }
});
server.listen(8000,() => console.log("server started"));
