var output = document.getElementById("output");
// render a state
function RenderDocument(data){
  if(!data){
    return;
  }
  output.innerHTML = marked(data.html);
  document.title = data.title;
  var code = Array.from(output.querySelectorAll("pre code"));
  for(var i in code){
    hljs.highlightBlock(code[i]);
  }
  var repl = Array.from(document.getElementsByClassName("nav"));
  for(var i in repl){
    repl[i].href = location.hash.split("?")[0] + repl[i].getAttribute("link");
  }
}
function FetchData(first){
  if(!first && location.hash.search(/\?/gm) !== -1){
    return;
  }
  var path = location.hash.split("#")[1];
  if(path === "/" || !path){
    location.hash = "#/welcome";
    return;
  }
  var link = document.querySelector('[href="' + location.hash.split("?")[0] + '"]');
  document.title = link.textContent + " | Kahoot API Documentation V2";
  document.querySelector(".selected").className = "";
  link.className = "selected";
  var x = new XMLHttpRequest();
  x.open("GET","docs" + path.split("?")[0] + ".md");
  x.send();
  x.onload = function(){
    RenderDocument({
      title: document.title,
      html: x.response
    });
  }
}
window.addEventListener("hashchange",function(event){
  event.preventDefault();
  FetchData();
});
window.addEventListener("load",function(){
  FetchData(true);
});
