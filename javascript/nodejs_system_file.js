const http=require('http');//To include the HTTP module, use the require()
const fs=require('fs');//file system module

http.createServer(function(req,res){
    fs.readFile('../html/list.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});    
        res.write("please type:http://localhost:8081"+"<br>");//because content-type is html,\n will not work
        res.write(data);
        return res.end();
    })
    
}).listen(8081);
console.log('Server running at http://localhost:8081');//Start your internet browser, and type http://localhost:8081