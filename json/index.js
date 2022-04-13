
const fs = require("fs");
const bioData = {
    name: "Sudarshan",
    age: 26,
    channel: "Sudarshan Tech",      
}
console.log(bioData.name);
const jsonData = JSON.stringify(bioData);
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(jsonData);
fs.writeFile("json1.json",jsonData, (err) => {
    console.log("done");
})
fs.readFile("json1.json", "utf-8", (err,data) => {
   
    console.log(data);
});