const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".coluna")

//variavel para armazenar tarefa que está sendo rrastada
let tarefaArrastada = null

//adiciona os ouvintes para cada tarefa
tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", iniciarArrasto)
    tarefa.addEventListener("dragend", finalizarArrasto)
})


//adiciona os ouvintes para as colunas
colunas.forEach(coluna => {
    coluna.addEventListener("dragover", permitirSoltar)
    coluna.addEventListener("drop", soltarTarefa)
})

function iniciarArrasto(event) {
    tarefaArrastada = this;
    this.classList.add("arrastando")
}
//função para finalizar o arrasto da tarefa

function finalizarArrasto(event){
    this.classList.remove("arrastando")
}

//função para permitir soltar a tarefa na coluna 
function permitirSoltar(event){
    event.preventDefault();
}

//função para soltar as tarefas  na coluna nova

function soltarTarefa(event){
    event.preventDefault();
    //verificar se tem uma tarefa sendo arrastada 
    if(tarefaArrastada){
        this.querySelector(".tarefas").appendChild(tarefaArrastada)
        tarefaArrastada = null
    }
}


const formAdicionarTarefa = document.getElementById("adicionar-tarefa")

formAdicionarTarefa.addEventListener("submit", adicionarTarefa)

function adicionarTarefa(event){
    event.preventDefault()
    const novaTarefa = document.getElementById("nova-tarefa").value
    if (novaTarefa){
        const novaTarefaLi = document.createElement("li");
        novaTarefaLi.innerHTML = novaTarefa 
        novaTarefaLi.draggable = true
        novaTarefaLi.classList.add("tarefa")

        document.getElementById("tarefas-a-fazer").appendChild(novaTarefaLi)
        document.getElementById("nova-tarefa").value = ''
        novaTarefaLi.addEventListener("dragstart", iniciarArrasto)
        novaTarefaLi.addEventListener("dragend", finalizarArrasto)
    }
}