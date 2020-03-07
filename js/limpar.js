function limparCampos(animaisFuncao){
	//reseta os campos 
	document.getElementById('ave').checked = ''
	document.getElementById('mamifero').checked = ''
	document.getElementById('reptil').checked = ''
	document.getElementById('aereo').checked = ''
	document.getElementById('aquatico').checked = ''
	document.getElementById('terrestre').checked = ''
	document.getElementById('carnivoro').checked = ''
	document.getElementById('frutivoro').checked = ''
	document.getElementById('herbivoro').checked = ''
	document.getElementById('onivoro').checked = ''
	document.getElementById('nadador').checked = ''
	document.getElementById('bipede').checked = ''
	document.getElementById('quadrupede').checked = ''
	document.getElementById('voador').checked = ''
	document.getElementById('polar').checked = ''
	document.getElementById('savana').checked = ''
	document.getElementById('tropical').checked = ''
	document.getElementById('casco').checked = ''
	document.getElementById('nadadeiras').checked = ''
	document.getElementById('rastejar').checked = ''
}

function limparPontuacao(animaisFuncao) {
	//reseta os pontos
	pontuacaoVet = [0,0,0,0,0,0,0,0,0,0,0,0,0]
	pontuacao = 0
	document.getElementById('receber').innerHTML = ''
	document.getElementById('pontos').innerHTML = 'Pontos: ' + pontuacao
	document.getElementById('receber').innerHTML = ''
}

function limparTudo(animaisFuncao){
	//reseta os pontos
	pontuacaoVet = [0,0,0,0,0,0,0,0,0,0,0,0,0]
	pontuacao = 0
	document.getElementById('receber').innerHTML = ''
	document.getElementById('pontos').innerHTML = 'Pontos: ' + pontuacao

	//reseta os campos 
	document.getElementById('ave').checked = ''
	document.getElementById('mamifero').checked = ''
	document.getElementById('reptil').checked = ''
	document.getElementById('aereo').checked = ''
	document.getElementById('aquatico').checked = ''
	document.getElementById('terrestre').checked = ''
	document.getElementById('carnivoro').checked = ''
	document.getElementById('frutivoro').checked = ''
	document.getElementById('herbivoro').checked = ''
	document.getElementById('onivoro').checked = ''
	document.getElementById('nadador').checked = ''
	document.getElementById('bipede').checked = ''
	document.getElementById('quadrupede').checked = ''
	document.getElementById('voador').checked = ''
	document.getElementById('polar').checked = ''
	document.getElementById('savana').checked = ''
	document.getElementById('tropical').checked = ''
	document.getElementById('casco').checked = ''
	document.getElementById('nadadeiras').checked = ''
	document.getElementById('rastejar').checked = ''

	//reseta as conquistas
	conquistasVet = [0,0,0,0]
	pontuacaoConq = 0
	document.getElementById('conquistas').innerHTML = 'Conquistas: ' + pontuacaoConq
	
	document.getElementById('conquistaBiologo').innerHTML = ''
	document.getElementById('conquistaMutante').innerHTML = ''
	document.getElementById('conquistaMitologico').innerHTML = ''
	document.getElementById('conquistaPreHistorico').innerHTML = ''

	//reseta os 'créditos'
	document.getElementById('creditos').innerHTML = ''
	document.getElementById('final').innerHTML = ''
}