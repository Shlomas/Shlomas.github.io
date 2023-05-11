function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const value = Object.fromEntries(data.entries());
//  const value = data.get('email');
  var ws=new WebSocket("ws://localhost:8082");
  ws.onopen = () => ws.send(JSON.stringify(value));
  //console.log({ value });
  var jsonTextElement = document.getElementById('jsonText');
  jsonTextElement.value=JSON.stringify(value);


}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);


function generateJson(evt, form) {

}