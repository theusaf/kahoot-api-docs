(function(){
  var cancelSearch = false;
  var output = document.getElementById("output");
  var oldhash = null;
  // render a state
  function RenderDocument(data){
    cancelSearch = true;
    if(!data){
      return;
    }
    var des;
    if(data.html.search(/\$/) === 0){
      // description set
      des = data.html.match(/^\$.*/i)[0].substr(1);
      data.html = data.html.replace(/^\$.*\n/i,"");
    }
    if(data.html[0] === "<"){
      data.html = "# Could not fetch the document\nThis may be due to a typo or the document has not been created yet."
    }else{
      setTimeout(function(){
        var scripts = output.querySelectorAll("script");
        for(var i = 0;i<scripts.length;i++){
          try{eval(scripts[i].innerHTML)}catch(e){}
        }
      });
    }
    output.innerHTML = marked(data.html);
    document.title = data.title;
    // other metadata
    var url = document.querySelector('[property="og:url"]'),
      title = document.querySelector('[property="og:title"]'),
      title2 = document.querySelector('[name="title"]'),
      desc = document.querySelector('[property="og:description"]'),
      desc2 = document.querySelector('[name="description"]');
    if(location.hash !== "#/welcome" || location.pathname === "/welcome"){
      url.setAttribute("content",location.href);
      title.setAttribute("content",data.title);
      title2.setAttribute("content",data.title);
      desc.setAttribute("content",des || output.innerText);
      desc2.setAttribute("content",des || output.innerText);
    }
    var code = Array.from(output.querySelectorAll("pre code"));
    for(var i in code){
      hljs.highlightBlock(code[i]);
    }
    var repl = Array.from(document.querySelectorAll(".nav,.nam"));
    for(var i in repl){
      repl[i].href = location.hash.split("?")[0] + repl[i].getAttribute("link");
    }
    var repl2 = Array.from(document.getElementsByClassName("nam"));
    for(var i in repl2){
      repl2[i].name = location.hash.split("?")[0] + repl2[i].getAttribute("link");
    }
    if(location.hash.search(/\?/gm) !== -1 || location.search){
      var str = location.search || location.hash; // prefer search over hash
      setTimeout(function(){
        try{document.querySelector('[name="' + str + '"]').scrollIntoView();}catch(e){}
      });
    }
  }
  function FetchData(first,newloc){
    // newloc should be the URL to go to.
    if(!newloc){newloc = location;}
    if("History" in window){
      // redirect
      if((location || newloc).search.search("/") !== -1){ // probably has a path
        output.innerHTML = '<div id="prep">\
          <div style="flex: 1;">\
            <img src="/loading.svg" alt="Loading... Please wait">\
          </div>\
        </div>';
        var split = location.search.split("/"),
          search = split[0],
          path = "/" + split.slice(1).join("/").split("#")[0];
        // begin fetching data
        var link = document.querySelector('[href="' + path + '"]');
        try{document.title = link.textContent + " | Kahoot API Documentation V2";}catch(e){}
        try{document.querySelector(".selected").className = "";}catch(e){}
        try{link.className = "selected";}catch(e){}
        if(path === "/" || path === "/search" || !path){path = "/welcome";}
        var x = new XMLHttpRequest();
        x.open("GET","/docs" + path + ".md");
        x.send();
        x.onload = function(){
          if(search === "?" || !search){
            search = "";
          }
          // replace/push state
          var data = {
            title: document.title,
            html: x.response
          };
          if(first){
            history.replaceState(data,document.title,path + search);
            RenderDocument(data);
          }else{
            history.pushState(data,document.title,path + search);
            RenderDocument(data);
          }
          oldhash = location.pathname;
        }
      }else{ // probably History api path
        if(location.hash.search("/") !== -1){
          // probably an old link
          newloc = new URL(location.protocol + "//" + location.host + location.hash.split("#")[1]);
        }
        var path = (newloc || location).pathname,
          search = (newloc || location).search
        try{document.querySelector('[name="' + search + '"]').scrollIntoView();}catch(e){}
        if(!first && oldhash === path){
          history.replaceState(history.state,document.title,newloc.href || location.href);
          return;
        }
        var link = document.querySelector('[href="' + path + '"]');
        try{document.title = link.textContent + " | Kahoot API Documentation V2";}catch(e){}
        try{document.querySelector(".selected").className = "";}catch(e){}
        try{link.className = "selected";}catch(e){}
        if(path === "/" || path === "/search" || !path){path = "/welcome";}
        var x = new XMLHttpRequest();
        x.open("GET","/docs" + path + ".md");
        x.send();
        x.onload = function(){
          if(search === "?" || !search){
            search = "";
          }
          // replace/push state
          var data = {
            title: document.title,
            html: x.response
          };
          if(first){
            history.replaceState(data,document.title,path + search);
            RenderDocument(data);
          }else{
            history.pushState(data,document.title,path + search);
            RenderDocument(data);
          }
          oldhash = location.pathname;
        }
      }
      if(!(newloc || location).search){
        scrollTo(0,0);
      }
      return;
    }
    if(!first && location.hash.search(/\?/gm) !== -1){
      try{document.querySelector('[name="' + location.hash + '"]').scrollIntoView();}catch(e){}
      if(oldhash === location.hash.split("?")[0]){
        return;
      }
    }else if(location.hash.search(/\?/gm) === -1){
      scrollTo(0,0);
    }
    if(location.hash === "#/search"){
      if(first){
        location.hash = "#";
      }
      var search = document.getElementById("search");
      output.innerHTML = '<div id="prep">\
        <div style="flex: 1;">\
          <img src="loading.svg" alt="Loading... Please wait">\
        </div>\
      </div>';
      // begin searching
      var files = Array.from(document.getElementById("selection").querySelectorAll("a"));
      cancelSearch = false;
      Search(files,search.value);
      return;
    }
    output.innerHTML = '<div id="prep">\
      <div style="flex: 1;">\
        <img src="/loading.svg" alt="Loading... Please wait">\
      </div>\
    </div>';
    cancelSearch = true;
    oldhash = location.hash.split("?")[0];
    var path = location.hash.split("#")[1];
    if(path === "/" || !path){
      location.hash = "#/welcome";
      return;
    }
    var link = document.querySelector('[href="' + location.hash.split("?")[0].substr(1) + '"]');
    try{document.title = link.textContent + " | Kahoot API Documentation V2";}catch(e){}
    try{document.querySelector(".selected").className = "";}catch(e){}
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
  if(!("History" in window)){
    window.addEventListener("hashchange",function(event){
      event.preventDefault();
      FetchData();
    });
  }else{
    window.addEventListener("popstate",function(event){
      if(event.state.isSearch){
        output.innerHTML = event.state.data;
        document.title = event.state.title;
      }else{
        RenderDocument(event.state);
      }
      oldhash = location.pathname;
    });
    window.addEventListener("click",function(event){
      var target = event.target;
      var nodenames = [];
      var nodes = [];
      while(target){
        nodenames.unshift(target.nodeName);
        nodes.unshift(target);
        target = target.parentNode;
      }
      var linkIndex = nodenames.indexOf("A");
      if(linkIndex !== -1){
        var href = nodes[linkIndex].href;
        var url = new URL(href);
        if(url.host === location.host){
          event.preventDefault();
        }else{
          return;
        }
        if(!("History" in window)){
          location.hash = "#" + url.pathname;
          return;
        }
        FetchData(false,url);
      }
    });
  }
  FetchData(true);
  var mobiToggle = document.getElementById("mobi-menu-toggle");
  var mobiToggleIn = document.getElementById("mobile-menu");
  mobiToggle.addEventListener("click",function(){
    if(!mobiToggleIn.checked){
      mobiToggle.className = "mobileonly close";
    }else{
      mobiToggle.className = "mobile-dark mobileonly";
    }
  });
  if(localStorage.EnableLightMode){
    document.documentElement.className = "light";
  }
  var darkSwitch = document.getElementById("dark-mode-switch");
  function toggleDark(){
    if(localStorage.EnableLightMode){
      delete localStorage.EnableLightMode;
      document.documentElement.className = "";
    }else{
      localStorage.EnableLightMode = true;
      document.documentElement.className = "light";
    }
  }
  darkSwitch.addEventListener("click",toggleDark);
  darkSwitch.addEventListener("keydown",function(e){
    if((e.code && (e.code === "Enter" || e.code === "Space")) || e.keyCode === 13 || e.keyCode === 32){
      e.preventDefault();
      toggleDark();
    }
  });
  var search = document.getElementById("search");
  search.addEventListener("keydown",function(e){
    if((e.code && e.code === "Enter") || (e.keyCode === 13)){
      document.title = "Search results for '" + search.value + "'";
      if("History" in window){
        history.pushState({
          title: document.title,
          data: "",
          isSearch: true
        },document.title,"/search");
      }else{
        location.hash = "#/search";
      }
      output.innerHTML = '<div id="prep">\
        <div style="flex: 1;">\
          <img src="/loading.svg" alt="Loading... Please wait">\
        </div>\
      </div>';
      // begin searching
      var files = Array.from(document.getElementById("selection").querySelectorAll("a"));
      cancelSearch = false;
      Search(files,search.value);
    }
  });
  function AddSearch(file){
    if(output.querySelector("#prep")){
      output.innerHTML = "";
    }
    console.log(file)
    var link = document.createElement("div");
    link.innerHTML = '<a class="search" href="'+ file.href +'">'+ file.textContent +'</a>';
    output.appendChild(link);
  }
  function Search(files,term){
    var file = files[0];
    var url = new URL(file.href);
    var x = new XMLHttpRequest;
    x.open("GET","/docs" + url.pathname + ".md");
    x.send();
    x.onerror = function(){
      if(cancelSearch || files.length === 1){
        return cancelSearch = false;
      }
      Search(files.slice(1),term);
    }
    x.onload = function(){
      if(file.textContent.toLowerCase().search(term.toLowerCase()) !== -1){
        AddSearch(file);
      }else{
        var rchunk = x.response.split(" ");
        var tchunk = term.split(" ");
        var done = false;
        for(var i = 0;(i<tchunk.length && !done);i++){
          for(var j = 0;j<rchunk.length;j++){
            if(tchunk.length === 1 ? rchunk[j].toLowerCase().search(tchunk[i].toLowerCase()) !== -1 : rchunk[j].toLowerCase() === tchunk[i].toLowerCase()){
              AddSearch(file);
              done = true;
              break;
            }
          }
          if(!done && tchunk.length > 1){
            break;
          }
        }
      }
      if(cancelSearch || files.length === 1){
        if(output.querySelector("#prep")){
          output.innerHTML = "No results found.";
          if("History" in window){
            history.replaceState({
              title: document.title,
              data: "No results found.",
              isSearch: true
            },document.title,"/search");
          }
        }else{
          if("History" in window){
            history.replaceState({
              title: document.title,
              data: output.innerHTML,
              isSearch: true
            },document.title,"/search");
          }
        }
        return cancelSearch = false;
      }
      Search(files.slice(1),term);
    };
  }
})();
