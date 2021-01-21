var save = document.getElementById("save");
var clear = document.getElementById("clear");
var data;

if(clear){
	clear.addEventListener("click", clearfuntion);
}

var testObject = { 'one': 1, 'two': 2, 'three': 3 };
console.log(testObject['two']);

function clearfuntion() {
localStorage.clear();
}


if(save){
	save.addEventListener("click", myFunction);
}

function myFunction() {
	data = window.localStorage.getItem('data');
	data = data + "," + document.getElementById("titel").value + "^" + document.getElementById("goal").value  + "^" + document.getElementById("amount").value;
	window.localStorage.setItem('data', data);
	window.location.href = "index.html";
}



if(document.getElementById("home")){
	window.onload = function() {
		if(window.localStorage){
			var i = 1;
			while (i < 100) {
			  const goal =  window.localStorage.getItem('data').split(','); 
			  document.getElementById('log').innerHTML += "<button></button> <p>" + goal[i].split('^')[0] + "</p>" + "<div class='bar'><div style='width: calc(100% / "+goal[i].split('^')[1]+" * "+goal[i].split('^')[2]+");' class='progress'></div></div>";
			  goal[i].split('^')[1]
			  	i++;

			  	if (goal[i] == undefined){
			  		i = 9999;
			  	}
			}
			
		}
	}
}

