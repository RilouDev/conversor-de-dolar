const realInput = document.getElementById("real");
const dolarInput = document.getElementById("dolar");
const converterButton = document.getElementById("converter");
const cotacaoTexto = document.getElementById("cotacao");

const COTACAO_DOLAR = 5.67;

cotacaoTexto.textContent = `Cotação usada: US$ 1 = R$ ${COTACAO_DOLAR.toFixed(2)}`;
dolarInput.readOnly = true;

converterButton.addEventListener("click", converterValor);
realInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    converterValor();
  }
});

function converterValor() {
  const valorReais = Number(realInput.value);

  if (!valorValido(valorReais)) {
    alert("Digite um valor válido em reais para converter.");
    realInput.focus();
    dolarInput.value = "";
    return;
  }

  const valorEmDolar = valorReais / COTACAO_DOLAR;
  dolarInput.value = valorEmDolar.toFixed(2);
}

function valorValido(valor) {
  return Number.isFinite(valor) && valor > 0;
}
