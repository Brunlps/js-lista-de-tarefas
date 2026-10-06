// CRUD de lista de tarefas
let tarefas = []

// Função para adicionar tarefas
function criarTarefa(tarefa) {
    // crianndo um objeto de tarefa com título e descrição
    const novaTarefa = {
        titulo: tarefa,
        descricao: ''
    };
    // Trtatando caso o usuário tente adicionar uma tarefa vazia
    if (tarefa.trim() === '') {
        alert('Por favor, digite uma tarefa válida.');
        return;
    }

    // Adicionando a nova tarefa ao array de tarefas
    tarefas.push(novaTarefa);
    atualizarLista();

}

// Função para atualizar a lista de tarefas na tela
function atualizarLista() {
    const listaTarefas = document.getElementById('lista-tarefas');
    listaTarefas.innerHTML = '';
    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center bg-white p-4 rounded shadow';
        li.innerHTML = `
            <div>
                <h3 class="font-bold">${tarefa.titulo}</h3>
                <p>${tarefa.descricao}</p>
            </div>
            <div>
                <button onclick="editarTarefa(${index})" class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Editar</button>
                <button onclick="excluirTarefa(${index})" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Excluir</button>
            </div>
        `;
        listaTarefas.appendChild(li);
    }); 
}

// Função para editar uma tarefa
function editarTarefa(index) {
    const novaDescricao = prompt('Digite a nova descrição da tarefa:', tarefas[index].descricao);
    if (novaDescricao !== null) {
        tarefas[index].descricao = novaDescricao;
        atualizarLista();
    }
}

// Função para excluir uma tarefa
function excluirTarefa(index) {
    tarefas.splice(index, 1);
    atualizarLista();
}

