import { createServer } from "http";
const PORT = 3000;
const users = [
  { id: 1, name: "vikas saxena" },
  { id: 2, name: "john doe" },
  { id: 3, name: "Lana marks" },
];
const server = createServer((req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    res.setHeader("content-Type", "application/JSON");
    res.write(JSON.stringify(users));
    res.end();
  }
});
server.listen(PORT, () => console.log(`server running at ${PORT}`));
