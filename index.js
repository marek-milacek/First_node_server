const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                console.error("Error: file does not exist:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Sorry, something went wrong on our server.");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/about") {
        fs.readFile("./about.html", (err, data) => {
            if (err) {
                console.error("Error: file does not exist:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Sorry, something went wrong on our server.");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/contact-me") {
        fs.readFile("./contact-me.html", (err, data) => {
            if (err) {
                console.error("Error: file does not exist:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Sorry, something went wrong on our server.");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else {
        fs.readFile("./404.html", (err, data) => {
            if (err) {
                console.error("Error: 404 file does not exist:", err);
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("<h1>404 - Page Not Found</h1>");
                return;
            }
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data);
        });
    }
});

server.listen(8080);
