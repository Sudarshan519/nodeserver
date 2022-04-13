const fs =require('fs');
// fs.mkdir("sudarshan",(err)=>{console.log("Folder created");})
// fs.writeFile('./sudarshan/bio.txt',"My name is Sudarshan",(err)=>{
//     console.log("Bio created");
// });

fs.appendFile('./sudarshan/bio.txt',"I like coding.",(err)=>{
    console.log("Bio created");
});