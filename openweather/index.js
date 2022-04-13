const http = require('http');
const fs = require('fs');
var requests = require('requests');
const homeFile = fs.readFileSync('home.html'   ,"utf-8")
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{% tempval %}", orgVal.main.temp);
    // console.log(temperature);
    temperature = temperature.replace("{% tempmin %}",orgVal.main.temp_min);
      temperature = temperature.replace("{% tempmax %}",orgVal.main.temp_max);
    temperature = temperature.replace("{% location %}", orgVal.name);
      temperature = temperature.replace("{% country %}", orgVal.sys.country);
     return temperature;  
}
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        requests("https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=e8d8631eb95c8c3c6e9868de31ecf434" ).on("data",   (chunk)=> {
           
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            const realTimeData = arrData.map((val) =>  
                replaceVal(homeFile,val)
              ).join("");
            // console.log(realTimeData);
             res.write(realTimeData);
        }).on("end",   (err)=> {
            if (err) return console.log("connection clonse");
            // console.log("end");
            res.end();    
        })
    }
});
server.listen(8000,'127.0.0.1')