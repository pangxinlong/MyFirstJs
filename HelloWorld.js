http = require("http");  
http.createServer(function(request, response) {  
    response.writeHead(200, {"Content-Type": "text/html"});  
    response.write("<html>"
+"<body>"
+"<meta http-equiv='Content-Type' content='text/html;charset=utf-8'>"
+"<h1 style='text-align: center'><b>HTML</b></h1>"
+"<div id='playercontainer'></div>"
+"<script type='text/javascript'"
+"src='http://cybertran.baidu.com/cloud/media/assets/cyberplayer/1.0"
+"/cyberplayer.min.js'></script>"
+"<script type='text/javascript'>"
+"var player = cyberplayer('playercontainer').setup({"
+"width : 680,"
+"height : 400,"
+"backcolor : '#FFFFFF',"
+"stretching : 'uniform',"
+"file : 'http://bcs.duapp.com/pangxinlong/media/S6S8002MR.mp4',"
+"image : 'http://www.example.com/image/name/snap.jpg',"
+"autoStart : true,"
+"repeat : 'always',"
+"volume : 100,"
+"controlbar : 'top',"
+"ak:'vPRI2OYEZVunFrD9',"
+"sk:'x43W4OQI5bkA2yDd'"
+"});"
+"</script>"
+"    <!--播放器代码结束-->"
+"</div>"
+"</body>"
+"</html>");
    response.end();  
}).listen(8083);
var sys = require("sys");
sys.puts("My first Node.js code."); 
sys.puts("Server running at http://localhost:8083/"); 
