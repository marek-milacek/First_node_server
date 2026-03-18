const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            if (err) {
                console.error("Průšvih, soubor neexistuje:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Omlouvame se, neco se pokazilo na nasem serveru.");
                return;
            }
        });
    } else if (req.url === "/about") {
        fs.readFile("./about.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
            if (err) {
                console.error("Průšvih, soubor neexistuje:", err);
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Omlouvame se, neco se pokazilo na nasem serveru.");
                return;
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Chyba 404: Stranka nenalezena</h1>");
    }
});

server.listen(8080);
