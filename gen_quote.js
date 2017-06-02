var quotes = [
"it isn\'t what we say or think that defines us, but what we do. -Jane Austen",
"Logic will get you from A to Z; imaginaion will take you everywhere. -Albert Einstein",
 "Before you act, listen.\n Before you read, think.\n Before you spend, earn \n Before you criticize, wait.\n Before you pray, forgive.\n Before you quit, try. -Emest Hemingway.", 
 "speak only if it improves upon the silence. - Mahatma Gandhi", 
 "Sometimes you will never know the value of a moment until it become a memory. -Dr.Seuss"];

 function get_quote(){
 	var random_quote = Math.floor(Math.random() * quotes.length());
 	document.getElementById('').innerHTML = ' ' + quotes[random_quote];
 }