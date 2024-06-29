const cuadrados=[...document.querySelectorAll('.cuadrado')];
const whooseTurn=document.querySelector('b');
whooseTurn.style.color="rgb(8, 107, 64)";
const result=document.createElement('div');
result.id="result";
const whoWon=document.createElement('b');
const winner=document.createElement('p');
const motivate=document.createElement('p');
winner.style.fontSize="18px";
motivate.style.color="rgb(8, 107, 64)";
const divLine=document.createElement('div');
divLine.className="lineNew";
result.appendChild(whoWon);
result.appendChild(divLine);
result.appendChild(winner);
result.appendChild(motivate);

let contadorJuegos=0;



const numberOfGames=document.querySelector('h3');
const resultOfwinsKrzyzykANDkolko=[...document.querySelectorAll('p')];
const btnChange=document.querySelector('button');

const blockImmute=document.createElement('div');
blockImmute.id="immute";

const blockImmute2=document.createElement('div');
blockImmute2.id="immute2";
 


const menyWithLigue=document.querySelector("#menyWithLigue");









// let setElement=0;
let howMenyElement=0;

let kolkoTURN=true;

function put(){


    btnChange.style.animationName="disappear";
    document.body.appendChild(blockImmute2);
    // btnChange.style.opacity="0";
    if(this.children.length===0){
        
    if(kolkoTURN){
        kolkoTURN=!kolkoTURN;
        whooseTurn.textContent="krzyżyk";
        const kolko=document.createElement('div');
        kolko.className='kolko';
        console.log("klik");
        
        this.appendChild(kolko);
        
    }else{

        kolkoTURN=!kolkoTURN;
        whooseTurn.textContent="kółko";
        const krzyrzk=document.createElement('div');
        krzyrzk.className='krzyzyk';
        console.log("klik");

        this.appendChild(krzyrzk);

    }


    if(this.children.length>1){
        console.log("przeginasz");
        this.removeChild(this.lastChild);
        // setElement--;       TUTAJ CHODŹ

        
    }
    howMenyElement++;
    }
    
    
    checkWin();
    
    
   
}




function clear(){
  
  

    changeFromKolko=true;
    whooseTurn.textContent="kółko";
    contadorJuegos++;
    kolkoTURN=true;
    howMenyElement=0;

    switch(contadorJuegos){
        case 2: numberOfGames.style.color=" rgb(17, 76, 102)";
        break;
        case 4: numberOfGames.style.color=" rgb(38, 102, 20)";
        break;
        case 7: numberOfGames.style.color=" rgb(190, 175, 46)";
        break;
        case 10: numberOfGames.style.color=" rgb(201, 90, 26)";
        break;
        case 15: numberOfGames.style.color=" rgb(135, 32, 32)";
        break;
        case 20: numberOfGames.classList.add("gold");
        break;
    }

    numberOfGames.textContent=`licznik gier: ${contadorJuegos}`

 
    result.remove();
    cuadrados.forEach(cuadrado=>{
       if(cuadrado.querySelector('.kolko')){
        cuadrado.querySelector('.kolko').remove();
       }
       else if(cuadrado.querySelector('.krzyzyk')){
        cuadrado.querySelector('.krzyzyk').remove();
       }
      

       btnChange.style.animationName="disappearReversed";


       btnChange.style.color=" rgb(8, 107, 64)";
       btnChange.style.backgroundColor="rgb(152, 193, 121)";
       btnChange.style.borderColor="rgb(8, 107, 64)";

       blockImmute.remove();
       blockImmute2.remove();
    }
);
}

let kolkoWins=0;
let krzyzykWins=0;

const allkolko=document.getElementsByClassName('kolko');
const allkrzyzyk=document.getElementsByClassName('krzyzyk');

