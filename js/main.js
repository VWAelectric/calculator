// script.js
let display = document.getElementById('display');

// Função para adicionar valor ao visor
function appendValue(value) {
  display.value += value;
}

// Função para limpar o visor
function clearDisplay() {
  display.value = '';
}

// Função para apagar o último caractere
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Função para calcular o resultado
function calculate() {
  try {
    // Avalia a expressão matemática
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}

// script.js

// Alternar entre modo claro e escuro
function toggleTheme() {
    // Alternar a classe 'dark-mode' no <body> e na calculadora
    document.body.classList.toggle('dark-mode');
    document.querySelector('.calculator').classList.toggle('dark-mode');
  
    // Alterar a aparência dos botões
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.toggle('dark-mode'));
  
    // Atualizar o texto do botão
    const themeButton = document.getElementById('toggle-theme');
    if (document.body.classList.contains('dark-mode')) {
      themeButton.textContent = 'Modo Claro';
    } else {
      themeButton.textContent = 'Modo Escuro';
    }
  }
  