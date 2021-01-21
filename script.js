var titel;
var save = document.getElementById("save");

if(save){
	save.addEventListener("click", myFunction);
}

function myFunction() {
name = document.getElementById("titel").value;
window.localStorage.setItem('name', name);
titel = window.localStorage.getItem('name');
window.location.href = "index.html";
}


if(document.getElementById("home")){
	window.onload = function() {
		if(window.localStorage){
			document.getElementById('log').innerHTML = "<p>" + window.localStorage.getItem('name') + "</p>" + "<div class='bar'><div class='progress'></div></div>";
		}
	}
}

if(log = document.getElementById('log')){
	if(log.innerHTML != null){
		document.getElementById('add-info').style.display = "none";
		// document.getElementById('add').style.display = "none";
	}
	else{
		document.getElementById('add-info').style.display = "block";
	}
}

// app.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}