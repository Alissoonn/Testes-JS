function exibir(){
   //Variavel nome recebe o que foi digitado no primeiro prompt
   let nome =  window.prompt("Qual o seu nome?")
   //Variavel idade recebe o que foi digitado no segundo prompt
   let idade =  window.prompt("Quantos anos você tem?")
   //Mostra um alert em tela com os valores de ambas variaveis
   window.alert(`Acabei de conheçer o ${nome} que tem ${idade} anos`)
}