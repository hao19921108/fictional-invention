let searchInput = document.getElementsByClassName("search-input");
let input = document.getElementsByTagName('input');

if(!input[0]){setInterval( myFunction,2000);
}


var messages=['Corrupted Answers Happens Here', 'Unsearchable Truth','You can type anything. Can you?','No More Hot Search Ranks','Truths got Blurry','Man-made Attention', 'Ask Reddit about this','Unpopular Keywords','Default Answers are PAID', 'Your Input would be purhcased by third parties for Free.',"Taobao wouldn't display an ad because of your inputs.","Facebook is not listening to this.",'Baidu is not listening to this',
'Is Weibo Real?','Ask Tiktok for a second opinion','How to get featured in Hot Search?'];

let i=0;
let flag=0;

function myFunction(){
    
    if(i== messages.length){i=0;}
    input[0].value= messages[i];
    i++;
    
    
}




if(!document.body){setInterval( addBlackBox,1000);
}





let m=1 , n= 56;
let linksArray;







function addBlackBox(){
    
    if(!flag){

        linksArray=document.getElementsByTagName('a');

        for( m=0;m<linksArray.length;m++){
            
            if(m!=67 || m!=65){
                
                linksArray[m].classList.add('blur');

            }
            
        }
        
        
        document.getElementsByClassName('gn_logo').innerHTML='';
        document.getElementsByClassName('copyright')[0].innerHTML='';

        
        flag=1;
        
    }
    
}


