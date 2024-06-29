const musica=new Audio("audio/Moonlight in Mexico - Jimena Contreras.mp3");
musica.volume=1;



function diminishVolume(){
    if(musica.volume>0.08){
        musica.volume-=0.08;
        setTimeout(diminishVolume,500);
    }
    else{
        musica.pause()
    }
}




const txt="EMPEZAMOS";
const txtSpace=document.querySelector("main h1");



let letter=0;
function write(){

    txtSpace.textContent+=txt[letter];
    letter++;
    if(letter===txt.length){
        
        create_NEXT_LEVEL_btn('.empezar','ep1btnDiv','ep1btn',"EPIZODO UNO",go_to_EP1);
        clearInterval(indexInterval);

    }

}


let indexInterval=setInterval(write,700);



const link_EP1_DARKMODE="ep1/ep1.css";
const link_EP1_LIGHTMODE="ep1/ep1_lightmode.css";


let playSong=true;

function go_to_EP1(){
    
 

    create_and_append_SCRIPT("ep1_SECTION","link_EP1","ep1/ep1.js",link_EP1_DARKMODE);

   

    if(playSong){
        playSong=false;
        
        musica.play();
        

    }
    
   
}









