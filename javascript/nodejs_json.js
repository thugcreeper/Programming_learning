const http=require('http');//To include the HTTP module, use the require()
const fs=require('fs');//file system module
let person={
    name:"ludada",
    nationality:"unknow",
    age:20,
    live:"true",
    CanSwim:true,
    wtf:[10,20,59,36,55,87,-998],
}
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application/json'});
    res.write("convert js object to JSON\n");
    res.end(JSON.stringify(person));
    
}).listen(8081);
console.log('Server running at http://localhost:8081');//Start your internet browser, and type http://localhost:8081