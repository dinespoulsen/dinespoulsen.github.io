window.onload = function(){

  var menu = document.getElementById("responsive-menu");
  var menuList = document.getElementById("menu");
  var profile = document.getElementById("profile-holder");
  var fadingIns = document.getElementsByClassName("fade-in");

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

  profile.addEventListener("touchstart", function(){
    profile.style.backgroundImage = "url('./public/profile-front.jpg')";
  });

  profile.addEventListener("touchmove", function(){
    profile.style.backgroundImage = "url('./public/profile-front.jpg')";
  });

  profile.addEventListener("touchend", function(){
    profile.style.backgroundImage = "url('./public/profile.png')";
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

  window.addEventListener("scroll", function(){
    for ( var i = 0; i < fadingIns.length; i += 1)
    if(window.innerHeight + window.scrollY >= fadingIns[i].offsetTop - 5) {
      fadingIns[i].classList.remove('is-paused')
    }

  });

};
