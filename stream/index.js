const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request", (req, resp) => {
    
    ///first method
    // fs.readFile("input.txt", function (err, data) {
    //     if (err) return console.error(err);
    //     console.log(data.toString());
    //     resp.end(data.toString());
    // })
    const rstream = fs.createReadStream("input.txt");
  
  //second method
    // rstream.on("data", (chunkdata)=>{
    //     resp.write(chunkdata);
        
    // })
    // rstream.on('end', () => {
    //     resp.end();
    // })
    // rstream.on("error", (err) => {
    //     console.log(err);

    //     resp.end("File not found");
    // })
//third way
    rstream.pipe(resp);
})
server.listen(8000, "127.0.0.1");