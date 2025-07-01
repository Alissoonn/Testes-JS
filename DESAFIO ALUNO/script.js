function notas(){
    let nome = prompt("Qual o nome do aluno?");
    // Remove espaços extras e verifica se é uma string com letras
    if (!nome || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome.trim())) {
        alert("Por favor, digite um nome válido contendo apenas letras.");
        return; // Encerra a função
    }

    let analise = document.getElementById("txt")
    analise.innerHTML = `Analisando a situação de ${nome}`

    let PriNota = parseFloat(prompt(`Primeira nota de ${nome}:`).trim()) 
    if(isNaN(PriNota)){
        alert("Digite uma nota válida");
        return;
    }

    let SegNota = parseFloat(prompt(`Segunda nota de ${nome}:`).trim());
    if(isNaN(SegNota)){
        alert("Digite uma nota válida")
        return;
    }

    let media = (PriNota+SegNota)/2

    let p1 = document.createElement("p");
    p1.id = "P1";
    document.body.appendChild(p1);
    p1.innerHTML = `Com as notas ${PriNota} e ${SegNota} ,a média é ${media}`

    let p2 = document.createElement("p");
    p2.id = "P2";
    document.body.appendChild(p2);
    
    

    if(media < 3){
        p2.innerHTML = `Com as notas entre ${PriNota} e ${SegNota} ,o aluno esta REPROVADO`;
    }else if(media <= 6){
        p2.innerHTML = `Com as notas entre ${PriNota} e ${SegNota} ,o aluno esta de RECUPERAÇÃO`;
    }else{
        p2.innerHTML = `Com as notas entre ${PriNota} e ${SegNota} ,o aluno esta APROVADO`;
    }
}