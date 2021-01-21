var titel;
var save = document.getElementById("save");
var data;


if(save){
	save.addEventListener("click", myFunction);
}

function myFunction() {
	var data = window.localStorage.getItem('data');
	var data = data + " " + document.getElementById("titel").value;
	window.localStorage.setItem('data', data);
	window.location.href = "index.html";
}



if(document.getElementById("home")){
	window.onload = function() {
		if(window.localStorage){
			var i = 0;
			while (i < 100) {
			  const words =  window.localStorage.getItem('data').split(' ');
			  document.getElementById('log').innerHTML += "<p>" + (words[i]) + "</p>" + "<div class='bar'><div class='progress'></div></div>";
			  	i++;

			  	if ((words[i]) == undefined){
			  		i = 9999;
			  	}
			}
			
		}
	}
}

