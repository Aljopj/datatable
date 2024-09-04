const http = require("http");
const fs = require("fs");
const url = require("url");
const app=http.createServer((req,res)=>{
    const path=url.parse(req.url);
    console.log(req.method);
    console.log(path);
    if(path.pathname=="/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fs.readFileSync("../client/index.html"));
    }
    else  if(path.pathname=="/css/index.css"){
        res.writeHead(200,{"Content-Type":"text/css"});
        res.end(fs.readFileSync("../client/css/index.css"));
    }
    else  if(path.pathname=="/js/custom.js"){
        res.writeHead(200,{"Content-Type":"text/js"});
        res.end(fs.readFileSync("../client/js/custom.js"));
    }
    if(req.method == "post" && path.pathname == "/submit"){
        let body=""
        req.on("data",(hello)=>{
            console.log(hello);
            body +=hello.tostring();
            console.log(body);
        });
    }

})
app.listen(3000)