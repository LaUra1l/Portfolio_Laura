class Libro{
    #titleInp;
    #autorInp;
    #dataInp;
    #form;
    constructor(titleInp,autorInp,dataInp,form){
        this.#titleInp=titleInp;
        this.#autorInp=autorInp;
        this.#dataInp=dataInp;
        this.#form=form;

        this.books=new Set();
    }
    #getElement(element){
        return document.querySelector(element);
    }

    getInformations(){
        const getForm=this.#getElement(this.#form);
        getForm.addEventListener("submit",(e)=>{
            e.preventDefault();
            const titleValue=this.#getElement(this.#titleInp).value;
            const authorValue=this.#getElement(this.#autorInp).value;
            const dataValue=this.#getElement(this.#dataInp).value;
    
            const bookInformations=new Map();
            bookInformations.set('title',titleValue);
            bookInformations.set('author',authorValue);
            bookInformations.set('data',dataValue);
    
            console.log(bookInformations);
            this.#showLibro(bookInformations);

            this.#addBookTosystem(bookInformations)
            console.log(this.books)
            alert(`Enhorabuena!
            el libro nuevo: "${titleValue}"`);
            return bookInformations;

        })
    }
    #addBookTosystem(bookInf){
        this.books.add(bookInf);
       
    }
    lookForBooks(inp, btn, txtPlace) {
        const getInp = this.#getElement(inp);
        const getBtn = this.#getElement(btn);
        const resultsPlace = this.#getElement(txtPlace);

        getBtn.addEventListener("click", () => {
            const input = getInp.value.trim().toLowerCase();
            let found = false;
            resultsPlace.innerHTML = '';
            this.books.forEach((map) => {
                for (const result of map.values()) {
                    if (result.toLowerCase().includes(input)) {
                        console.log("znaleziono w mapie ", result, map);
                        found = true;

                        // WYŚWIETLENIE
                        resultsPlace.innerHTML += `<br>
                            Encontrado: <br>
                            Titulo: ${map.get("title")} <br>
                            Autor: ${map.get("author")} <br>
                            La fecha de publicidad: ${map.get("data")}
                            -----------`
                            ;
                        break;
                    }
                }
            });

            if (!found) {
                resultsPlace.innerHTML = "<br>Book not found";
                console.log("Book not found");
            }
        });
    }

    #showLibro(inf){
        console.log(`TUTUŁ: ${inf.get("title")}\nAUTOR: ${inf.get("author")} \nDATA: ${inf.get("data")}`
        );
    }

}


const libro=new Libro(".tituloInp",".authorInp",".fechaInp",".bookForm");
libro.getInformations();

libro.lookForBooks(".buskerInp",".buskerBtn",".results")



