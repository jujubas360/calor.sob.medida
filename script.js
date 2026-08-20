// Alternar Alto Contraste
const toggleContrastBtn = document.getElementById('toggle-contrast');
toggleContrastBtn.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Lógica do Simulador
function runSimulation() {
    const input = document.getElementById('temp-input').value;
    const resultDiv = document.getElementById('sim-result');

    if (input === '') {
        resultDiv.textContent = 'Por favor, insira um valor de temperatura válido.';
        resultDiv.style.color = '#d90429';
        return;
    }

    const temp = parseFloat(input);

    if (temp < 26) {
        resultDiv.textContent = `Status (${temp}°C): Temperatura baixa! Bomba Solar LIGADA para aquecer a água.`;
        resultDiv.style.color = '#0077b6';
    } else if (temp >= 26 && temp <= 30) {
        resultDiv.textContent = `Status (${temp}°C): Temperatura ideal! Bomba Solar DESLIGADA.`;
        resultDiv.style.color = '#2b9348';
    } else {
        resultDiv.textContent = `Status (${temp}°C): Temperatura elevada! Bomba Solar DESLIGADA para evitar superaquecimento.`;
        resultDiv.style.color = '#e76f51';
    }
}

// Lógica das Modais (Pop-ups)
function openModal(title, text) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-text').textContent = text;
    document.getElementById('modal').style.display = 'flex';
}

function closeModalDirect() {
    document.getElementById('modal').style.display = 'none';
}

function closeModal(event) {
    if (event.target.id === 'modal') {
        closeModalDirect();
    }
}
