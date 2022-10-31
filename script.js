const btn = document.querySelector("[data-form-btn]")


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[ data-form-iput]");
    console.log(input.value);
}
 

console.log(btn);

//Arrow functions o funciones anónimas
btn.addEventListener('click', createTask); 

