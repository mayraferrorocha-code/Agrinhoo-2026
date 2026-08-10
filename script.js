function calcularEconomia() {
    const areaInput = document.getElementById('area').value;
    const frequenciaInput = document.getElementById('frequencia').value;
    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    const area = parseFloat(areaInput);
    const frequencia = parseInt(frequenciaInput);

    if (isNaN(area) || area <= 0 || isNaN(frequencia) || frequencia <= 0 || frequencia > 7) {
        resultadoDiv.classList.remove('hidden');
        resultadoDiv.style.backgroundColor = '#ffcccc';
        textoResultado.innerText = 'Por favor, preencha o tamanho da área e os dias de irrigação com valores válidos.';
        return;
    }

    // Média de economia estimada: 25.000 litros/hectare por dia de irrigação em relação à aspersão comum
    const economiaPorDia = 25000;
    const economiaSemanal = area * frequencia * economiaPorDia;
    const economiaMensal = economiaSemanal * 4;

    const economiaFormatada = economiaMensal.toLocaleString('pt-BR');

    resultadoDiv.classList.remove('hidden');
    resultadoDiv.style.backgroundColor = 'var(--verde-claro)';
    textoResultado.innerHTML = `
        Com a adoção do sistema de <strong>gotejamento</strong> em uma área de <strong>${area} hectare(s)</strong> irrigada <strong>${frequencia} dias por semana</strong>, a estimativa de economia é de:<br><br>
        💧 <strong>${economiaFormatada} litros de água por mês!</strong><br><br>
        Essa prática reduz o consumo de energia elétrica no bombeamento e preserva os recursos hídricos da comunidade rural.
    `;
}
