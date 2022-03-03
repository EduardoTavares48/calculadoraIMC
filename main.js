function calc() {
    let peso = document.querySelector(".peso");
    let valorPeso = peso.value;

    let altura = document.querySelector(".altura");
    let valorAltura = altura.value;

    let imc = valorPeso / (valorAltura * valorAltura);

    // let resultado = document.querySelector(".resultado");
    // resultado.innerHTML = resultImc;


    if (imc < 18.5) {
        let classificacao = `Abaixo do peso`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "50px"
        caixaDoConteudo.style.paddingTop = "30px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    } else if (imc >= 18.5 && imc <= 24.9) {
        let classificacao = `Peso ideal`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "50px"
        caixaDoConteudo.style.paddingTop = "30px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    } else if (imc >= 25 && imc <= 29.9) {
        let classificacao = `Sobrepeso`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "50px"
        caixaDoConteudo.style.paddingTop = "30px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    } else if (imc >= 30 && imc <= 34.9) {
        let classificacao = `Obesidade grau I`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "60px"
        caixaDoConteudo.style.paddingTop = "50px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    } else if (imc >= 35 && imc <= 39.9) {
        let classificacao = `Obesidade grau II`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "60px"
        caixaDoConteudo.style.paddingTop = "50px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    } else {
        let classificacao = `Obesidade grau III ou Mórbida`
        let resultImc = `${imc.toFixed(2)} kg/m2(${classificacao})`;

        let = caixaDoConteudo = document.querySelector(".conteudo")
        caixaDoConteudo.style.paddingBottom = "60px"
        caixaDoConteudo.style.paddingTop = "50px"

        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = resultImc;
    }
}