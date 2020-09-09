//Pizza Calculator..
var Kleinpizza  = 10.00;
var Mediumpizza = 16.00;
var Bigpizza    = 20.00;

//laat de pizza's zien
document.write("<br> Prijzen pizza's"); 
document.write("<br> Kleine pizza = € " + Kleinpizza);
document.write("<br> Medium pizza = € " + Mediumpizza);
document.write("<br> Grote pizza = € " + Bigpizza);

//welkoms bericht
alert("Hallo, welkom bij Rick pizza makers en co.");
alert("We hebben vandaag 3 soorten pizza's namelijk = klein, medium en groot.");
//bestelling
document.write("<br>");
document.write("<br> Dit is je bestel lijst.");

kleine = prompt("Hoeveel kleine pizza's wil je?");
document.write("<br> Kleine pizza's = " +kleine);
mediume = prompt("Hoeveel medium pizza's wil je?");
document.write("<br> Medium pizza's = " +mediume);
grote = prompt("Hoeveel grote pizza's wil je?");
document.write("<br> Grote pizza's = " +grote);
//berekening
totaalk = (Kleinpizza * kleine);
totaalm = (Mediumpizza * mediume);
totaalg = (Bigpizza * grote);
totaal  = (totaalk + totaalm + totaalg);
//totaal prijs
document.write("<br>")
document.write("<br> Totaal bedrag =  €" + totaal);