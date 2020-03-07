// leão, cavalo, humano, macaco, morcego, baleia, avestruz, pinguim, pato, águia, tartaruga-marinha, crocodilo e cobra.
let pontuacao = 0
let pontuacaoConq = 0
let pontuacaoVet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let conquistasVet = [0,0,0,0,0]
let limparAnimal = 1
let confirmacaoConq = 0
let confirmacaoPont = 0

function pontuacoes(x) {
	if(pontuacaoVet[x] === 0){
		pontuacaoVet[x] = 1	
		pontuacao += 1
		confirmacaoPont += 1
		cor(animaisFuncao)
		alert('Você achou um Animal!')
	}
	else if(pontuacaoVet[x] === 1) {
		document.getElementById('receber').innerHTML = 'Você já achou esse animal!'
	}
	document.getElementById('pontos').innerHTML = 'Pontos: ' + pontuacao

	if(pontuacao === 13) {
		conquistasVet[0] = 1
	}
}

function conquistas(y) {
	security(animaisFuncao)

	if(conquistasVet[y] === 0) {
		conquistasVet[y] = 1
		pontuacaoConq += 1
	}
	else if(conquistasVet[y] === 1) {
		document.getElementById('receber').innerHTML = 'Você já desbloqueou essa conquista!'
	}
	document.getElementById('conquistas').innerHTML = 'Conquistas: ' + pontuacaoConq

	if(conquistasVet[0] === 1) {
		if(document.getElementById('conquistaBiologo').innerHTML === '') {
			alert('Conquista Desbloqueada!\nBiólogo.')
			pontuacaoConq += 1
			document.getElementById('conquistas').innerHTML = 'Conquistas: ' + pontuacaoConq
			document.getElementById('conquistaBiologo').innerHTML = 'Achou todos os animais!'
			confirmacaoConq += 1			
		}
	}
	else{
		document.getElementById('conquistaBiologo').innerHTML = ''
	}

	if(conquistasVet[1] === 1) {
		if(document.getElementById('conquistaMutante').innerHTML === '') {
			alert('Conquista Desbloqueada!\nMutante.')	
		}
		document.getElementById('conquistaMutante').innerHTML = 'O que você está tentando achar?'
		confirmacaoConq += 1
	}
	else{
		document.getElementById('conquistaMutante').innerHTML = ''
	}

	if(conquistasVet[2] === 1) {
		if(document.getElementById('conquistaMitologico').innerHTML === '') {
			alert('Conquista Desbloqueada!\nMitológico.')	
		}
		document.getElementById('conquistaMitologico').innerHTML = 'Como você achou um Pégaso?'
		confirmacaoConq += 1
	}
	else{
		document.getElementById('conquistaMitologico').innerHTML = ''
	}

	if(conquistasVet[3] === 1) {
		if(document.getElementById('conquistaPreHistorico').innerHTML === '') {
			alert('Conquista Desbloqueada!\nPré-Histórico.')	
		}
		document.getElementById('conquistaPreHistorico').innerHTML = 'Corram! O T-Rex apareceu.'
		confirmacaoConq += 1
	}
	else{
		document.getElementById('conquistaPreHistorico').innerHTML = ''
	}

	if(conquistasVet[4] === 1) {
		alert('Conquista Secreta Desbloqueada!\nReptiliano.')	
		document.getElementById('reptiliano').innerHTML = 'Como você conseguiu me identificar?'
		document.getElementById('rept1').style.display = 'block'
	}

	if(pontuacao === 13 && pontuacaoConq === 4) {
		document.getElementById('final').innerHTML = 'Parabéns, você terminou esse jogo, você é um biólogo incrível!'
		document.getElementById('creditos').innerHTML = 'Créditos: Samuel A. Ribeiro'
	}
}	
function testeAcerto(ave1, mamifero1, reptil1, aereo1, aquatico1, terrestre1, carnivoro1, frutivoro1, herbivoro1, onivoro1, nadador1, bipede1, quadrupede1, voador1, polar1, savana1, tropical1, casco1, nadadeiras1, rastejar1, vetAnimal, vetConquista, pont) {
	let ave = document.getElementById('ave').checked	
	let mamifero = document.getElementById('mamifero').checked
	let reptil = document.getElementById('reptil').checked
	let aereo = document.getElementById('aereo').checked
	let aquatico = document.getElementById('aquatico').checked
	let terrestre = document.getElementById('terrestre').checked
	let carnivoro = document.getElementById('carnivoro').checked
	let frutivoro = document.getElementById('frutivoro').checked
	let herbivoro = document.getElementById('herbivoro').checked
	let onivoro = document.getElementById('onivoro').checked
	let nadador = document.getElementById('nadador').checked
	let bipede = document.getElementById('bipede').checked	
	let quadrupede = document.getElementById('quadrupede').checked
	let voador = document.getElementById('voador').checked
	let polar = document.getElementById('polar').checked	
	let savana = document.getElementById('savana').checked
	let tropical = document.getElementById('tropical').checked
	let casco = document.getElementById('casco').checked
	let nadadeiras = document.getElementById('nadadeiras').checked
	let rastejar = document.getElementById('rastejar').checked

	if(ave === ave1 && mamifero === mamifero1 && reptil === reptil1 &&
		aereo === aereo1 && aquatico === aquatico1 && terrestre === terrestre1 && 
		carnivoro === carnivoro1 && frutivoro === frutivoro1 && herbivoro === herbivoro1 && onivoro === onivoro1 && 
		nadador === nadador1 && bipede === bipede1 && quadrupede === quadrupede1 && voador === voador1 && 
		polar === polar1 && savana === savana1 && tropical === tropical1 && 
		casco === casco1 && nadadeiras === nadadeiras1 && rastejar === rastejar1){
		document.getElementById('receber').innerHTML = vetAnimal
		pontuacoes(pont)
		conquistas(vetConquista)
		limparCampos(animaisFuncao)
		limparAnimal = 0
	}
}

window.animaisFuncao = animais()

function mostrarConquista() {
	var x = document.getElementById("linha");
	if (x.style.display === "none") {
		x.style.display = "block";
	} 
	else {
		x.style.display = "none";
	}
}

function noite() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}