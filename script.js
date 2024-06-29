class IconAnimate{
    #numberOfIcons;
    #icon_className;
    #iconColor_table;
    #contener;
    #animation;
    constructor(numberOfIcons,icon_className,iconColor_table,contener,animation
    ){
        this.#numberOfIcons=numberOfIcons;
        this.#icon_className=icon_className;
        this.#iconColor_table=iconColor_table
        this.#contener=contener;
        this.#animation=animation
    
    }
    #getElement(elementClass){
        const element=document.querySelector(elementClass);
        return element;

    }
    #randomNumber(max,min){
        const random=Math.floor(Math.random()*(max-min)+min);
        return random;
    }
    #randomColor(colors_table){
        const index=this.#randomNumber(colors_table.length,0);
        return colors_table[index];
    }
    #randomRotation(){
        return this.#randomNumber(360,0)+"deg";
    }
    #randomSize(){
        return this.#randomNumber(65,5)+"px";
    }
    #randomPositions(){
        const x=this.#randomNumber(this.#getScreenWidth(),15)+"px";
        const y=this.#randomNumber(this.#getScreenWidth(),40)+"px";
        return [x,y];
    }
    #randomOpacity(){
        return Math.random();
    }
    #getScreenWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    #generateIcons(number,className){
        const contener=this.#getElement(this.#contener);

        const device_width=this.#getScreenWidth();

        if(device_width<400){
            number=number/2 - 5;

        }
        else if(device_width<500){
            number=number-8;
        }

        for(let i=0;i<number;i++){
            const icon=document.createElement('li');
            icon.style.opacity="0";
            icon.className=className;
            icon.style.position="absolute";
            icon.style.transition="all 2s";
            icon.style.color=this.#randomColor(this.#iconColor_table);
            icon.style.zIndex="9999";
            // dodanie animacji
            
            icon.addEventListener("mouseenter",()=>{
                icon.style.animation=this.#animation;
               
            })

            
            
            icon.style.fontSize=this.#randomSize();
            

            // Płynne pojawienie
            
            setTimeout(()=>{
                icon.style.opacity=this.#randomOpacity();
                icon.style.rotate=this.#randomRotation();
     
            },100)

            // POZYCJA
            const positions=this.#randomPositions();
            icon.style.left=positions[0];
            icon.style.top=positions[1];

            contener.appendChild(icon);

            

        }
    }

    
 

    #setProperties(className,htmltag,
        color,position,left,top,fontSize,opacity,transition,isMain
    ){
        const element=document.createElement(htmltag);
        element.className=className;
        element.style.color=color;
        element.style.position=position;
        element.style.left=left;
        element.style.top=top;
        element.style.transform=`translate(-${left},-${top})`;
        element.style.fontSize=fontSize;
        element.style.opacity=opacity;
        element.style.transition=transition;

        if(isMain){
            element.style.zIndex="999999";
        }


        return element;
    }

    #changeClass(element,classname,timeDelay){
       return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            element.className=classname;
        
            resolve()
       },timeDelay)
       });
    }



    start(){
        this.#generateIcons(this.#numberOfIcons,this.#icon_className);

    }
}
const shadesOfWhite = [
    "#FFFFFF", // pure white
    "#F5F5F5", // white smoke
    "#FAFAFA", // snow
    "#FFFAFA", // snow white
    "#F0F0F0", // gainsboro
    "#F8F8FF", // ghost white
    "#FDF5E6", // old lace
    "#FFF5EE"  // seashell,
];
const shadesOfBlack=[
    '#000000', // pure black
    '#0A0A0A', // very dark gray
    '#141414', // very dark gray
    '#1E1E1E', // very dark gray
    '#282828', // very dark gray
    '#323232', // very dark gray
    '#3C3C3C', // very dark gray
    '#464646'  // very dark gray
];


const positions = [
    { top: '5%', left: '10%' },
    { top: '20%', left: '30%' },
    { top: '35%', left: '50%' },
    { top: '50%', left: '70%' },
    { top: '65%', left: '20%' },
    { top: '80%', left: '40%' },
    { top: '10%', left: '60%' },
    { top: '25%', left: '80%' },
    { top: '40%', left: '15%' },
    { top: '55%', left: '35%' },
    { top: '70%', left: '55%' },
    { top: '15%', left: '25%' },


];


const stars= new IconAnimate(30,"fa-solid fa-star star",shadesOfWhite,".background","starStart 1s both, starEnd 2s 3s both")

stars.start();

const rocket= new IconAnimate(20,"fa-solid fa-rocket rocket",shadesOfWhite,".projectsContener","rocket 1s both")

