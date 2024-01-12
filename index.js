
function openPage() {
    window.open('inscricao.html', '_blank');
 }
 

 function getCurrentYear() {
    return new Date().getFullYear();
 }
 
 // Seleciona a tag <p> | para o footer
 var pTag = document.getElementById("paragrafo_rodape");
 
 // Insere o retorno da função na tag <p> | para o footer
 pTag.innerHTML = `&copy; ${getCurrentYear()} FullStore. Todos os direitos reservados.`;


 //Calculadora flutuante
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       document.getElementById("calculator").style.display = "block";
   } else {
       document.getElementById("calculator").style.display = "none";
   }
}

function abrirurl(){
    window.open('https://devpaystore.phoebus.com.br/payment-link-checkout/pay/18f8883b-68c9-4b99-874b-4dc323aa1f8d', '_blank');
}