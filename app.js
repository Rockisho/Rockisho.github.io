// app.js

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registrado no domínio:', registration.scope);
        })
        .catch((error) => {
            console.error('O registro do Service Worker falhou:', error);
        });
}

// Inserir valor no display
function inserir(valor) {
    const resultado = document.getElementById("resultado");
    resultado.value += valor;
  }
  
  // Limpar o display
  function limpar() {
    document.getElementById("resultado").value = "";
  }
  
  // Deletar o último caractere
  function deletarUltimo() {
    const resultado = document.getElementById("resultado");
    resultado.value = resultado.value.slice(0, -1);
  }
  
  // Calcular o resultado
  function calcular() {
    try {
      const resultado = document.getElementById("resultado");
      resultado.value = eval(resultado.value);
    } catch {
      alert("Erro ao calcular! Verifique a expressão.");
    }
  }  