rocket.start();

const moon= new IconAnimate(20,"fa-regular fa-moon moon",shadesOfWhite,".aboutContener","glow 4s  alternate infinite both");
moon.start();

//----------------------INTERACKCJA DLA IKON----------------------------


class IconInteraction{

    constructor(){   
        
    }

    getElement(element){
        const item=document.querySelector(element);
      
        return item
    }
    #getElements(elements){
        const items=[...document.querySelectorAll(elements)];
       
        return items
    }
    #addClass(element,className){
        
        return element.classList.add(className);
    }
    enRoll(element,elementToShow,elementListener,height,
        classNameONE,classNameTWO
    ){
        let roll=true;
        const icon=this.getElement(element);
        const result=this.getElement(elementToShow);

        icon.addEventListener(elementListener,()=>{
           if(roll){
            roll=!roll;
            result.style.height=height+"px";
            result.style.borderWidth="2px"
            icon.className=classNameTWO
           }
           else{
            roll=!roll;
            result.style.height=0+"px";
            result.style.borderWidth="0px"
            icon.className=classNameONE;
           }
        })
    }
    addAnimation(
        // PODSTAWOWE
        element, animation, eventListener,
       
        //ROZSZEZONE O ZMIANE IKONY
        returnToPrev,oldIcon,newIcon,
        // ROZSZEONE O DODANIE INNYCH ANIMACJI NA INNE ELEMENTY
        goWithNextAnimations,elementOne,elementTwo,elementThree,aniamtionOne,animationTwo, animationThree
        
    ) {
        const getElement = this.getElement(element);
        if(eventListener){
            getElement.addEventListener(eventListener, () => {
            getElement.style.animation = animation;
            
           

            //ROZSZEZONE O ZMIANE IKONY

           if(oldIcon && newIcon!=undefined){
            getElement.className=newIcon;
           }
          
            
            if(returnToPrev){
                getElement.addEventListener("animationend",()=>{
                    getElement.style.animation="none";        
    
                    if(oldIcon && newIcon!=undefined){
                        getElement.className=oldIcon;
                       }
                })
            }
            //---


             // ROZSZEONE O DODANIE INNYCH ANIMACJI NA INNE ELEMENTY
            if(goWithNextAnimations){
                const itemOne=this.getElement(elementOne);
                const itemTwo=this.getElement(elementTwo);
                const itemThree=this.getElement(elementThree);

                getElement.addEventListener("animationend",()=>{
                    itemOne.style.animation=aniamtionOne;
                    itemTwo.style.animation=animationTwo;
                    itemThree.style.opacity="0";

                   itemOne.addEventListener("animationend",()=>{
                    
                    itemThree.style.animation=animationThree;
                   })
                   
                })


            }
            //---
            
            
             
        });
        }else{
            getElement.style.animation = animation;
        }
    }
    #removeElements(clasName){
        const elements=document.querySelectorAll(clasName);
        elements.forEach(element=>element.remove());
    }

    #feelEnOfAnimation(element){
        const item=this.getElement(element);
        item.addEventListener("animationend",()=>{
            return true;
        })
    }
    #applyMode(isDarkMode, lightmode_colors, darkmode_colors, root){
        let colors=isDarkMode ? darkmode_colors: lightmode_colors;

        for(let i=0;i<colors.length;i++){
            root.style.setProperty(`--color${i+1}`,colors[i])
        }
        this.#removeElements(".star");
        this.#removeElements(".rocket");
        this.#removeElements(".moon");

        const shades=isDarkMode ? shadesOfWhite:shadesOfBlack;

        const stars = new IconAnimate(25, "fa-solid fa-star star", shades, ".background", "starStart 1s both, starEnd 2s 3s both");
        stars.start();

        const rockets = new IconAnimate(25, "fa-solid fa-rocket rocket", shades, ".projectsContener", "rocket 1s both");
        rockets.start();

        if(shades===shadesOfWhite){
            const moon= new IconAnimate(25,"fa-regular fa-moon moon",shades,".aboutContener","glow 4s alternate infinite both");
            moon.start();
        }
        else if(shades===shadesOfBlack){
            const moon= new IconAnimate(25,"fa-regular fa-moon moon",shades,".aboutContener","reverseGlow 4s alternate infinite both");
            moon.start();
        }

        
    }
    changemode(lightmode_colors,darkmode_colors,element){
        const root=document.documentElement;
        const item=this.getElement(element);

        let change=localStorage.getItem("MODE")==="dark" ? true: false;
        this.#applyMode(change,lightmode_colors,darkmode_colors,root);


        item.addEventListener("click",()=>{
            item.style.pointerEvents="none";
            change=!change;

             //ZAPIS DO LOCAL STORAGE
             localStorage.setItem("MODE",change ? "dark": "light");
            //--

            item.addEventListener("animationend",()=>{
                item.style.pointerEvents="all";
            });

            this.#applyMode(change,lightmode_colors,darkmode_colors,root);
        });   
    }
   
}

