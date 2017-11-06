var http=require('http')
var server=http.createServer(show)
server.listen(2002)

//request คือข้อมูลจาก browser ไป server
//respond คือข้อมูลจาก server ไป browser

function show(request, response){
    response.writeHead(200,{'Content-type': 'text/html'})
    response.write('<i>Welcome to uCoffee</i>')
    response.end()
}