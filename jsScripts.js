function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function sectionToShow(i) {
  document.getElementById("main.about").style.display= "block";
}

function changeTab(evt, cityName) {
  var i, tabcontent, tablinks,tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablink = document.getElementById(cityName+' tab');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabcontent = document.getElementsByClassName("tabcontent1");
  tablink = document.getElementById(cityName+' tab');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  tablink.className+=" active"
  //evt.currentTarget.className += " active";
}