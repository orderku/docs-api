


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}



 let audio = document.querySelector('#audio')
    function togglePlay() {
  var audio = document.getElementById("audio");
  return audio.paused ? audio.play() : audio.pause();
};
      let url = ['https://b.top4top.io/m_2188ggdpn0.mp3','https://e.top4top.io/m_219596ubr0.mp3','https://f.top4top.io/m_2195p2of61.mp3','https://f.top4top.io/m_21957kiil0.mp3'];

       let urla = ['https://akuari.my.id/iklan-api/merdeka.mp3','https://akuari.my.id/iklan-api/merdeka.mp3']
      audio.src = url[Math.floor(Math.random() * url.length)]


  let x = document.querySelectorAll(".myDIV");
        for (let i = 0, len = x.length; i < len; i++) {
            let num = Number(x[i].innerHTML)
                      .toLocaleString('en');
            x[i].innerHTML = num;
            x[i].classList.add("currSign");
        }


  function getipne(){
              var xhr = new XMLHttpRequest();
              var url = 'https://ipapi.co/json/';
              xhr.onloadend = function(){
             data = JSON.parse(this.responseText);
  document.getElementById("ipne").textContent = data.ip
  document.getElementById("ipid").textContent = data.country_name
    document.getElementById("ipid1").textContent = data.city
    document.getElementById("ipid2").textContent = data.region
    document.getElementById("ipid3").textContent = data.org
              };
              xhr.open("GET", url, true);
              xhr.send();
  }


   setInterval((g) => {
              var xhrd = new XMLHttpRequest();
              var urld = 'https://api.countapi.xyz/get/hint.api.akuari.my.id/94530655-f4fe-42c0-b4aa-665aa0e01467';
              xhrd.onloadend = function(){
             datad = JSON.parse(this.responseText);
  document.getElementById("visitor").textContent = datad.value
              };
              xhrd.open("GET", urld, true);
              xhrd.send();
   




              var xhr = new XMLHttpRequest();
    var birthday = new Date();
var date1 = birthday.getDate();
var date2 = birthday.getMonth();
var date3 = birthday.getFullYear();

              var url = 'https://api.countapi.xyz/get/hint.api.akuari.my.id'+date1+date2+date3;
              xhr.onloadend = function(){
             data = JSON.parse(this.responseText);
  document.getElementById("visitorday").textContent = data.value
              };
              xhr.open("GET", url, true);
              xhr.send();

  var xhrds = new XMLHttpRequest();
              var urlds = 'https://api.akuari.my.id/info/ping';
              xhrds.onloadend = function(){
             datads = JSON.parse(this.responseText);
  document.getElementById("pingkg").textContent = datads.status
                document.getElementById("status").textContent = datads.server
              };
              xhrds.open("GET", urlds, true);
              xhrds.send();
     
 }, 250);

setInterval((ll) => {
       

  var xhrds = new XMLHttpRequest();
              var urlds = 'https://api.akuari.my.id/info/ping';
              xhrds.onloadend = function(){
             datads = JSON.parse(this.responseText);
  document.getElementById("pingkg").textContent = datads.status
                document.getElementById("status").textContent = datads.server
              };
              xhrds.open("GET", urlds, true);
              xhrds.send();
     
 }, 15000);



