
const mainBody=document.querySelector('#ep1_SECTION');
const allSPAN=document.querySelectorAll('.letterS');
const bigCirculo=document.querySelector(".circulo");
const mushroomImage=document.querySelector('.mushroomImg');

let left_span=20;
let top_span=40;
let retraso_span=10;


for(let i=0;i<allSPAN.length;i++){
    left_span+=20;
    retraso_span+=0.3;
    allSPAN[i].style.left=left_span +"px";
    allSPAN[i].style.top=top_span +"px";
    allSPAN[i].style.animationDelay=retraso_span+"s";
    allSPAN[i].style.animationFillMode=retraso_span+"s";


}








const allminiCirculo= document.querySelectorAll('.miniCirculo');

let left_miniCirculo=-40;
// 1- niebieski, 2- zielony, 3- czerwony
const colors_miniCirculos=['rgb(10, 0, 97)','rgb(24, 133, 0)','rgb(180, 0, 0)'];





function animateCirculo(firstTime_DELAY,i,eventListener,name_animacion_SCALE,name_animacion_SEDUCIR,name_animacion_SHOW_CONTENT,name_animacion_FILL_BACKGROUND, headline_TEXT, sub_TEXT,italic_TEXT,name_animacion_DIMINISH_CIRCULO){
    //,fin_TEXT,fin_SPACE_ELEMENT

    let iteration=0;
    let iteration2=0;


        setTimeout(()=>{
            

            allminiCirculo[i].style.animation=`${name_animacion_SCALE} 3s cubic-bezier(1,.09,0,.98) forwards, ${name_animacion_SEDUCIR} .6s 2.8s ease alternate infinite`;

            if(i>=1 && i<allminiCirculo.length){
         
                allminiCirculo[--i].style.visibility="hidden";
                i++;
            }

            allminiCirculo[i].addEventListener(eventListener,function(){
                
                iteration++;
                if(iteration===1){
                
                    
                allminiCirculo[i].style.animation=`${name_animacion_SHOW_CONTENT} 1.6s cubic-bezier(1,.09,0,.98) both`;

                mainBody.style.animation=`${name_animacion_FILL_BACKGROUND} 1s linear forwards`;

                const txt=document.querySelector(headline_TEXT);
                const subtxt=document.querySelector(sub_TEXT);
                const subtxt_i=document.querySelectorAll(italic_TEXT);
                txt.style.color="white";
                txt.style.letterSpacing="0.2px";
                subtxt.style.color="beige";
                subtxt_i.forEach(i=>i.style.color="#af0000");

                

                setTimeout(
                    function(){
                       
                        allminiCirculo[i].style.animation=`${name_animacion_SHOW_CONTENT} 1.6s cubic-bezier(1,.09,0,.98) both, ${name_animacion_SEDUCIR} 0.6s ease alternate infinite`;

                        
                        iteration2=0;
                        allminiCirculo[i].addEventListener(eventListener,function(){
                            iteration2++;
                            if(iteration2===1){

                             
                                txt.style.transitionDelay="0";
                                subtxt.style.transitionDelay="0";
                                subtxt_i.forEach(i=>{
                                    i.style.transitionDelay="0";
                                    i.style.color="rgba(0, 0, 0, 0)";
                                });
    
                                txt.style.color="rgba(0, 0, 0, 0)";
                                subtxt.style.color="rgba(0, 0, 0, 0)";
                                allminiCirculo[i].style.animation=`${name_animacion_DIMINISH_CIRCULO} 3s  cubic-bezier(1,.09,0,.98) both`;
// TIMEOUT NA POKAWIENIE SIE NOWEJ KROPKI
                                setTimeout(()=>{


                                    if(i<allminiCirculo.length-1){
                                        allminiCirculo[++i].classList.add('goo');
                                     
                                    }else{
                                     
                                        {allminiCirculo[0].style.animation="show_1 5.2s 2s  cubic-bezier(1,.48,0,.98) forwards";
                                      
                                        } 

                                        
                                        {allminiCirculo[1].style.animation="show_2 5.2s  2s cubic-bezier(1,.48,0,.98)forwards";
                                        
                                        } 

                                        {allminiCirculo[2].style.animation="show_3 5.2s 2s  cubic-bezier(1,.48,0,.98) forwards";
                                  
                                        } 

                                        {bigCirculo.style.animation="show_bigCirculo 7s 5s cubic-bezier(.98,-0.01,.16,1.02) forwards";

                                        const endSpace=document.querySelector('.finTxt');
                                    
                                       endSpace.style.animation="txt_end_ani 3.5s 13s cubic-bezier(.75,.3,0,.97)forwards";

                                       setTimeout(()=>{
                                        diminishVolume();
                                    
                                        create_NEXT_LEVEL_btn('#ep1_SECTION',"ep2btnDiv","ep2btn","EPIZODO DOS",empezar_EP2);
                                       },25000)
                                       

                                 
                                        
                                        }

                                        
                           
                                    }
                                    
                                    

                                },3100)
                                
                            }

                            })
                    },7200
                )
               

            }
                
            });
        },firstTime_DELAY)
}

let timeToStart_2=37000;

for(let i=0;i<allminiCirculo.length;i++){

    
    allminiCirculo[i].style.left=left_miniCirculo+"px";
    left_miniCirculo+=40;
    allminiCirculo[i].style.backgroundColor=colors_miniCirculos[i];

    if(i===0){
        allminiCirculo[i].style.animationName=`miniCirculoANI_1`;
        
        animateCirculo(23800,i,'mousemove',"scaleMiniCirculo_1","seducir","showContent","fillBackground",".hiddenText",".subtxt",".subtxt i","diminish","show_1");


        
    }
    else if(i===1){
        let stopInterval=false;
       
        allminiCirculo[i].style.animationName="miniCirculoANI_2";

        setTimeout(()=>{
            setInterval(()=>{
                if(stopInterval===false){
                    if(allminiCirculo[i].classList.contains('goo')){
                        stopInterval=true;
                        

                        allminiCirculo[i].style.animation="greenCirculoAppear 2s ease both"
                        // allminiCirculo[--i].style.opacity="0";
                        // i++;
                        animateCirculo(3000,i,'mousemove',"scaleMiniCirculo_2","seducir","showContent_2","fillBackground",".hiddenText_2",".subtxt_2",".subtxt_2 i","diminish_2","show_2");
                    }
                }

            },2000)
        },timeToStart_2)
        
          
    }
    else{
        let stopInterval=false;

        allminiCirculo[i].style.animationName="miniCirculoANI_3";

        setTimeout(()=>{
            setInterval(()=>{
                if(stopInterval===false){
                    if(allminiCirculo[i].classList.contains('goo')){
                        stopInterval=true;
                        

                        allminiCirculo[i].style.animation="redCirculoAppear 2s ease both";
                        animateCirculo(2000,i,'mousemove',"scaleMiniCirculo_3","seducir","showContent_3","fillBackground",".hiddenText_3",".subtxt_3",".subtxt_3 i","diminish_3","show_3");

                        
                    }
                }

            },2000)
        },timeToStart_2+18000)
      
    }
}