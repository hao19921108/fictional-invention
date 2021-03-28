let searchInput = document.getElementsByClassName("search-input");
let input = document.getElementsByTagName('input');

if(!input[0]){setInterval( myFunction,2000);
}


var messages=['Corrupted Answers', "Sexy Photos",'Hao','Unsearchable','996','How to feel like a boss','Has my coworker ask a salary raise yet?','Art to buy at Zhu Jia Jiao','Things to do on this website','Why links below got Blurry','Hao Zhang Shanghai', 'Ask Weibo about Scary','Secrets hidden by Baidu','Are Default Answers PAID?', 'Will someone sell this input field to third party?',"Is Taobao listening to this?","Hao's Art",'What\s meaning of life?','How to rocket Real Estate Market',
'Is Weibo Real?','Ask Tiktok for a second opinion','How to get featured in Hot Search?','How to buy Hao\'s Website?','God','RADCIAL CHINESE CONTEMPORARY FINE ART','Cold Search','Is Google available now?'];

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



function GFG_Fun() { 
            var img = document.createElement('img'); 
            img.src =  'logo.png'; 
        img.width=105;
           document.getElementsByClassName('logo')[0].appendChild(img); 
  //          down.innerHTML = "Image Element Added.";  
        }  



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
        document.getElementsByClassName('logo')[0].innerHTML='';
        
         GFG_Fun();
        document.getElementsByTagName('title')[0].innerHTML='Search Search';
 document.getElementsByClassName('s-btn-b')[0].innerText='瞎看看';
        flag=1;
        
    }
    
}


