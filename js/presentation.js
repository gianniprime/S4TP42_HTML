//alert("hello")
/*
function add(a,b){
return a+b
};

alert(add(5,7));
alert(add(1,7));
*/

let newDiv = document.createElement("h2");
newDiv.className="titre-perso"
newDiv.innerHTML="Oups reli tes note tu tes trom^é! ";
const htmlElementToModify = document.getElementById("description-container");
htmlElementToModify.appendChild(newDiv);           