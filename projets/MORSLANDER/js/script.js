

class App {
    #goPromise = false;
    constructor() {

    }

    translate(table_with_translations, input, place_to_paste) {
       if(document.querySelector(input)){
        const get_input = document.querySelector(input);

        const get_place_to_paste = document.querySelector(place_to_paste);

        get_input.addEventListener('input', function() {
            const inputValue = get_input.value.toLowerCase();
            get_place_to_paste.innerHTML = ''; 

            for (const letter of inputValue) {
                for(let i=0;i<table_with_translations.length;i++){
                    if(table_with_translations[i].letter===letter){
                        console.log("znalazlem");
                        get_place_to_paste.innerHTML+=table_with_translations[i].mors;

                        
                    }
                }
            }
        });
       }
    
    }

 

    addClass(icon, icon_style_after, icon_style_before, element, class_to_add, eventListener) {
        if(document.querySelector(element)){
            const get_element = document.querySelector(element);
            const get_icon = document.querySelector(icon);
            get_icon.style.cursor="pointer";

        get_icon.addEventListener(eventListener, () => {
            this.#goPromise = !this.#goPromise;

            if (this.#goPromise) {
                get_icon.className = icon_style_after;
                get_element.classList.add(class_to_add);
            } else {
                get_icon.className = icon_style_before;
                get_element.classList.remove(class_to_add);
            }
        });

        }
        
    }

    translate_from_mors(element_creator,shadow_for_element_creator,shadow_removed,eventListener,space_to_append_elements,element_appended_definition,){

        if(document.querySelector(element_creator)){
            console.log("moge tlumaczyc mors")
            const get_element_creator=document.querySelector(element_creator);
            const get_space_to_append_elements=document.querySelector(space_to_append_elements);

            get_element_creator.addEventListener(eventListener,()=>{
                get_element_creator.style.boxShadow=shadow_for_element_creator;
                get_space_to_append_elements.innerHTML+=element_appended_definition;

                setTimeout(()=>{
                    get_element_creator.style.boxShadow=shadow_removed;
                },600);


            })

        }

    }

    translate_from_mors_icons(table_with_translations, place_with_mors, place_to_paste, translator_mors, delete_btn) {
        let mors_code = '';
    
        if (document.querySelector(place_to_paste)) {
            const get_place_to_paste = document.querySelector(place_to_paste);
            const get_translator_mors = document.querySelectorAll(translator_mors);
            const get_delete_btn = document.querySelector(delete_btn);
    

            get_delete_btn.addEventListener('click', () => {
                const get_place_with_mors = document.querySelectorAll(place_with_mors);
                if (get_place_with_mors.length > 0) {
                    const lastElement = get_place_with_mors[get_place_with_mors.length - 1];
                    if(lastElement.classList.contains('line-rotated')){
                        

                        const word_to_remove=get_place_to_paste.textContent.slice(-1);
                        get_place_to_paste.textContent=get_place_to_paste.textContent.slice(0,-1);
                        
                        console.log('wyraz do usuniecia',word_to_remove);
                        

                    }
                    lastElement.remove();
                }
            });
    

            get_translator_mors.forEach(div => div.addEventListener("click", () => {
                let get_place_with_mors = document.querySelectorAll(place_with_mors);
                mors_code = '';
    

                get_place_with_mors.forEach(element => {
                    if (!element.classList.contains('checked')) {
                        mors_code += element.classList.value + " ";
                    }
                });
    
                mors_code = mors_code.trim();
    
                for (let i = 0; i < table_with_translations.length; i++) {
                    let translation_classList = table_with_translations[i].classList;
    
                    if (mors_code === translation_classList) {
                        console.log("Znalazlem :", table_with_translations[i].letter);
                        get_place_to_paste.textContent += table_with_translations[i].letter;
                        get_place_with_mors.forEach(item => item.classList.add('checked'));
                        mors_code = '';
                        break;
                    }
                }
            }));
        }
    }
    
    

