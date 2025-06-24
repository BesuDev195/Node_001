const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(402, { "content-type": "text/plane" });
  res.end("free trial finished ");
});

server.listen(2000, ()=>{
    console.log("server is running on http://localhost:2000/")
})