function checkWin(){

    if(
        cuadrados[0].querySelector('.kolko') && cuadrados[3].querySelector('.kolko') && cuadrados[6].querySelector('.kolko') ||

        cuadrados[1].querySelector('.kolko') && cuadrados[4].querySelector('.kolko') && cuadrados[7].querySelector('.kolko') ||

        cuadrados[2].querySelector('.kolko') && cuadrados[5].querySelector('.kolko') && cuadrados[8].querySelector('.kolko') ||
        
        cuadrados[0].querySelector('.kolko') && cuadrados[1].querySelector('.kolko') && cuadrados[2].querySelector('.kolko') ||

        cuadrados[3].querySelector('.kolko') && cuadrados[4].querySelector('.kolko') && cuadrados[5].querySelector('.kolko') ||

        cuadrados[6].querySelector('.kolko') && cuadrados[7].querySelector('.kolko') && cuadrados[8].querySelector('.kolko') ||

        cuadrados[0].querySelector('.kolko') && cuadrados[4].querySelector('.kolko') && cuadrados[8].querySelector('.kolko') ||

        cuadrados[2].querySelector('.kolko') && cuadrados[4].querySelector('.kolko') && cuadrados[6].querySelector('.kolko') )   
        {
            document.body.appendChild(blockImmute);
            kolkoWins++;
            console.log('wygrana kolko') ;
            whoWon.textContent="Brawo kółko!";
            resultOfwinsKrzyzykANDkolko[0].textContent=`Kółko: ${kolkoWins}`;
            document.body.appendChild(result);
            whosWinning();
            setTimeout(clear,8000);
            

        }
    else if(
        cuadrados[0].querySelector('.krzyzyk') && cuadrados[3].querySelector('.krzyzyk') && cuadrados[6].querySelector('.krzyzyk') ||

        cuadrados[1].querySelector('.krzyzyk') && cuadrados[4].querySelector('.krzyzyk') && cuadrados[7].querySelector('.krzyzyk') ||

        cuadrados[2].querySelector('.krzyzyk') && cuadrados[5].querySelector('.krzyzyk') && cuadrados[8].querySelector('.krzyzyk') ||
        
        cuadrados[0].querySelector('.krzyzyk') && cuadrados[1].querySelector('.krzyzyk') && cuadrados[2].querySelector('.krzyzyk') ||

        cuadrados[3].querySelector('.krzyzyk') && cuadrados[4].querySelector('.krzyzyk') && cuadrados[5].querySelector('.krzyzyk') ||

        cuadrados[6].querySelector('.krzyzyk') && cuadrados[7].querySelector('.krzyzyk') && cuadrados[8].querySelector('.krzyzyk') ||

        cuadrados[0].querySelector('.krzyzyk') && cuadrados[4].querySelector('.krzyzyk') && cuadrados[8].querySelector('.krzyzyk') ||

        cuadrados[2].querySelector('.krzyzyk') && cuadrados[4].querySelector('.krzyzyk') && cuadrados[6].querySelector('.krzyzyk')
    ){
        document.body.appendChild(blockImmute);
        krzyzykWins++;
        console.log('wygrana krzyżyk');
        whoWon.textContent="Brawo krzyżyk!";
        resultOfwinsKrzyzykANDkolko[1].textContent=`Krzyżyk: ${krzyzykWins}`;
        document.body.appendChild(result);
        whosWinning();
        setTimeout(clear,8000);
    }
    else{
        console.log("graj dalej");
        isTableFull();
    }


    if((kolkoWins-1)===krzyzykWins){
        motivate.textContent="Krzyżyk!, prawie go masz, tylko 1 punkt... nie poddawaj się!";
    }
    else if((krzyzykWins-1)===kolkoWins){
        motivate.textContent="Kółko!, prawie go masz, tylko 1 punkt... nie poddawaj się!";
    }else{
        motivate.textContent="";
    }

       
   
}


function whosWinning(){
    if(kolkoWins>krzyzykWins){
        winner.textContent="Kółko!, jesteś na prowadzeniu, sigue tu buena racha!!";

    }else if(krzyzykWins>kolkoWins){
        winner.textContent="Krzyżyk!, jesteś na prowadzeniu, sigue tu buena racha!!";
    }else{
        winner.textContent="cichy remis...";
    }

    
}


const index=cuadrados.length;

function isTableFull(){

 console.log("INDEX: "+index);
 console.log("How meny elements: "+howMenyElement);

 if(howMenyElement===index){
    console.log("HOW MENY ELEMENT :"+howMenyElement);

    whoWon.textContent="Nikt nie wygrał ehhh...  spróbujcie jeszcze raz";
    document.body.appendChild(result);
    document.body.appendChild(blockImmute);
    setTimeout(clear,8000);
 }

  
}

// let changeFromKolko=true;


function changeturn(){
    if(kolkoTURN){
        // changeFromKolko=!changeFromKolko;
        console.log("dzialam");
        whooseTurn.textContent="krzyżyk";
        kolkoTURN=!kolkoTURN;

        btnChange.style.color="rgb(152, 193, 121)";
        btnChange.style.backgroundColor="  rgb(8, 107, 64)";
        btnChange.style.borderColor="rgb(152, 193, 121)";
    }else{
        // changeFromKolko=!changeFromKolko;
        console.log("dzialam");
        whooseTurn.textContent="kółko";
        kolkoTURN=!kolkoTURN;

        btnChange.style.color=" rgb(8, 107, 64)";
        btnChange.style.backgroundColor="rgb(152, 193, 121)";
        btnChange.style.borderColor="rgb(8, 107, 64)";
    }

}
let go=false;

const canMove=()=>{
    go=!go;
    menyWithLigue.style.opacity="0.9";

}
const stopMove=()=>{
    go=!go;
    menyWithLigue.style.opacity="1";
}

const move=(e)=>{
   if(go){
    console.log("ruszam");

    console.log(e.clientX);
    console.log(e.clientY);
    menyWithLigue.style.left=e.clientX+"px";
    menyWithLigue.style.top=e.clientY+"px";
   }


}



cuadrados.forEach(cuadrado=>cuadrado.addEventListener('click',put));
btnChange.addEventListener('click',changeturn);




menyWithLigue.addEventListener('mousemove',move);
menyWithLigue.addEventListener('mousedown',canMove);
menyWithLigue.addEventListener('mouseup',stopMove);
