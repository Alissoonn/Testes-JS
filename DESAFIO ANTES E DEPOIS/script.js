//Função chamada com o click
function cx1(){
   //Variavel msg criada para receber o valor digitado dentro do prompt
   let msg =  window.Number(parseInt(prompt("Digite um numero inteiro")))//O prompt só recebe valor do tipo Number e inteiro
   window.alert(`O Antecessor de ${msg} é ${msg - 1} e seu Sucessor é ${msg + 1}`)//Bem simples, tirando o -1 inteiro de msg e adicionando
}