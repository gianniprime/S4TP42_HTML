// je declare toutes mes variables
// je recuperer l'id du conteneur des buttons pour le faire disparaitre a l'affichage des questions
const conteneurButtonChoix = document.getElementById('buttonChoixQuiz') 
// je recuperer l'id du conteneur des questions 
const conteneurQuestions = document.getElementById('containerQuestions')
// je recuperer l'id du conteneur du score
const conteneurScore = document.getElementById("scoreContainer")
// je recuperer l'id de la span du score
const compteurScore = document.getElementById('scoreSpan')
// je recuperer l'id du conteneur du bloc d'une questions
const fieldsetDisplay1 = document.getElementById('idFieldset1') //
const fieldsetDisplay2 = document.getElementById('idFieldset2') //
const fieldsetDisplay3 = document.getElementById('idFieldset3') //
const fieldsetDisplay4 = document.getElementById('idFieldset4') //
const fieldsetDisplay5 = document.getElementById('idFieldset5') //

// je declare une variable pour acceuillir les questions selon le niveau
var questionnaireChoisi = []

// c'est une fonction pour gerer le quiz quand on clique sur un bouton
function choixDuQuiz (params) {
    // quand on choisi un niveau de difficulté, on fait disparaitre les boutons avec un display none
    conteneurButtonChoix.style.display = "none"

    // une condition pour charger les questions selon le niveau avec un if else
    if (params == 1){
        questionnaireChoisi = [
            {   
                "question1" : "Qu'est-ce que MMA signifie en anglais ?",
                "choix1": "Mixed Martial Arts",
                "choix2": "Martial Mixed Arts",
                "choix3": "Mixed Martial Athletes",
                "reponse": "Mixed Martial Arts",
            },{ 
                "question2" : "Qui est généralement considéré comme le père du MMA moderne ?",
                "choix1": "Bruce Lee",
                "choix2": "Royce Gracie", 
                "choix3": "Georges St-Pierre",
                "reponse": "Royce Gracie",
            },{ 
                "question3" : "Quelles sont les principales règles du MMA ?",
                "choix1": "Aucune règle",
                "choix2": "Interdiction des coups de pied",
                "choix3": "Règles spécifiques régissant les techniques de frappe, de soumission et de lutte",
                "reponse": "Règles spécifiques régissant les techniques de frappe, de soumission et de lutte", 
            
            },{ 
                "question4" : "Combien de poids différentes catégories existent-il dans le MMA ?",
                "choix1": 3,
                "choix2": 6,
                "choix3": 8,
                "reponse": 8,
            },{ 
                "question5" : "Quelle organisation est généralement considérée comme la plus prestigieuse dans le monde du MMA ?",
                "choix1" : "Bellator",
                "choix2" : "ONE Championship",
                "choix3" : "UFC",
                "reponse" :  "UFC",
            }
        ]       
    } else if (params == 2){
        questionnaireChoisi = [
            {
                "question1" : "Quels sont les noms des huit catégories de poids de l'UFC ?",
                "choix1": "Trois",
                "choix2": "Six",
                "choix3": "Huit",
                "reponse": "Huit"
            },{
                "question2" : "Quelle est la différence entre un combat de MMA amateur et un combat professionnel ?",
                "choix1": "Les combats professionnels ont des règles plus strictes",
                "choix2": "Les combats professionnels ont généralement des récompenses monétaires",
                "choix3": "Il n'y a pas de différence",
                "reponse": "Les combats professionnels ont généralement des récompenses monétaires"
            },{
                "question3" : "Combien de rounds composent un combat de titre de l'UFC ?",
                "choix1": "3",
                "choix2": "5",
                "choix3": "7",
                "reponse": "5"
            },{
                "question4" : "Quelle est la signification des lettres UFC ?",
                "choix1": "Ultimate Fighting Championship",
                "choix2": "Universal Fighting Competition",
                "choix3": "United Fight Council",
                "reponse": "Ultimate Fighting Championship"
            },{
                "question5" : "Quelle est la technique de combat utilisée pour contrôler un adversaire au sol dans le MMA ?",
                "choix1": "Triangle choke",
                "choix2": "Mount",
                "choix3": "Guillotine choke",
                "reponse": "Mount"
            }
        ]
        //console.log(questionnaireChoisi)
    } else if (params == 3){
        questionnaireChoisi = [
            {
                "question1" : "Quelle est la différence entre le MMA et le combat de rue ?",
                "choix1": "Aucune différence",
                "choix2": "Le MMA est un sport réglementé, tandis que le combat de rue est non réglementé et souvent illégal",
                "choix3": "Le MMA est pratiqué par des professionnels, tandis que le combat de rue est pratiqué par des amateurs",
                "reponse": "Le MMA est un sport réglementé, tandis que le combat de rue est non réglementé et souvent illégal"
            },{
                "question2" : "Qui est le seul combattant à détenir simultanément des titres dans deux catégories de poids différentes à l'UFC ?",
                "choix1": "Georges St-Pierre",
                "choix2": "Conor McGregor",
                "choix3": "Daniel Cormier",
                "reponse": "Conor McGregor"
            },{
                "question3" : "Qu'est-ce que la cage dans le MMA et quel est son rôle ?",
                "choix1": "Une structure en acier pour la décoration",
                "choix2": "L'enclos dans lequel se déroulent les combats et qui sert à contenir les combattants",
                "choix3": "Un lieu où les combattants s'entraînent",
                "reponse": "L'enclos dans lequel se déroulent les combats et qui sert à contenir les combattants"
            },{
                "question4" : "Comment se déroule la procédure de pesée avant un combat de MMA professionnel ?",
                "choix1": "Il n'y a pas de pesée",
                "choix2": "Les combattants se pesent la veille du combat",
                "choix3": "Les combattants se pesent après le combat",
                "reponse": "Les combattants se pesent la veille du combat"
            },{
                "question5" : "Quels sont les critères utilisés par les juges pour marquer un combat de MMA ?",
                "choix1": "Seulement les frappes",
                "choix2": "Les frappes, les soumissions, le contrôle et les coups portés au sol",
                "choix3": "Les coups de pied",
                "reponse": "Les frappes, les soumissions, le contrôle et les coups portés au sol"
            }
        ]
        // console.log(questionnaireChoisi)
    }

    // on affiche les questions selon le niveau choisi
    document.getElementById('labelQuestion1').innerHTML = questionnaireChoisi[0].question1
    // choix 1
    document.getElementById('labelQuestion1choix1').innerHTML = questionnaireChoisi[0].choix1
    document.getElementById('innputQuestion1Choix1').value = questionnaireChoisi[0].choix1
    // choix 2
    document.getElementById('labelQuestion1choix2').innerHTML = questionnaireChoisi[0].choix2
    document.getElementById('innputQuestion1Choix2').value = questionnaireChoisi[0].choix2
    // choix 3
    document.getElementById('labelQuestion1choix3').innerHTML = questionnaireChoisi[0].choix3
    document.getElementById('innputQuestion1Choix3').value = questionnaireChoisi[0].choix3

    document.getElementById('labelQuestion2').innerHTML = questionnaireChoisi[1].question2
    // choix 1
    document.getElementById('labelQuestion2choix1').innerHTML = questionnaireChoisi[1].choix1
    document.getElementById('innputQuestion2Choix1').value = questionnaireChoisi[1].choix1
    // choix 2
    document.getElementById('labelQuestion2choix2').innerHTML = questionnaireChoisi[1].choix2
    document.getElementById('innputQuestion2Choix2').value = questionnaireChoisi[1].choix2
    // choix 3
    document.getElementById('labelQuestion2choix3').innerHTML = questionnaireChoisi[1].choix3
    document.getElementById('innputQuestion2Choix3').value = questionnaireChoisi[1].choix3

    document.getElementById('labelQuestion3').innerHTML = questionnaireChoisi[2].question3
    // choix 1
    document.getElementById('labelQuestion3choix1').innerHTML = questionnaireChoisi[2].choix1
    document.getElementById('innputQuestion3Choix1').value = questionnaireChoisi[2].choix1
    // choix 2
    document.getElementById('labelQuestion3choix2').innerHTML = questionnaireChoisi[2].choix2
    document.getElementById('innputQuestion3Choix2').value = questionnaireChoisi[2].choix2
    // choix 3
    document.getElementById('labelQuestion3choix3').innerHTML = questionnaireChoisi[2].choix3
    document.getElementById('innputQuestion3Choix3').value = questionnaireChoisi[2].choix3

    document.getElementById('labelQuestion4').innerHTML = questionnaireChoisi[3].question4
    // choix 1
    document.getElementById('labelQuestion4choix1').innerHTML = questionnaireChoisi[3].choix1
    document.getElementById('innputQuestion4Choix1').value = questionnaireChoisi[3].choix1
    // choix 2
    document.getElementById('labelQuestion4choix2').innerHTML = questionnaireChoisi[3].choix2
    document.getElementById('innputQuestion4Choix2').value = questionnaireChoisi[3].choix2
    // choix 3
    document.getElementById('labelQuestion4choix3').innerHTML = questionnaireChoisi[3].choix3
    document.getElementById('innputQuestion4Choix3').value = questionnaireChoisi[3].choix3

    document.getElementById('labelQuestion5').innerHTML = questionnaireChoisi[4].question5
    // choix 1
    document.getElementById('labelQuestion5choix1').innerHTML = questionnaireChoisi[4].choix1
    document.getElementById('innputQuestion5Choix1').value = questionnaireChoisi[4].choix1
    // choix 2
    document.getElementById('labelQuestion5choix2').innerHTML = questionnaireChoisi[4].choix2
    document.getElementById('innputQuestion5Choix2').value = questionnaireChoisi[4].choix2
    // choix 3
    document.getElementById('labelQuestion5choix3').innerHTML = questionnaireChoisi[4].choix3
    document.getElementById('innputQuestion5Choix3').value = questionnaireChoisi[4].choix3

    // une fois toutes les questions charger, on affiche a l'ecran avec un display block
    conteneurQuestions.style.display = "block"
    
    // pour afficher le score en fin de quiz lancer cette ligne
    conteneurScore.style.display = "block"

    // on prepare un fonction pour verifier si c'est true or false
    function verifyResponse (id, reponse, fieldsetDisplay) {
        var selectElement = document.getElementById(id); // On selectionne le bouton avec son id
        // j'ecoute avec adeventlisterner si il y a un changement
        selectElement.addEventListener("change", (event) => {
            // j'utilise un condition pour verifier si c'est true or false
            if (selectElement.value != reponse) {
                // si c'est faux je doit ajouter zero au score 
                console.log("tu es un naze c'est faux !");
            } else {
                // sinon c'est true et je doit ajouter 1 au score 
                console.log("bonne reponse !!");
            }
            // ici je suprime la question de l'affichage de l'écran
            fieldsetDisplay.style.display = "none"

        });
    }

    // je lance toutes les fonction pour verifier le changement des bouton radio de l'ecran
    verifyResponse("innputQuestion1Choix1", questionnaireChoisi[0].reponse, fieldsetDisplay1)
    verifyResponse("innputQuestion1Choix2", questionnaireChoisi[0].reponse, fieldsetDisplay1)
    verifyResponse("innputQuestion1Choix3", questionnaireChoisi[0].reponse, fieldsetDisplay1)

    verifyResponse("innputQuestion2Choix1", questionnaireChoisi[1].reponse, fieldsetDisplay2)
    verifyResponse("innputQuestion2Choix2", questionnaireChoisi[1].reponse, fieldsetDisplay2)
    verifyResponse("innputQuestion2Choix3", questionnaireChoisi[1].reponse, fieldsetDisplay2)

    verifyResponse("innputQuestion3Choix1", questionnaireChoisi[2].reponse, fieldsetDisplay3)
    verifyResponse("innputQuestion3Choix2", questionnaireChoisi[2].reponse, fieldsetDisplay3)
    verifyResponse("innputQuestion3Choix3", questionnaireChoisi[2].reponse, fieldsetDisplay3)

    verifyResponse("innputQuestion4Choix1", questionnaireChoisi[3].reponse, fieldsetDisplay4)
    verifyResponse("innputQuestion4Choix2", questionnaireChoisi[3].reponse, fieldsetDisplay4)
    verifyResponse("innputQuestion4Choix3", questionnaireChoisi[3].reponse, fieldsetDisplay4)

    verifyResponse("innputQuestion5Choix1", questionnaireChoisi[4].reponse, fieldsetDisplay5)
    verifyResponse("innputQuestion5Choix2", questionnaireChoisi[4].reponse, fieldsetDisplay5)
    verifyResponse("innputQuestion5Choix3", questionnaireChoisi[4].reponse, fieldsetDisplay5)
    
}


