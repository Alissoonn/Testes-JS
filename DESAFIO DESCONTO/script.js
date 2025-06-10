function des(){
  let pro = window.prompt("Qual o produto comprado?");
  let pre = window.parseFloat(prompt("Qual o valor do produto?"));
    
 //Começa verificando se "pro" é null, em seguida remove possiveis espaços e depois verifica se o user digitou somente espaços
  if(!pro || pro.trim() === ""){
    alert("Por favor digite um produto valido.");
    return;
  }

  //Valida se pre NÂO é um numero, valida se pre é menor ou igual
  if(isNaN(pre) || pre <=0){
    alert("Insira um valor valido")
    return;
  }

  let desconto = pre * 0.10;//Formula para pegar 10%
  let preFina = pre - desconto;

  //Transforma o texto do H2 no desejado
  document.getElementById("txt").innerHTML = `Calculando desconto para ${pro}`

  //Cria um paragrafo não existente no HTML
  let p1 = document.createElement("p");
  p1.id="par"//Cria um ID para estilização
  
  //Insere algum conteudo dentro do paragrafo
  p1.textContent = `O preço original do produto é R$ ${pre.toFixed(2)}`
  document.body.appendChild(p1);//Insere o paragrafo dentro de algum conteudo no HTML (dentro do body é o mais comum)

  let p2 = document.createElement("p");
  p2.id="par2"
  p2.textContent = `Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%)`;
  document.body.appendChild(p2);


  let p3 = document.createElement("p");
  p3.id = "par3"
  p3.textContent = `O valor a ser pago com desconto de 10% é: R$ ${preFina.toFixed(2)}`;
  document.body.appendChild(p3);
}