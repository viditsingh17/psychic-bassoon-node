const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home");
  } else if (req.url === "/about") {
    res.end("about");
  } else if (req.url === "/contact") {
    res.end("contact");
  } else {
    res.end("Error 404 page not found");
  }
});

server.listen(5000);
