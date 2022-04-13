const fs = require("fs");
const http = require("http");
const server = http.createServer((req, resp) => {
 const data=   fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8"); 
    if (req.url == '/') {
      resp.end("Hello from the other sides"); 
    }
    else if (req.url == "/about") {
        resp.end("Hello from about");
       
    } else if (req.url == "/contact") {
        resp.write("Hello from contact us sides");;
        resp.end( );
       
    } else if (req.url == "/userApi") {
        // fs.readFile(`${__dirname}/userapi/userapi.json`, "utf-8", (err, data) => {
            const objData = JSON.parse(data);
            resp.writeHead(200,{"content-type":"application/json"})
            resp.end(objData[0].name);
            // console.log(data);
        // })
        // resp.write("Hello from UserApi sides");;
        // resp.end( );
       
    } else {
        resp.writeHead(404,{"Content-type":"text/html"});
        resp.end("<h1>404 error .Page does not exist. ")
    }
    // console.log(req.url);
   
});
server.listen(8000, "127.0.0.1",()=> {
    console.log('listening to port 8000') ;
});
