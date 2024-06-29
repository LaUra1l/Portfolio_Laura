class Busqueda{
  #selector;
  #objetos_para_encontrar;
  #selectorVariant_1;
  #selectorVariant_2;
  #objeto_img_open;
  #first_animation;
  #class_to_add;
  #class_to_remove;
  #space_to_enviarNumero;
  #repetir_btn_class;
  #spaceToAppend;
  #goPromise= false;
  #x_IN=0;
  #y_IN=0;
  #iterator=0;


  constructor(selector,objetos_para_encontrar,selectorVariant_1,selectorVariant_2,objeto_img_open,

    first_animation,class_to_remove,class_to_add,
    space_to_enviarNumero,

    repetir_btn_class,spaceToAppend
    )
    
    {

    this.#selector=selector;
    this.#objetos_para_encontrar=objetos_para_encontrar;
    this.#selectorVariant_1=selectorVariant_1;
    this.#selectorVariant_2=selectorVariant_2;
    this.#objeto_img_open=objeto_img_open;
    this.#first_animation=first_animation;
    this.#class_to_add=class_to_add;
    this.#class_to_remove=class_to_remove;
    this.#space_to_enviarNumero=space_to_enviarNumero;
    this.#repetir_btn_class=repetir_btn_class;
    this.#spaceToAppend=spaceToAppend;


  }

  crear_repetir_btn(className,textContent,spaceToAppend){
    const btn=document.createElement('button');
    btn.className=className;
    btn.textContent=textContent;
    const getSpace=document.querySelector(spaceToAppend);

    return getSpace.appendChild(btn);

  }

  showAclualNumberOf_OBJETOS(space_to_enviarNumero,className_to_buscar){
    const space=document.querySelector(space_to_enviarNumero);
    const getACTUAL_number_OF_faltados=[...document.getElementsByClassName(className_to_buscar)];

    console.log('actual')

    space.textContent=`Te faltan: ${getACTUAL_number_OF_faltados.length} tesoros`;

    if(getACTUAL_number_OF_faltados.length===0){
      space.textContent=`ENHORABUENA!`;

      create_NEXT_LEVEL_btn('#ep2_SECTION','ep3btnDiv','ep3btn',"EPIZODO TRES",go_to_EP3)

      const repetir_btn=this.crear_repetir_btn(this.#repetir_btn_class,"REPETIR",this.#spaceToAppend);
      
      repetir_btn.addEventListener('click',this.resetGame);
    

    }

   

  }
 
      




  

  #setIcon(elementSelector){
    const get_elementSelector=document.querySelector(elementSelector);
    if(this.#goPromise===false){
      get_elementSelector.style.backgroundImage=`url("${this.#selectorVariant_2}")`;
    }
    else{
      get_elementSelector.style.backgroundImage=`url("${this.#selectorVariant_1}")`;
    }
  }

  #get_position_on_element(elementSelector){
   
    elementSelector.addEventListener('mousedown',(e)=>{
   

      this.#goPromise=!this.#goPromise;

      this.#x_IN=e.offsetX;
      this.#y_IN=e.offsetY;
      this.#setIcon(this.#selector);
     
    });
  }

  #findObjects(elementSelector,objetos){
    const get_objetos=document.querySelectorAll(objetos);
    const rect2=elementSelector.getBoundingClientRect();

    
    for(let i=0;i<get_objetos.length;i++){
      const rect1=get_objetos[i].getBoundingClientRect();

      if(!(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom)){
          return [true,get_objetos[i]];
        }

    }
    return false;

  }
  #objetoEncontrado(objeto,first_animation,class_to_remove,class_to_add){

  

    
   objeto.style.opacity="1";
   objeto.style.backgroundImage=`url("${this.#objeto_img_open}")`;
   objeto.style.animation=`${first_animation} 0.5s 0.4s alternate infinite`;

   objeto.addEventListener('click',()=>{


    this.#iterator+=2;

    objeto.style.animation="none";
    objeto.style.backgroundImage="none";
    objeto.style.left="50%";
    objeto.style.top="-12%";

    objeto.style.transform="translate(-50%,12%)";
    objeto.firstChild.style.backgroundImage=`url("${objeto.dataset.imgsrc}")`;
    
    objeto.classList.remove(class_to_remove);
    
    objeto.classList.add(class_to_add);

    objeto.style.zIndex=this.#iterator;

       
    this.showAclualNumberOf_OBJETOS(this.#space_to_enviarNumero,this.#class_to_remove);



   })

  }
 

  empezar_a_buscar(){
    console.log("zaczynam gre");
    const mainElement=document.querySelector(this.#selector);
    mainElement.style.position="absolute";

    this.#get_position_on_element(mainElement);

    mainElement.addEventListener('mousemove',(e)=>{
      if(this.#goPromise){
        let x=e.clientX-this.#x_IN;
        let y=e.clientY-this.#y_IN;
  
        mainElement.style.left=x+"px";
        mainElement.style.top=y+"px";

       if( this.#findObjects(mainElement,this.#objetos_para_encontrar)[0]){

        console.log("znaleziony");
        const elementFinded=this.#findObjects(mainElement,this.#objetos_para_encontrar)[1];

        this.#objetoEncontrado(elementFinded,this.#first_animation,this.#class_to_remove,this.#class_to_add);
   
       
       }
       else{
        console.log('nie zmaleziony ');
       }
     
      }

    })

    

  }

  resetGame() {
    console.log("resetuje")
  const mainElement = document.querySelector(".linterna");
  mainElement.style.left = '80%';
  mainElement.style.top = '80%';
  // bollean = false;
  
  const tesoros = document.querySelectorAll(".mostrar_informaciones");
  tesoros.forEach(tesoro => tesoro.remove());
  
  if (window.innerWidth > 752) {
    createObjetos('.contenerCard', 8, 'div', 'card', posiciones_large, mushrooms);
  
  } else {
    createObjetos('.contenerCard', 5, 'div', 'card', posiciones_small, mushrooms);
  
  }
  
  
  const btnremoveget=document.querySelectorAll('.repite_epizodo');
  btnremoveget.forEach(btn=>btn.remove())
  
  const btnnextlvlget=document.querySelectorAll('.ep3btnDiv');
  btnnextlvlget.forEach(btn=>btn.remove());
  

  
  
  
  
  }





}



