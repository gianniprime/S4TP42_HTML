// Je doit faire un quiz 
// il contiendra 5 questions pour commencer
// il me dire le nombre de point a la fin 
// et doit pouvoir recommencer
const htmlElementToModify = document.getElementById("clickEvent");

let shopping = ["pain", "lait", "fromage", "houmous", "nouilles"];




let newPclick = document.createElement("p");
newPclick.className = "texteHeader";
newPclick.innerHTML = shopping[4];

// je doit ecouter si il y a un click dans le container
document.getElementById("buttonClick").addEventListener("click", lanceLaFunction);
function lanceLaFunction () {
    htmlElementToModify.appendChild(newPclick)
}



