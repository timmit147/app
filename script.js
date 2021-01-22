var save = document.getElementById("save");
var clear = document.getElementById("clear");
var data = window.localStorage.getItem('data');
var i = 1;

// check if got data
if(data){
var goal =  data.split(',');
}


// add value
function addfuntion(number) {
var y = goal[number].split('^')[2];
  var z = 1;
  var x = +y + +z;
goal = goal.toString().replace(y, x ); 
window.localStorage.setItem('data', goal);
window.location.href = "index.html";
}

// remove value
function subfuntion(number) {
var y = goal[number].split('^')[2];
  var z = 1;
  var x = +y - +z;
goal = goal.toString().replace(y, x );
window.localStorage.setItem('data', goal);
window.location.href = "index.html";
}



// remove goal
function removefuntion(number) {
goal = goal.toString().replace(","+goal[number], ''); 
window.localStorage.setItem('data', goal);
window.location.href = "index.html";
}



// clear all data
if(clear){
	clear.addEventListener("click", clearfuntion);
}

function clearfuntion() {
localStorage.clear();
}


// set goal listerner
if(save){
	save.addEventListener("click", myFunction);
}

function myFunction() {
	data = data + "," + document.getElementById("titel").value + "^" + document.getElementById("goal").value  + "^" + 0;
	window.localStorage.setItem('data', data);
	window.location.href = "index.html";
}


// load data
if(document.getElementById("home")){
	window.onload = function() {
		if(goal[1]){
			while (i < 100) {
			  document.getElementById('log').innerHTML += "<button onclick='removefuntion("+i+")'>Remove</button> <button onclick='subfuntion("+i+")'>sub</button> <button onclick='addfuntion("+i+")'>Add</button> <p>" + goal[i].split('^')[0] + "</p> <p>" + goal[i].split('^')[1] + "</p><p>" + goal[i].split('^')[2] + "</p>" + "<div class='bar'><div style='width: calc(100% / "+goal[i].split('^')[1]+" * "+goal[i].split('^')[2]+");' class='progress'></div></div>";
			  	i++;

			  	if (goal[i] == undefined){
			  		i = 9999;
			  	}
			}
			
		}
	}
}