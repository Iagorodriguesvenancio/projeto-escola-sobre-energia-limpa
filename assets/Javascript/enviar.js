async function enviar() {
    const resposta = await fetch('http://localhost:3000/teste', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msm: document.querySelector('.inMensagem').value, email: document.querySelector('.inEmail').value })
    });
}