var output = document.getElementById("output");
var oldhash = null;
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
  var repl2 = Array.from(document.getElementsByClassName("nam"));
  for(var i in repl2){
    repl2[i].name = location.hash.split("?")[0] + repl2[i].getAttribute("link");
  }
  if(location.hash.search(/\?/gm) !== -1){
    try{
      document.querySelector('[name="' + location.hash + '"]').scrollIntoView();
    }catch(e){}
  }
}
function FetchData(first){
  if(!first && location.hash.search(/\?/gm) !== -1){
    try{
      document.querySelector('[name="' + location.hash + '"]').scrollIntoView();
    }catch(e){}
    if(oldhash === location.hash.split("?")[0]){
      return;
    }
  }else if(location.hash.search(/\?/gm) === -1){
    scrollTo(0,0);
  }
  oldhash = location.hash.split("?")[0];
  var path = location.hash.split("#")[1];
  if(path === "/" || !path){
    location.hash = "#/welcome";
    return;
  }
  var link = document.querySelector('[href="' + location.hash.split("?")[0] + '"]');
  try{document.title = link.textContent + " | Kahoot API Documentation V2";}catch(e){}
  try{
    document.querySelector(".selected").className = "";
  }catch(e){}
  try{link.className = "selected";}catch(e){}
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
FetchData(true);
