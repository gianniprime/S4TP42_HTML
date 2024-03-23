//alert("hello")
/*
function add(a,b){
return a+b
};

alert(add(5,7));
alert(add(1,7));
*/
// ici je selection le contenaire qui doit acceuillir la balise => par son ID
const htmlElementToModify = document.getElementById("description-container");

// on creer une balise HTML de type => h2
let newH2 = document.createElement("h2");

// ici on rajoute une classe a la balise h2
newH2.className = "description-titre";

// ici on rajoute le texte a la balise h2
newH2.innerHTML = "MMA c'est quoi ?";

let newP = document.createElement("p");
newP.className = "description-text";
newP.innerHTML = "Le MMA, ou arts martiaux mixtes, est un sport de combat qui combine différentes techniques de lutte, de percussion et de soumission. Les combattants utilisent un mélange de disciplines telles que le judo, la boxe, le jiu-jitsu brésilien, le karaté et le muay thaï pour vaincre leur adversaire. Les combats ont lieu dans un octogone fermé, où les compétiteurs peuvent utiliser à la fois des coups de poing, de coude, de genou, des coups de pied, des projections et des soumissions pour remporter la victoire. Le MMA est devenu un sport extrêmement populaire dans le monde entier, attirant des millions de fans pour ses combats intenses, son athlétisme et sa stratégie.";


// j'utilise appendChild() pour inserer les balises dans le contenaire
htmlElementToModify.appendChild(newH2); 
htmlElementToModify.appendChild(newP);


// quand je click dans le container 
// je fait apparaitre une balise texte de couleur rouge

// je doit creer la balise text
let newPclick = document.createElement("p");
// je doit lui donner une classe
newPclick.className = "description-text colorText";
// je doit lui ecrire le texte a afficher
newPclick.innerHTML = "Cette balise est creer dynamiquement avec javascript !! Truc de fou !!";

// je doit ecouter si il y a un click dans le container
document.getElementById("clickImage").addEventListener("click", lanceLaFunction);

function lanceLafulanceLaFunnction () {
    htmlElementToModify.appendChild(newPclick)
}