const posiciones_large=[
  [6,20],
  [28,19],
  [51,21],
  [21,52],
  [-7,10],
  [-5,59],
  [45,54],
  [78,45],
  [60,44],
  [9,2],
  [78,1],
  [40,-4],
  [-9,-15],
  [76,-20],
  [60,-15],
  [70,30],
  [35,40],
  [10,50],
  [-10,40],
  [-9,-2]

];

const posiciones_small=[
  [6,20],
  [28,19],
  [51,21],
  [21,52],
  [-7,10],
  [-5,59],
  [9,2],
  [-9,-15],
  [35,40],
  [10,50],
  [-10,40],
  [-9,-2]

];

const mushrooms = [
  {
    polName: "Prawdziwek",
    latName: "Boletus edulis",
    imageUrl: "https://bi.im-g.pl/im/3f/87/16/z23622463IER,Borowik-szlachetny--czyli-prawdziwek--jest-najbard.jpg"
  },
  {
    polName: "Kania",
    latName: "Macrolepiota procera",
    imageUrl: "https://static5.redcart.pl/templates/images/thumb/7700/1500/1500/pl/0/templates/images/products/7700/a48ea39189d76d2fdc1750e0c65080c6.jpg"
  },
  {
    polName: "Kurka/ Pieprznik jadalny",
    latName: "Cantharellus cibarius",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cantharellus_cibarius_20090717-02.jpg/360px-Cantharellus_cibarius_20090717-02.jpg"
  },
  {
    polName: "Koźlarz białawy",
    latName: "Leccinum holopus",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2010-09-02_Leccinum_holopus_crop.jpg"
  },
  {
    polName: "Pieczarka brązowa",
    latName: "Agaricus cupreobrunneus ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cupreobrunneus.jpg/360px-Cupreobrunneus.jpg"
  },
  {
    polName: "Gołąbek smaczny",
    latName: "Russula delica",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Russula_delica1.jpg/360px-Russula_delica1.jpg"
  },
  {
    polName: "Maślak zwyczajny",
    latName: "Suillus luteus",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Suillus_luteus_2.jpg/360px-Suillus_luteus_2.jpg"
  },
  {
    polName: "Podgrzybek brunatny",
    latName: "Imleria badia",
    imageUrl: "https://a.allegroimg.com/original/128e01/d9da51164355923b56dca298b8fe"
  },
  {
    polName: "Maślanka wiązkowa",
    latName: "Hypholoma fasciculare",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Hypholoma_fasciculare_LC0091.jpg/1200px-Hypholoma_fasciculare_LC0091.jpg"
  },
  {
    polName: "Koźlarz czerwony",
    latName: "Leccinum aurantiacum",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjCVNGitem9Df8pe15cDPlsnOUWdsdchDRTorKIGdFbu40rhT"
  },
  {
    polName: "Muchomor plamisty",
    latName: "Amanita pantherina",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Amanita_pantherina_G25.JPG/240px-Amanita_pantherina_G25.JPG"
  },
  {
    polName: "Muchomor czerwieniejący",
    latName: "Amanita rubescens",
    imageUrl: "https://www.first-nature.com/fungi/images/amanitaceae/amanita-rubescens1.jpg"
  },
  {
    polName: "Lisówka pomarańczowa",
    latName: "Hygrophoropsis aurantiaca",
    imageUrl: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRefH64J7Qq-GHH3tx1Wn3cZPWjBAy8vTNwXAKb7-MV-yE84__ZNHSLXJ91eYPWAtYWe5d931YD1CfdUpA"
  },
  {
    polName: "Muchomor czerwony",
    latName: "Amanita muscaria",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg"
  },
  {
    polName: "Koźlarz czarnobrązowy",
    latName: "Leccinum melaneum",
    imageUrl: "https://www.rynek-rolny.pl/images/marketentries/1140x550/8f99b33d675ba354147f614cd1dd0079-3.jpg"
  },
  {
    polName: "Pieczarka łąkowa",
    latName: "Agaricus campestris",
    imageUrl: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRkfLmnRbkE9dbuKJp5rs0uMcBfpGgqVgqEwU9lLynboRMhz5_70slYJ80g8-HnLxRqJ4irWyUHqqsJLWo"
  },
  {
    polName: "Gołąbek brudnożółty",
    latName: "Russula ochroleuca",
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfNwJLRCJjrSyO3s7cOO6B7m8xerGkwZSeakJszx3AgvVAf5kp"
  }
];





