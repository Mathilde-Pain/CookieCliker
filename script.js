var cookie= 0;
var nbCookiesParClick = 1;
var prixamelioration1 = 10;
var nbAmelioration = 1;
var nbSecondes = 1000;
var nbRenaissance= 0
var prixRenaissance1= 1000000
var multiplicateur = 1


if(sessionStorage.getItem("cookie")) {
	cookie = parseInt(sessionStorage.getItem("cookie"));
	updateDisplay() 
}

if(sessionStorage.getItem("nbAmelioration")) {
	nbAmelioration = parseInt(sessionStorage.getItem("nbAmelioration"));
	updateDisplay() 
}
if(sessionStorage.getItem("prixAmelioration")) {
	prixamelioration1 = parseInt(sessionStorage.getItem("prixAmelioration"));
	updateDisplay() 
}
if(sessionStorage.getItem("nbCookiesParClick")) {
	nbCookiesParClick = parseInt(sessionStorage.getItem("nbCookiesParClick"));
	updateDisplay() 
}

if(sessionStorage.getItem("nbRenaissance")) {
	nbRenaissance = parseInt(sessionStorage.getItem("nbRenaissance"));
	updateDisplay() 
}
	
if(sessionStorage.getItem("prixRenaissance1")) {
	prixRenaissance1 = parseInt(sessionStorage.getItem("prixRenaissance1"));
	updateDisplay() 	
}




function clique() {
	cookie= cookie + Math.floor (nbCookiesParClick * multiplicateur) 
	sessionStorage.setItem("cookie", cookie);
		updateDisplay()
}

function updateDisplay(){ 
	document.getElementById("btnAscension").innerHTML  = "renaissance " + nbRenaissance + " : " + prixRenaissance1 + "cookies" ;
	document.getElementById("nb").innerHTML= "Mon nombre de cookies: "+ cookie;
	document.getElementById("txt").innerHTML = Math.floor (nbCookiesParClick * multiplicateur) 
	document.getElementById("bouton2").innerHTML  = "Amelioration " + nbAmelioration + " : " + prixamelioration1 + " cookies" ;
	
}
        
function upgrade() {
	if (cookie >= prixamelioration1) {
		
		nbCookiesParClick = nbCookiesParClick * 2
		nbAmelioration = nbAmelioration + 1
		cookie= cookie - prixamelioration1
		prixamelioration1 = prixamelioration1 + Math.floor(prixamelioration1 / 2)
		sessionStorage.setItem("nbAmelioration", nbAmelioration);
		sessionStorage.setItem("prixAmelioration", prixamelioration1);
		document.getElementById("bouton2").innerHTML  = "Amelioration " + nbAmelioration + " : " + prixamelioration1 + " cookies" ;
		sessionStorage.setItem("nbCookiesParClick", nbCookiesParClick);
		updateDisplay()
		return;
	}
	alert(" Pas assez de cookies, retourne farmer ;-; ")
}


setInterval(function () {
	cookie = cookie + nbCookiesParClick
	updateDisplay()
	sessionStorage.setItem("cookie", cookie);
}, nbSecondes) 





function renaissance() {
	if (cookie >= prixRenaissance1) {
		multiplicateur += 0.2
		nbCookiesParClick = 1
		nbRenaissance = nbRenaissance + 1
		cookie = 0
		nbAmelioration = 1  
		prixamelioration1 = 10 
		prixRenaissance1 = prixRenaissance1 * 3
		sessionStorage.setItem("nbRenaissance", nbRenaissance);
		sessionStorage.setItem("prixRenaissance1", prixRenaissance1);
		updateDisplay()
		return;
	}
	alert(" Pas assez de cookies, retourne farmer ;-; ")
}