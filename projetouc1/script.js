function converter() {
    const valor = (document.getElementById('valor').value);
    const moeda = document.getElementById('moeda').value;

    console.log(valor);
    console.log(moeda);

    fetch(
        `https://open.er-api.com/v6/latest/${moeda}`)
        .then(
            function (resposta){
                return resposta.json();
            }
        ).then(
            function(resposta){
                let resultado = valor / resposta.rates.BRL;
                
                document.getElementById('resultado').innerText = resultado;
            }
             

        ).catch();
}

