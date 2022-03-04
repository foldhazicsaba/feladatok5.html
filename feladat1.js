let kisskati = new szemely("Kiss","Katalin",28,"");
kisskati.setHobby("futás");
document.getElementById("teljesnev").innerHTML = "Teljes neve: " +
kisskati.teljesnev();
document.getElementById("eletkor").innerHTML ="Életkora: " +
kisskati.eletkor();
document.getElementById("hobby").innerHTML = "Kedvenc elfoglaltsága:
" + kisskati.getHobby();