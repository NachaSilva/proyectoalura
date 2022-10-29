

const btn = document.querySelector("[data-form-btn]")


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[ data-form-iput]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = '';
    //backticks 

    const taskContent = document.createElement("div") 
    taskContent.appendChild(checkComplete()) //checklis

    const titleTask = document.createElement("span");
    titleTask.classList.add("task")
    titleTask.innerText = value
   taskContent.appendChild(titleTask); //titulo de la tarea
const content = `

<i class="fas fa-trash-alt trashIcon icon"></i>`
    //task.innerHTML = content;
    task.appendChild(taskContent);

    list.appendChild(task);
   
    console.log(content);
}
 

//Arrow functions o funciones anónimas
btn.addEventListener('click', createTask); 


const checkComplete = () => {  //es el hijo
const i = document.createElement("i")
i.classList.add("far", "fa-check-square", "icon") //son los elementos de la clase
i.addEventListener("click", compleTask);
return i

}

//Inmediately invoked function expression IIFE
const compleTask = (event) => { // arrow function
    const element = event.target;
    element.classList.toggle("fas"); //sirve para al momento de hacer click se quite el fondo o no del  icono
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

};



