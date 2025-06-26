function notas(){
    let nome = prompt("Qual o nome do aluno?");

    // Remove espaços extras e verifica se é uma string com letras
    if (!nome || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome.trim())) {
        alert("Por favor, digite um nome válido contendo apenas letras.");
        return; // Encerra a função
    }

    
}