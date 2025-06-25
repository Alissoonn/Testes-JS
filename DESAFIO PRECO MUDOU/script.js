function veri(){
    let PreAnt = window.parseFloat(prompt("Qual era o preço anterior do produto?"))
    //Valida se ambos os prompts receberam o valor corretos
    if(isNaN(PreAnt)){
        alert("Digite um valor válido");
        return;
    }

    let PreAtu = window.parseFloat(prompt("Qual o preço atual do produto? "))
    //Valida se ambos os prompts receberam o valor corretos
    if(isNaN(PreAtu)){
        alert("Digite um valor válido");
        return;
    }

}