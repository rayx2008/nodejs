var net = require('net');
var file = require('fs').createWriteStream('./message.txt');
var server = net.createServer();
server.on('connection',
function(socket){
console.log("connection suc");
socket.pipe(file);
socket.on('end',function(){
file.end('fuck');
})
}
);
server.listen(3000,'localhost',function(){
console.log("lis start");
});