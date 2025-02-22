const http=require('http');//To include the HTTP module, use the require()
const url=require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    let q=url.parse(req.url,true).query;
    let txt=q.year+" "+q.month;
    res.write('First node js'+"<br>");//because content-type is html,\n will not work
    res.write("please type:http://localhost:8080/?year=2024&month=December"+"<br>");
    res.end(txt);
}).listen(8080);
console.log('Server running at http://localhost:8080');//Start your internet browser, and type http://localhost:8080
//status code
//https://restfulapi.net/http-status-codes/