    addAimation(element,eventListener,animation,animationDuration){
        if(document.querySelector(element)){
            const get_element=document.querySelector(element);
            get_element.style.cursor="pointer";
            get_element.addEventListener(eventListener,()=>{
                get_element.style.animation=animation;
                get_element.style.pointerEvents="none";
                

                setTimeout(()=>{
                    get_element.style.animation="none";
                    get_element.style.pointerEvents="all";
                },animationDuration)
            })

        }
       

    }

  
    read_mors(button, eventListener, transition_place,short_signal_link,long_signal_link) {
        if (document.querySelector(button)) {

            const short_signal=new Audio(short_signal_link);
            const long_signal=new Audio(long_signal_link);

            const get_btn = document.querySelector(button);
            const get_transition_place = document.querySelector(transition_place);
    
            get_btn.addEventListener(eventListener, async () => {
                const code_mos = get_transition_place.querySelectorAll('i');
                get_btn.style.pointerEvents="none";
                console.log(get_btn)
                code_mos.forEach(i=>i.style.color="black");
    
                for (let i = 0; i < code_mos.length; i++) {
                    
                    if (code_mos[i].classList.contains('circle')) {
                        console.log("short signal");
                        code_mos[i].style.color="red";
                        await this.#playSignal(short_signal);
                    } else if (code_mos[i].classList.contains('line')) {
                        code_mos[i].style.color="red";
                        console.log("long signal");
                        await this.#playSignal(long_signal);
                    } else if (code_mos[i].classList.contains('line-rotated')) {
                        code_mos[i].style.color="var(--color_2)";
                        console.log("przerwa");
                        await this.#pause(500); 
                    }
                    else if (code_mos[i].classList.contains('break')) {
                        code_mos[i].style.color="var(--color_2)";
                        console.log("przerwa dluga");
                        await this.#pause(1200); 
                    }
                }
                // get_btn.style.pointerEvents="all";
            });
        }
    }
    
    #playSignal(signal) {
        return new Promise((resolve) => {
            signal.play();
            signal.onended = resolve;
        });
    }
    
    #pause(duration) {
        return new Promise((resolve) => {
            setTimeout(resolve, duration);
        });
    }
}





const circle_icon = '<i class="fa-solid fa-circle circle mors_icon"></i> ';
const line_icon = '<i class="fa-solid fa-minus line mors_icon"></i> ';
const lineRotated_icon = '<i class="fa-solid fa-minus line-rotated mors_icon"></i> ';
const space_word_icon = '<i class="fa-solid fa-x break mors_icon"></i> ';

const mors_code = [
    { 
        letter: "a", 
        mors: circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "b",
        mors: line_icon + circle_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "c", 
        mors: line_icon + circle_icon + line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "d", 
        mors: line_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "e", 
        mors: circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "f", 
        mors: circle_icon + circle_icon + line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "g", 
        mors: line_icon + line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "h", 
        mors: circle_icon + circle_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "i", 
        mors: circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "j", 
        mors: circle_icon + line_icon + line_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "k", 
        mors: line_icon + circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "l", 
        mors: circle_icon + line_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "m", 
        mors: line_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "n", 
        mors: line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "o",
        mors: line_icon + line_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "p",
        mors: circle_icon + line_icon + line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "q",
        mors: line_icon + line_icon + circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "r",
        mors: circle_icon + line_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "s",
        mors: circle_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "t",
        mors: line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "u",
        mors: circle_icon + circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "v",
        mors: circle_icon + circle_icon + circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "w",
        mors: circle_icon + line_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "x",
        mors: line_icon + circle_icon + circle_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "y",
        mors: line_icon + circle_icon + line_icon + line_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: "z",
        mors: line_icon + line_icon + circle_icon + circle_icon + lineRotated_icon,
        classList: 'fa-solid fa-minus line mors_icon fa-solid fa-minus line mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-circle circle mors_icon fa-solid fa-minus line-rotated mors_icon'
    },
    { 
        letter: " ",
        mors: space_word_icon + lineRotated_icon,
        classList: 'fa-solid fa-x break mors_icon fa-solid fa-minus line-rotated mors_icon'
    }
];





const app= new App();

app.addClass(".settings","fa-solid fa-xmark settings","fa-solid fa-gears settings",".contener_settings","open","click");

app.translate(mors_code,".translator_input",".transition_place");

app.addClass(".arrow_translate","fa-solid fa-arrow-left arrow_translate","fa-solid fa-arrow-right arrow_translate",".translator_mors","open","click");

//TRANSLATORY Z KODU MORSA



app.translate_from_mors(".square_circle","-10px -10px 0px var(--gray),10px 10px 0px var(--white)","0px 0px 0px var(--gray),0px 0px 0px var(--white)"
,"click",".transition_place",circle_icon);

app.translate_from_mors(".square_line","10px -10px 0px var(--gray),-10px 10px 0px var(--white)","0px 0px 0px var(--gray),0px 0px 0px var(--white)","click",".transition_place",line_icon);