function generateTable_uniques(count, min, max) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min )) + min;
    uniqueNumbers.add(randomNumber);
  }
  return Array.from(uniqueNumbers);
}




function createObjetos(contener,number_of_objetos,element_definition,class_card_to_add,table_with_positions,table_with_especies){

  const get_contener=document.querySelector(contener);
  


  const randomNumbers_p=generateTable_uniques(table_with_positions.length,0,table_with_positions.length);

  const randomNumbers_m=generateTable_uniques(table_with_especies.length,0,table_with_especies.length);

  console.log(randomNumbers_p);
  console.log(randomNumbers_m);
 

  for(let i=0;i<number_of_objetos;i++){



    const card=document.createElement(element_definition);
    card.style.position="absolute";
    card.style.left=table_with_positions[randomNumbers_p[i]][0]+"%";
    card.style.top=table_with_positions[randomNumbers_p[i]][1]+"%";
    card.dataset.especia=table_with_especies[randomNumbers_m[i]].latName;
    card.dataset.gatunek=table_with_especies[randomNumbers_m[i]].polName;
    card.dataset.imgsrc=table_with_especies[randomNumbers_m[i]].imageUrl;
 
   
    card.classList.add(class_card_to_add);

    const content=document.createElement(element_definition);
    content.style.backgroundImage=card.dataset.imgSrc;

    const headline_H3=document.createElement('h3');
    headline_H3.textContent=card.dataset.especia;

    const subTxt_P=document.createElement('p');
    subTxt_P.innerHTML=`<i>${card.dataset.gatunek}</i>`;

    content.appendChild(headline_H3);
    content.appendChild(subTxt_P);
    card.appendChild(content);
    get_contener.appendChild(card);




  }
}



// ____________________________

const width=window.innerWidth;
console.log(width);

if(width>752){

  console.log("wchodze do wiekszego");

  createObjetos('.contenerCard',8,'div','card',posiciones_large,mushrooms);


}
else{

  console.log("wchodze do mniejszego");

  createObjetos('.contenerCard',5,'div','card',posiciones_small,mushrooms);

}


const busqueda=new Busqueda('.linterna',".card","img/flashlight.png","img/flashlight (1).png","img/gold (1).png",'seducir','card','mostrar_informaciones','.tesoros_faltados',"repite_epizodo",".btnSpace");

busqueda.empezar_a_buscar();
busqueda.showAclualNumberOf_OBJETOS('.tesoros_faltados','card');





