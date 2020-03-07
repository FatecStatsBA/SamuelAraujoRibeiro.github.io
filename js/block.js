function animais() {
	//TESTES
	if (limparAnimal === 1) {
		testeAcerto(false, true, false, false, false, true, true, false, false, false, false, false, true, false, false, true, false, false, false, false, 'Você achou um Leão', '', 0)
		testeAcerto(false, true, false, false, false, true, false, false, true, false, false, false, true, false, false, false, false, false, false, false, 'Você achou um Cavalo', '', 1)
		testeAcerto(false, true, false, false, false, true, false, false, false, true, false, true, false, false, false, false, false, false, false, false, 'Você achou um Humano', '', 2)
		testeAcerto(false, true, false, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, false, 'Você achou um Macaco', '', 3)
		testeAcerto(false, true, false, true, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, 'Você achou um Morcego', '', 4)
		testeAcerto(false, true, false, false, true, false, true, false, false, false, true, false, false, false, false, false, false, false, true, false, 'Você achou uma Baleia', '', 5)
		testeAcerto(true, false, false, false, false, true, false, false, false, true, false, true, false, false, false, false, true, false, false, false, 'Você achou um Avestruz', '', 6)
		testeAcerto(true, false, false, false, true, true, true, false, false, false, true, true, false, false, true, false, false, false, true, false, 'Você achou um Pinguim', '', 7)
		testeAcerto(true, false, false, true, true, true, false, false, true, false, true, true, false, true, false, false, false, false, false, false, 'Você achou um Pato', '', 8)
		testeAcerto(true, false, false, true, false, false, true, false, false, false, false, true, false, true, false, false, false, false, false, false, 'Você achou uma Águia', '', 9)
		testeAcerto(false, false, true, false, true, true, false, false, false, true, true, false, true, false, false, false, false, true, true, false, 'Você achou uma Tartaruga-Marinha', '', 10)	
		testeAcerto(false, false, true, false, true, true, true, false, false, false, true, false, true, false, false, false, false, false, false, false, 'Você achou um Crocodilo', '', 11)
		testeAcerto(false, false, true, false, false, true, true, false, false, false, false, false, false, false, false, false, false, false, false, true, 'Você achou uma Cobra', '', 12)
		testeAcerto(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, '', 1, '')	
		testeAcerto(false, true, false, false, false, true, false, false, true, false, false, false, true, true, false, false, false, false, false, false, '', 2, '')
		testeAcerto(false, false, true, false, false, true, true, false, false, false, false, true, false, false, false, true, false, false, false, false, '', 3, '')
		testeAcerto(false, false, true, false, false, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, '', 4, '')
	}
	else {
		// document.getElementById('receber').innerHTML = 'Você ainda não achou os animais restantes.'
		document.getElementById('receber').innerHTML = ''
		limparAnimal = 1
	}
	//TESTES
}