app.translate_from_mors(".square_letterSpace","-10px -10px 0px var(--gray),10px 10px 0px var(--white)","0px 0px 0px var(--gray),0px 0px 0px var(--white)","click",".transition_place",lineRotated_icon);

app.translate_from_mors(".square_wordSpace","10px -10px 0px var(--gray),-10px 10px 0px var(--white)","0px 0px 0px var(--gray),0px 0px 0px var(--white)","click",".transition_place",space_word_icon);

app.addAimation('.logo',"click","logo 1s forwards",1000);

app.addAimation('.ship',"click","ship 1.5s forwards",1500);



app.read_mors('.audio_btn',"click",".transition_place","../audio/short_morsSignal.MP3","../audio/long_morsSignal.MP3");

app.addAimation('.audio_btn',"click","audio_btn 1s both",1000);

app.addClass('.reglas',"fa-solid fa-book-open-reader reglas","fa-solid fa-book reglas",".legend","open","click")


app.translate_from_mors_icons(mors_code,".mors_icon",".transition_letters_place",".option",".delate");

app.addAimation('.reglas',"click","none");



// Plik: /mnt/data/morse.js

// Plik: /mnt/data/morse.js

class Rules {
    #circle_letters;
    #line_letters;

    constructor(circle_letters, line_letters) {
        this.#circle_letters = circle_letters;
        this.#line_letters = line_letters;
    }

    #ifContainLetter_correct(inputValue, letters_table) {
        let correctLetter = "";

        const found = letters_table.some(letter => {
            if (inputValue.includes(letter)) {
                correctLetter = letter;
                return true;
            }
            return false;
        });

        return [found, correctLetter];
    }

    #getElementNeeded(save_input, letter) {
        console.log(`lece ${letter}`);

        const get_input = document.querySelector(save_input);
        const get_circle = document.querySelectorAll(`.${letter}c`);
        const get_line = document.querySelectorAll(`.${letter}l`);

        return [get_input, get_circle, get_line];
    }

    a(letter, save_input) {
        if (document.querySelector(save_input)) {
            

            const elements = this.#getElementNeeded(save_input, letter);

            elements[0].addEventListener("input", () => {
                const value = elements[0].value;
                console.log(value);

                const ifContainsLetter_circle = this.#ifContainLetter_correct(value, this.#circle_letters);
                const ifContainsLetter_line = this.#ifContainLetter_correct(value, this.#line_letters);

                const correct_letter_circle = ifContainsLetter_circle[1];
                const correct_letter_line = ifContainsLetter_line[1];

                console.log(correct_letter_circle, correct_letter_line);

                if (ifContainsLetter_circle[0]) {
                    elements[1][0].style.color = "green";
                    console.log("First part passed");

                    if (ifContainsLetter_line[0]) {
                        elements[2][0].style.color = "green";
                        console.log("Second part passed");
                    } else {
                        elements[2][0].style.color = "black";
                    }
                } else {
                    elements[1][0].style.color = "black";
                }
            });
        }
    }

    b(letter, save_input) {
        if (document.querySelector(save_input)) {

            const elements = this.#getElementNeeded(save_input, letter);

            elements[0].addEventListener("input", () => {
                const value = elements[0].value;
                console.log(value);

                const ifContainsLetter_line = this.#ifContainLetter_correct(value, this.#line_letters);

                if (ifContainsLetter_line[0]) {
                    elements[2][0].style.color = "green";

                    let circleIndex = 0;
                    for (let i = 0; i < value.length; i++) {
                        const ifContainsLetter_circle = this.#ifContainLetter_correct(value[i], this.#circle_letters);
                        if (ifContainsLetter_circle[0] && circleIndex < elements[1].length) {
                            elements[1][circleIndex].style.color = "green";
                            circleIndex++;
                        } else if (circleIndex < elements[1].length) {
                            elements[1][circleIndex].style.color = "black";
                        }
                    }

                    for (let i = circleIndex; i < elements[1].length; i++) {
                        elements[1][i].style.color = "black";
                    }
                } else {
                    elements[2][0].style.color = "black";

                    elements[1].forEach(circleElement => {
                        circleElement.style.color = "black";
                    });
                }
            });
        }
    }
}

const circle_letters = ["a", "e", "i", "u"];
const line_letters = ["o"];

const rules = new Rules(circle_letters, line_letters);

rules.a("a", "[data-x='a']");
rules.b("b", "[data-x='b']");
rules.b("c", "[data-x='c']");
rules.b("d", "[data-x='d']");
rules.b("e", "[data-x='e']");
rules.b("f", "[data-x='f']");
// Dodaj więcej liter według potrzeby

