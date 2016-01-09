$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage = document.getElementById("affichage");
$autoclick = document.getElementById("autoclick");

score = 0;
multiplicateur1 = 1;

function afficherScore() {
    $affichage.innerHTML = "server Down : " + score;
}

function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "DDOS Attaque x" + multiplicateur1 + " (prix : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Botnet.exe pour " + prixAutoClick() + " server Down";
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


$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();