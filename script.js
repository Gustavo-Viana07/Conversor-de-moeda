const API_KEY = "7f7e7894612a6EFB601F0BBF";

async function converter() {
  const valor = document.getElementById("valor").value;
  const origem = document.getElementById("origem").value;
  const destino = document.getElementById("destino").value;
  const resultado = document.getElementById("resultado");

  if (!valor || valor <= 0) {
    resultado.innerText = "Informe um valor válido.";
    return;
  }

  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${origem}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const taxa = data.conversion_rates[destino];
    const convertido = (valor * taxa).toFixed(2);

    resultado.innerText = `${valor} ${origem} = ${convertido} ${destino}`;
  } catch (error) {
    resultado.innerText = "Erro ao obter cotação.";
  }
}
