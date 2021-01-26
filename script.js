// create localStorage
if(localStorage.getItem("savedData")== null){
	var myArray =  [];
	localStorage.setItem("savedData", JSON.stringify(myArray));
}


// get
var objects = JSON.parse(localStorage.getItem("savedData"));
console.log(objects);

// add
localStorage.setItem("savedData", JSON.stringify(objects));

// set new
if (document.getElementById("save")){
document.getElementById("save").addEventListener("click", addfuntion);
}

// find id

	
function addfuntion(){

if((document.getElementById("titel").value != "") && (document.getElementById("goal").value != "" )) {	
var i = "0";
	while (i < 999) {
		if(objects[i] == undefined){
			objects[i] =  {'name':document.getElementById("titel").value , 'goal' : document.getElementById("goal").value , 'points' : '1' } ;
			localStorage.setItem("savedData", JSON.stringify(objects));
			window.location.href = "index.html";
			break; 
		}
		i++;
	}
}

}



// load data
if(document.getElementById("home")){

	window.onload = function() {
		var i = "0";
			while (i < 100) {
				if (objects[i] == undefined){
			  		break; 
			  	}
			  document.getElementById('log').innerHTML += "<a href='index.html'> <p>" + objects[i].name + "</p> " + "<div class='bar'><div style='width: calc(100% / "+objects[i].goal+" * "+objects[i].points+");' class='progress'></div></div></a> ";
			  	i++;
			}
			
	}


	function addfuntion(number){
		var x = 1;
		objects[number].points = objects[number].points - 1 + 2;
		localStorage.setItem("savedData", JSON.stringify(objects));
		window.location.href = "index.html";
	}

	function subfuntion(number){
		objects[number].points = objects[number].points - 1;
		localStorage.setItem("savedData", JSON.stringify(objects));
		window.location.href = "index.html";
	}

	function removefuntion(number){	
	objects = objects.splice(+number + +1);
	localStorage.setItem("savedData", JSON.stringify(objects));
	window.location.href = "index.html";
	}

}

// clear data
if (document.getElementById("clear")){
document.getElementById("clear").addEventListener("click", clearfuntion);
}

function clearfuntion(){
localStorage.clear();
	}


// <p>" + objects[i].goal + "</p><p>" + objects[i].points + "</p>
// <button onclick='removefuntion("+i+")'>Remove</button> <button onclick='subfuntion("+i+")'>sub</button> <button onclick='addfuntion("+i+")'>Add</button> 