var tentativas = 1;
var placar = 3;
let numero = Math.floor((Math.random() * 10) + 1);
atualizaTentativas();

function atualizaTentativas(){
  var numeroTentativas = document.getElementById('nTentativas')
  var html = "Faltam " + placar + " tentativa";
  numeroTentativas.innerHTML =html;
}

function habilitaDesabilitarBotoes (){
	atualizaTentativas();
	document.getElementById('btn-submit').disabled = true;
	document.getElementById('btn-jogarNovamente').disabled = false;
	return;
}


function jogarNovamente(){
	tentativas = 1;
	placar = 3;
	atualizaTentativas();
	numero = Math.floor((Math.random() * 10) + 1);
	document.getElementById('btn-submit').disabled = false;
	document.getElementById('btn-jogarNovamente').disabled = true;
}

function sorteio (){
    
	let chute = document.getElementById("inp-number").value;
	var numeroEscolhido = document.getElementById('numeroSoteado')
	/*var html = "Numero: " + numero ;
	numeroEscolhido.innerHTML =html;*/
    
	if (tentativas > 3){
		habilitaDesabilitarBotoes ();
		alert('Suas Tentativas acabaram. O número correto é ' + numero);
    }
		
	if (numero == chute){
		alert('Você acertou o número é ' + numero);
		habilitaDesabilitarBotoes ();
		
   	} else if (chute > numero){
			tentativas++;
			placar --;
      alert('O número que o gatinho esta pensando é menor ');
	
		if (tentativas > 3){
			alert('Suas Tentativas acabaram. O número correto é '+ numero);
			habilitaDesabilitarBotoes ();
								
		}
    } else if (chute < numero){
			tentativas++;
	    placar--;
      alert('O número que o gatinho esta pensando é maior');
		
		if (tentativas > 3){
			alert('Suas Tentativas acabaram. O número correto é '+ numero);
			habilitaDesabilitarBotoes ();
			
		}
    }
	atualizaTentativas();
}
