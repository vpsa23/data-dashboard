var link1 = document.getElementById("focus");
var link2 = document.getElementById("students");
var link3 = document.getElementById("teachers");
var contenedor1 = document.getElementById("firstSection");
var contenedor2 = document.getElementById("secondSection");
var contenedor3 = document.getElementById("thirstSection");
var fondoLista = document.getElementById("list1");
var fondoLista2 = document.getElementById("list2");
var fondoLista3 = document.getElementById("list3");
var selectorGeneracion = document.getElementById("lab")


function generation(sel){
		 var text= sel.options[sel.selectedIndex].text;
		 document.getElementById("title").innerHTML = text;
    }



link1.addEventListener("click", function(){

	contenedor1.classList.remove("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.add("esconder");
	fondoLista.classList.add("a:hover");
	selectorGeneracion.classList.remove("esconder");
})

link2.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.remove("esconder");
	contenedor3.classList.add("esconder");
	selectorGeneracion.classList.add("esconder");
})
    
link3.addEventListener("click", function(){

	contenedor1.classList.add("esconder");
	contenedor2.classList.add("esconder");
	contenedor3.classList.remove("esconder");
	selectorGeneracion.classList.add("esconder");
})
 

//Variables para los button radio en estudiantes

var SCL2016 = document.getElementById("SCL2016-2");
var SCL20171 = document.getElementById("SCL2017-1");
var SCL20172 = document.getElementById("SCL2017-2");
var selectStudent = document.getElementById("lab2");
var optionStudent = document.getElementById("nameStudent")
var nombre = document.getElementById("nombreEstudiante");
var notasTech = document.getElementById("notasTech");
var notasHSE = document.getElementById("notasHSE");


 //Hecho en clases

 //Agregando nombres a select opcion SCL 2016-2

SCL2016.addEventListener("click", function(){
		selectStudent.childNodes.forEach((child)=>{selectStudent.removeChild(child);});
		for (var i = 0; i < data.SCL['2016-2'].students.length; i++) {
 		var newOption = document.createElement("option");
 		newOption.innerHTML += data.SCL['2016-2'].students[i].name;
 		selectStudent.appendChild(newOption);

	}
})




//Agregando nombres a select opcion SCL 2017-1


SCL20171.addEventListener("click", function(){
		selectStudent.childNodes.forEach((child)=>{selectStudent.removeChild(child);});
		for (var i = 0; i < data.SCL['2017-1'].students.length; i++) {
 		var newOption = document.createElement("option");
 		newOption.innerHTML += data.SCL['2017-1'].students[i].name;
 		selectStudent.appendChild(newOption);

	}
})

//Agregando nombres a select opcion SCL 2017-2

SCL20172.addEventListener("click", function(){
		selectStudent.childNodes.forEach((child)=>{selectStudent.removeChild(child);});
		for (var i = 0; i < data.SCL['2017-2'].students.length; i++) {
 		var newOption = document.createElement("option");
 		newOption.innerHTML += data.SCL['2017-2'].students[i].name;
 		selectStudent.appendChild(newOption);

	}
})

function students() {
    var x = document.getElementById("lab2").value;
    document.getElementById("nombreEstudiante").innerHTML = "Nombre y Apellido: " + x;
}



//Obteniendo nombre de select opcion

/* 
 optionStudent.addEventListener("onchange",function(){
 		var textStudent= sel.options[sel.selectedIndex].text;
		 document.getElementById("nombreEstudiante").innerHTML = textStudent; 

 })
*/


function students() {
    var x = document.getElementById("lab2").value;
    document.getElementById("nombreEstudiante").innerHTML = "Nombre y Apellido: " + x;
   	
   	var estudiante = data.SCL["2016-2"].students.find((student)=>{return student.name == x});
   	var y = estudiante.sprints[0].tech;	 
 	document.getElementById("notasTech").innerHTML = "Notas Tech: " + y;

}