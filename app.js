// Referências aos elementos HTML
const inputNome = document.getElementById('amigo');
const botaoAdicionar = document.querySelector('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const botaoSortear = document.querySelector('.button-draw');
const resultado = document.getElementById('resultado');

let amigos = [];  // Lista que armazenará os nomes dos amigos

// Função para adicionar um amigo na lista
function adicionarAmigo() {
    const nome = inputNome.value.trim();  // Pega o valor do campo e remove espaços extras

    // Verifica se o nome não está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Adiciona o nome na lista de amigos
    amigos.push(nome);

    // Cria um item <li> e adiciona na lista visual
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);

    // Limpa o campo de texto
    inputNome.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione ao menos um nome antes de sortear!');
        return;
    }

    // Sorteia um nome aleatório da lista
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado na tela
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}