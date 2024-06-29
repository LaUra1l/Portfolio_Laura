class Notas {
    #input;
    #save_btn;
    #tareas_area;
    #removebtn_className;

    constructor(input, save_btn, tareas_area, removebtn_className) {
        this.#input = input;
        this.#save_btn = save_btn;
        this.#tareas_area = tareas_area;
        this.#removebtn_className = removebtn_className;
    }

    #saveNote(itemtext, element) {
        const noteKey = Date.now().toString();
        localStorage.setItem(noteKey, itemtext);
        element.id = noteKey;
    }

    #deleteNote(element) {
        const id = element.id;
        localStorage.removeItem(id);
        element.remove();
    }

    #getElement(selector) {
        return document.querySelector(selector);
    }

    #getInputValue() {
        const inputElement = this.#getElement(this.#input);
        return inputElement.value;
    }

    #tareaConstruction(textValue, id = null) {
        const li = document.createElement('li');
        li.textContent = textValue;

        if (id) {
            li.id = id;
        }

        const buttonDel = document.createElement('button');
        buttonDel.textContent = "X";
        buttonDel.className = this.#removebtn_className;
        buttonDel.onclick = () => {
            this.#deleteNote(li);
        };

        li.appendChild(buttonDel);
        return li;
    }

    buttonInteraction() {
        const saveBtn = this.#getElement(this.#save_btn);
        const tareasArea = this.#getElement(this.#tareas_area);

        saveBtn.addEventListener("click", () => {
            const tarea = this.#getInputValue();
            if (tarea.trim() === "") return;

            const createTarea = this.#tareaConstruction(tarea);
            tareasArea.appendChild(createTarea);

            this.#saveNote(tarea, createTarea);
        });
    }

    init() {
        const tareasArea = this.#getElement(this.#tareas_area);
        Object.keys(localStorage).forEach(key => {
            const noteTxt = localStorage.getItem(key);
            const createTarea = this.#tareaConstruction(noteTxt, key);
            tareasArea.appendChild(createTarea);
        });
    }
}

const noteApp = new Notas('#textarea', ".save_btn", ".tareas_list", "remove_btn");
noteApp.buttonInteraction();
noteApp.init();





