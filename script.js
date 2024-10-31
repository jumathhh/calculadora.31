function clearInput() {
  document.getElementById("input").value = "";
}

function appendToInput(value) {
  const input = document.getElementById("input");
  input.value += value;
}

function calculateResult() {
  const input = document.getElementById("input");
  try {
      const result = eval(input.value.replace('×', '*').replace('÷', '/'));
      input.value = result;
  } catch (error) {
      input.value = "Erro";
  }
}

function calculateTrig(funcao) {
  const input = document.getElementById("input").value;
  const numero = parseFloat(input);
  if (isNaN(numero)) {
      alert("Por favor, insira um número válido.");
      return;
  }

  let resultado;
  switch (funcao) {
      case 'seno':
          resultado = Math.sin(numero);
          break;
      case 'cosseno':
          resultado = Math.cos(numero);
          break;
      case 'tangente':
          resultado = Math.tan(numero);
          break;
      default:
          resultado = 0;
  }

  document.getElementById("input").value = resultado.toFixed(4);
}
