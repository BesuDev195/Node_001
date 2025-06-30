const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(402, { "content-type": "text/plane" }); // this will write a message in console
  res.end("free trial finished ");
});

server.listen(2000, ()=>{
    console.log("server is running on http://localhost:2000/")
})


//todo stops on page 23