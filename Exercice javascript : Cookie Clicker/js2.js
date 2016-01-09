$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage = document.getElementById("affichage");
$autoclick = document.getElementById("autoclick");
$cadeau = document.getElementById("cadeau");
score = 0;
multiplicateur1 = 1;

function afficherScore() {
    $affichage.innerHTML = "server down: " + score;
}

function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "Injection SQL x" + multiplicateur1 + " (prix : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Acheter un BotnetV2.exe pour " + prixAutoClick() + " server Down";
}

function clic() {
    score = score + multiplicateur1;
    afficherScore();
}

function prix() {
    return 50 * multiplicateur1 * multiplicateur1;
}

function prixAutoClick(){
    return 100;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        multiplicateur1 = multiplicateur1 + 1;
        afficherMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas fait assez de degat!");
    }
}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Vous n'avez pas fait assez de degat!");
    }
};

function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);
 
}
function mouseDown() {
    elmt1.style.height = "305px";
	
	switch (numCadeau) {
		case 1 : figure1.style.width = "151px" ; figure1.style.height = "86px" ; break ;
		case 2 : figure2.style.width = "151px" ; figure2.style.height = "88px" ; break ;
		case 3 : figure3.style.width = "202px" ; figure3.style.height = "120px" ; break ;
	}
}

function mouseUp() {
    elmt1.style.height = "300px";
	
	switch (numCadeau) {
		case 1 : figure1.style.width = "150px" ; figure1.style.height = "85px" ; break ;
		case 2 : figure2.style.width = "150px" ; figure2.style.height = "87px" ; break ;
		case 3 : figure3.style.width = "200px" ; figure3.style.height = "119px" ; break ;
	}
}
	
function afficherCadeau(){ 
	if ( score >= 200 && numCadeau == 1){
		figure1.style.display = "none";
		figure2.style.display = "block";
		score = score - 200 ;
		numvais = 2 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else if ( score >= 400 && numvCadeau == 2) {
		figure1.style.display = "none";
		figure2.style.display = "none";
		figure3.style.display = "block";
		numCadeau = 3 ;
		score = score - 400 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else {} }
$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$cadeau.onclick = afficherCadeau;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();