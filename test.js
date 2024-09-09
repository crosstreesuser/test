let script = document.createElement("script");
script.type = "text/javascript";
script.src = "test1231231232.js";
script.onerror = function(e) {
  alert(e.srcElement.baseURI);
}
document.body.append(script);