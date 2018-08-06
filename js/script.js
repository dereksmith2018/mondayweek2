

alert("input something!")
var sentence =prompt();
alert(sentence);

//declear first and last leyyer
var firstLetter=sentence.charAt(0);
var lastLetter=sentence.charAt(sentence.length-1);


//display the two letters as uppercase
alert("This is the first letter, changed to uppercase: " + firstLetter.toUpperCase());
alert("This last letter, changed uppercase: " + lastLetter.toUpperCase());

// new string
var newLetter=firstLetter.toUpperCase()+lastLetter.toUpperCase();
alert("The new string is: " + newLetter );

//var newLetter=firstLetter.toUpperCase()+lastLetter.toUpperCase();

var reverse=lastLetter.toUpperCase()+firstLetter.toUpperCase()
alert("These's are the letters reversed: " +reverse);






//alert(sentence.toUpperCase().charAt(0));
//alert(sentence.toUpperCase().charAt(sentence.length-1));
