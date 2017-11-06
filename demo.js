/*
var data=[7,3,5,2,3,4,6,9]
data.sort(function abc(a,b){return a-b})
//console.log(data.length/2)
console.log(data)
var med = 0
if(data.length%2==0){
    med=(data[data.length/2-1]+data[data.length/2])/2
}
else{
    med=data[data.length/2-0.5]
}
console.log('median is '+med)
*/
var sales=['Latte','Mocha','Mocha','Americano','Latte','Latte','Latte','Mocha','Capuccino']
console.log(sales)
var total_lat=0
var total_moc=0
var total_ame=0
var total_cap=0
for(i in sales){
    if(sales[i]=='Latte'){total_lat+=1}
    if(sales[i]=='Mocha'){total_moc+=1}
    if(sales[i]=='Americano'){total_ame+=1}
    if(sales[i]=='Capuccino'){total_cap+=1}
}
console.log('Latte sales is '+total_lat)
console.log('Mocha sales is '+total_moc)
console.log('Americano sales is '+total_ame)
console.log('Capuccino sales is '+total_cap)