const darkmode=[
    "rgb(4, 0, 29)",
    "rgb(76, 85, 141)",
    "rgb(141, 143, 167)",
    "rgb(238, 238, 238)"
];

const lightmode=[
    "rgb(238, 238, 238)",
    "rgb(141, 143, 167)",
    "rgb(76, 85, 141)",
    "rgb(4, 0, 29)"
];

const navBar=new IconInteraction();
navBar.enRoll(".barIcon",".navList","click",220,"fa-solid fa-bars barIcon","fa-solid fa-xmark barIcon");

const lamp=new IconInteraction();
lamp.addAnimation(".lamp","roll 1.5s forwards","click",true);
lamp.changemode(lightmode,darkmode,".lamp");

const logo=new IconInteraction();
logo.addAnimation(".logo","fly 1s forwards","click",true,"fa-solid fa-user-astronaut logo","fa-solid fa-rocket logo");


const openLetter_star=new IconInteraction();
openLetter_star.addAnimation(".starIconOpen","fallStar 2s cubic-bezier(.23,1,.63,.53) both","click",false,undefined,undefined,true,".upSection",".paper",".sectionAbout"," openLetter 2s both","showLetter 4s both","moving 1s alternate infinite ,moveUp 0.5s both");



//--------------------------NAWIGACJA-----------------------

class Navigation{
    #element;
    #purposeElement;
    #eventListener;
    constructor(element,purposeElement,eventListener){
        this.#element=element;
        this.#purposeElement=purposeElement;
        this.#eventListener=eventListener;
    }
    #getElement(element){
        const item=document.querySelector(element);
       
        return item;
    }
    scroll(){
        const element=this.#getElement(this.#element);
        const purposeElement=this.#getElement(this.#purposeElement);

        element.addEventListener(this.#eventListener,()=>{
            purposeElement.scrollIntoView({
                behavior:"smooth",
                
            })

        })

    }
    

}

const projectsSection=new Navigation(".projectsLi",".projectsContener","click");
projectsSection.scroll();

const aboutSection=new Navigation(".aboutLi",".aboutContener","click");
aboutSection.scroll();

const contactSection=new Navigation(".contactLi",".navigateContact","click");
contactSection.scroll();

const goNextBtn=new Navigation(".goNext",".aboutContener","click");
goNextBtn.scroll();

const goNextBtn_sectionAbout=new Navigation(".sectionAbout",".projectsContener","click");
goNextBtn_sectionAbout.scroll();

const goNextBtn_projectsSection=new Navigation(".projectSection",".navigateContact","click");
goNextBtn_projectsSection.scroll();



//Animacja na sekcje kontakt:

function addProperties(element,transitionI,isTopLeft,topBottomI,leftRightI,opacityI){
    element.style.transition=transitionI;
   if(isTopLeft){
    element.style.top=topBottomI;        
    element.style.left=leftRightI;   
   }     
   else{
    element.style.bottom=topBottomI;        
    element.style.right=leftRightI;   
   }
    element.style.opacity=opacityI;  
}

function animation(elementTohover){
    const itemHover=document.querySelector(elementTohover);

    const square1a=new IconInteraction().getElement(".square1a");
    const square2a=new IconInteraction().getElement(".square2a");
    const square1b=new IconInteraction().getElement(".square1b");
    const square2b=new IconInteraction().getElement(".square2b");

    itemHover.addEventListener("mouseenter",()=>{

        //squares1

        addProperties(square1a,"all 1s ease .6s",true,"-32px","5px",".5");
        addProperties(square2a,"all 1s ease",true,"13px","39px","1");     
        
        //squares2

        addProperties(square1b,"all 1s ease .6s",false,"-32px","5px",".5");
        addProperties(square2b,"all 1s ease",false,"13px","39px","1");
    });

    
    itemHover.addEventListener("mouseleave",()=>{

        //squares1

        addProperties(square1a,"all 1s ease .6s",true,"13px","39px","1");
        addProperties(square2a,"all 1s ease",true,"58px","73px",".5");     
        
        //squares2

        addProperties(square1b,"all 1s ease .6s",false,"13px","39px","1");
        addProperties(square2b,"all 1s ease",false,"58px","73px",".5");
    });


}

animation(".contactContener");





