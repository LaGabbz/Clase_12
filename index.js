const http = require ('http');

const server = http.createServer (function(req,res){
            res.writeHead(200,{'Content-Type': 'text/plain'})
            res.write('jelou')
            res.end()
            })
            server.listen(9000)
