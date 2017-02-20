window.onload = function(){

  var menu = document.getElementById("responsive-menu");
  var menuList = document.getElementById("menu");
  menu.addEventListener("click", function(){
    if(menu.getAttribute("toggle") != "on"){
      menu.setAttribute("toggle", "on");
      menuList.style.display = "inline-block";
    }
    else {
      menu.setAttribute("toggle", "off");
      menuList.style.display = "none";
    }
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth >= 600 ) {
      menuList.style.display = "inline-block";
    }
    else {
      menuList.style.display = "none";
      menu.setAttribute("toggle", "off");
    }
  });

};
