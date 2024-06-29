// create next-level btn
function create_NEXT_LEVEL_btn(mainContener,divBtn_className,btn_className,text_content,nextLvlFunction){
    const main_contener=document.querySelector(mainContener);


    const button_DIV=document.createElement('div');
    button_DIV.className=divBtn_className;
    button_DIV.style.zIndex="9999999";
                                       

    const button=document.createElement('button');
    button.className=btn_className;
    button.textContent=text_content;
    button.style.opacity="1";
    main_contener.appendChild(button_DIV)
    button_DIV.appendChild(button);


    button.addEventListener('click',nextLvlFunction);

}

function create_and_append_SCRIPT(section_id,stylelink_id,script_src,stylesheet_link){

    const get_section=document.getElementById(section_id);
    const get_stylelink=document.getElementById(stylelink_id);

    const make_script=document.createElement('script');
    make_script.src=script_src;

    get_section.appendChild(make_script);
    get_stylelink.setAttribute('href',stylesheet_link);


}


//darkMode

const focoLine=document.querySelector('header .line');
const foco=document.querySelector('.iconDarkmode');
const stylesheet=document.getElementById('stylesheet');
const escondito=document.createElement('div');
escondito.className="escondito";
const displayDarkmode=document.querySelector('.displayDarkmode');
const logo=document.querySelector('.logo');

let change=true;
const lightmode="css/lightmode.css";
const darkmode="css/stylev2.css";

const logoColorLight="img/mushroom (1).png";
const logoColorDark="img/mushroom.png";
let zmienna=3000;
const clearTime=1800;



function clearAnimations(){
    foco.style.animation="none";
    focoLine.style.animation="none";

    
    foco.style.pointerEvents="all";   
    focoLine.style.pointerEvents="all"; 

}

let change2=true;
function changemode2(){
    if(change2){
        
        change2=!change2
        foco.style.animation="changemode 2s forwards";
        focoLine.style.animation="enlargar 2s forwards";

        setTimeout(clearAnimations,2000);

        foco.style.pointerEvents="none";   
        focoLine.style.pointerEvents="none"; 

        logo.src=logoColorDark; 
        stylesheet.setAttribute('href',lightmode);

    }
    else{
        change2=!change2
        foco.style.animation="changemode 2s forwards";
        focoLine.style.animation="enlargar 2s forwards";
        foco.style.pointerEvents="none";   
        focoLine.style.pointerEvents="none"; 
        setTimeout(clearAnimations,2000);

        logo.src=logoColorLight; 
        stylesheet.setAttribute('href',darkmode);


    }


}


foco.addEventListener('click',changemode2);

//navigation

const navIcon=document.querySelector('.iconBar');
const nav=document.querySelector('.nav')

let show=true;
function showNav(){
    if(show){
        show=!show;
        navIcon.style.animationName="openNavBar";
        nav.style.display="block";
    }
    else{
        show=!show;
        navIcon.style.animationName="closeNavBar";
        nav.style.display="none";

    }
    

}


navIcon.addEventListener('click',showNav);


//--------EMPEZAR BUTTON E1----------

const empezarBtn=document.querySelector('.startbtn .btn');
const setStyleE1=document.getElementById('ep1');
const maindisplay=document.querySelector('main');
const ep1SCRIPT=document.createElement('script');




const stylesheetEp1="css/e1.css";
const ep1JSLink="js/empezar.js";

ep1SCRIPT.src=ep1JSLink;

function empezar_EP1(){

    maindisplay.style.display="flex";
    setStyleE1.setAttribute('href',stylesheetEp1);
    document.body.appendChild(ep1SCRIPT);
    empezarBtn.style.pointerEvents="none";
    empezarBtn.style.animation="none";

}

empezarBtn.addEventListener('click',empezar_EP1);

// -------WPROWADZENIE---------




function empezar_EP2(){
    console.log("moge zaczynac drugi");

    create_and_append_SCRIPT('ep2_SECTION','link_EP2',"ep2/ep2.js","ep2/ep2.css");


}

// EP 3

function go_to_EP3(){
    console.log("moge trzeci");
}







