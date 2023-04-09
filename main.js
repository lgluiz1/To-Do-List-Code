const addButton = document.querySelector('#add-button');
const inputText = document.querySelector('#input-text');
const lista = document.querySelector('#lista');
const vazio = document.querySelector('.vazio')

function newTarefa() {
    if (!inputText.value) {
      vazio.innerHTML = `Nada a Adicionar. Digite algo no campo acima para adicionar uma tarefa.`
    } else {
      // Cria um novo elemento 'li'
      const novoItem = document.createElement('li');
      
      // Cria um novo ícone de lixeira
      const iconeLixeira = document.createElement('i');
      iconeLixeira.classList.add('bi', 'bi-trash-fill', 'del');
      
      // Define o texto do novo elemento 'li' como o valor do campo de texto
      novoItem.textContent = inputText.value;
      
      // Adiciona o ícone de lixeira ao novo elemento 'li'
      novoItem.appendChild(iconeLixeira);
      
      // Adiciona o novo elemento 'li' à lista
      lista.appendChild(novoItem);
      
      // Limpa o campo de texto e a mensagem de erro
      inputText.value = '';
      vazio.innerHTML = '';
      
      // Adiciona um manipulador de evento ao ícone de lixeira para remover a tarefa
      iconeLixeira.addEventListener('click', () => {
        novoItem.remove();
      });
    }
  }
  

