
// get
var objects = JSON.parse(localStorage.getItem("savedData"));
// console.log(objects[0].id);
console.log(objects);

// add
localStorage.setItem("savedData", JSON.stringify(objects));

// set new
if (document.getElementById("save")){
document.getElementById("save").addEventListener("click", addfuntion);
}

// find id
function addfuntion(){
var i = "0";
	while (i < 999) {
		console.log(objects[i]);
		if(objects[i] == undefined){
			objects[i] =  {'name':document.getElementById("titel").value , 'goal' : document.getElementById("goal").value , 'value' : '1' } ;
			localStorage.setItem("savedData", JSON.stringify(objects));
			window.location.href = "index.html";
			break; 
		}
		i++;
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
			  document.getElementById('log').innerHTML += "<button onclick='removefuntion("+i+")'>Remove</button> <button onclick='subfuntion("+i+")'>sub</button> <button onclick='addfuntion("+i+")'>Add</button> <p>" + objects[i].name + "</p> <p>" + objects[i].goal + "</p><p>" + objects[i].value + "</p>" + "<div class='bar'><div style='width: calc(100% / "+objects[i].goal+" * "+objects[i].value+");' class='progress'></div></div>";
			  	i++;
			}
			
	}


	function addfuntion(number){
		objects[number].value = objects[number].value  + 1;
		localStorage.setItem("savedData", JSON.stringify(objects));
		window.location.href = "index.html";
	}

	function subfuntion(number){
		objects[number].value = objects[number].value - 1;
		localStorage.setItem("savedData", JSON.stringify(objects));
		window.location.href = "index.html";
	}

	function removefuntion(){

	objects = objects.slice(1);
	localStorage.setItem("savedData", JSON.stringify(objects));
	window.location.href = "index.html";
	}

}