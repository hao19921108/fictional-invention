let searchInput = document.getElementsByClassName("search-input");
let input = document.getElementsByTagName('input');

if(!input[0]){setInterval( myFunction,1000);
}


var messages=['Corrupted Answers Happens Here', 'No Truth Comes Out of Here','Fake Reality','Use Google As a Keyword','Delusional','Not Relevant', 'Ask Reddit about this','Wrong Answer','Default Answers are purchased', 'Your Input would be purhcased by third parties for Free.'];

let i=0;

function myFunction(){
    
    if(i== messages.length){i=0;}
    input[0].value= messages[i];
    i++;
}