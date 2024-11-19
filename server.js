import http from "http";
const PORT = 5000;
const server = http.createServer((req, res) => {
  // res.setHeader("content-type", "text/html");
  // res.end("<h1>hello world</h1>");
  try {
    if (req.method === "GET") {
      res.writeHead(200, { "content-type": "text/html" }); // 200 is status code

      if (req.url === "/") {
        res.end("<h1>HOME PAGE</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" }); // 200 is status code

        res.end("<h1>ABOUT PAGE</h1>");
      } else {
        res.writeHead(200, { "content-type": "text/html" }); // 200 is status code

        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new error("method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("server error");
  }
});
server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
