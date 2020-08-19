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
}
function FetchData(){
  var path = location.hash.split("#")[1];
  if(path === "/" || !path){
    location.hash = "#/welcome";
    return;
  }
  var link = document.querySelector('[href="' + location.hash + '"]');
  document.title = link.textContent + " | Kahoot API Documentation V2";
  document.querySelector(".selected").className = "";
  link.className = "selected";
  var x = new XMLHttpRequest();
  x.open("GET","docs" + path + ".md");
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
  FetchData();
});
