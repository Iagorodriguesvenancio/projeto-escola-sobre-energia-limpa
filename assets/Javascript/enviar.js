async function enviar() {
    if(document.querySelector('.inMensagem').value === '' || document.querySelector('.inEmail').value === '') {
        alert('Por favor, preencha todos os campos antes de enviar sua mensagem.');
        return;
    }else {
    const resposta = await fetch('http://localhost:3000/teste', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msm: document.querySelector('.inMensagem').value, email: document.querySelector('.inEmail').value })
    });
    }
}
