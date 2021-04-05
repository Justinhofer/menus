var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"Justin"
  },
  {name:"Interact",
  content:"Counter"
  },
]



for(var i=0; i<pages.length; i++){
  var eleName= document.createElement("h1");
  var eleabout= document.createElement("h3");
  eleName.innerHTML= pages[i].name
  eleabout.innerHTML=pages[i].content;
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="about"){
    display.innerHTML=wd;
  }else{
    aboutPage()
  }
  
}

function interactPage(){
  var header= document.createElement("h1");
  header.innerHTML="button";
  display.appendChild(header);
  
}

function aboutPage(){
  header.innerHTML="Button";
  display.appendChild(header);
}

contentWrite(pages[0].content, "Home");