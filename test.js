var node = document.createElement("div");
//node.setAttribute("style","text-align: center;color:red");
var myHtml = '<h1>Test 123</h1>\
				<h2 style="color:red">Test 123</h2>\
				<h3>Test 123</h3>';
node.innerHTML = myHtml;
document.getElementById("app").appendChild(node);