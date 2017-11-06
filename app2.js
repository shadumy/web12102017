var express=require('express')
var server=express()
server.listen(3000)

server.get('/test', showTest)       //เข้าโดยการ localhost:3000/test
server.get('/number', showNumber)   //เข้าโดยการ localhost:3000/number
server.get('/status',showStatus)    // localhost:3000/status
server.get('/area',showArea)        // localhost:3000/area?radius=5
server.get('/total',showTotal)      // localhost:3000/total?price=400

function showTest(request,response){
        response.send('Welcome to Express')
}

function showNumber(req, res){
    res.send([3,8,1,9,11])
}

function showStatus(req, res){
    res.send({status:'ok'})
}

function showArea(req,res){ //คำนวณพื้นที่เมื่อส่งรัศมีวงกลม
    var r=req.query.radius
    var a=Math.PI*r**2 // ** is เลขยกกำลัง
    res.send('Area is ' + a)
}

function showTotal(req,res){ //คำนวณราคารวมภาษีเมื่อส่งราคา
    var p=req.query.price
    var t=p*1.07
    res.send('Total including VAT 7% is ' + t)
}


var area=['Bangrak','Dusit','Bangplad']
var code=['10500','10300','10700']
// localhost:3000/search?city=Bangrak

server.get('/search',showCode)
function showCode(req,res){
    var city=req.query.city
    var codec='not found'
    for(var i in area){
        if(city==area[i]){
            codec=code[i]
        }
    }
    res.send(city+"'s postal code is "+codec)
}