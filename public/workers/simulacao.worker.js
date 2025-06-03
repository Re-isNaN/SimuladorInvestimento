onmessage = async (ev) => {
  const form = ev.data

  const reinvestimento = form.reinvestimento === 'SIM'

  const periodo = parseInt(form.periodo)

  const diminuidorPeriodo = periodo > 100 ? 3 : 1

  const ano = parseInt(form.ano)

  const mesAtual = (ano - 1) * 12 + 1

  const aporte = []
  const inflacao = []
  const rendimento = []
  const valorInvestido = []

  for (let i = mesAtual; i <= mesAtual + periodo - 1; i++) {
    if (periodo % diminuidorPeriodo !== 0) {
      continue
    }

    const aporteMes = i > 1 ? form.aporteMensal : 0

    const valorInvestidoAtual = form.valorInicial + (i - 1) * aporteMes

    let rendimentoAtual =
      valorInvestidoAtual * (1 + (form.jurosMensal * i) / 100) -
      valorInvestidoAtual

    if (reinvestimento) {
      rendimentoAtual =
        valorInvestidoAtual * (1 + form.jurosMensal / 100) ** i -
        valorInvestidoAtual
    }

    const numeroAno = Math.floor((i - 1) / 12) + 1 // i representa o mes, numero ano representa o ano

    const inflacaoAnualComposta = (1 + form.inflacaoAnual / 100) ** numeroAno

    const inflacaoMes = (inflacaoAnualComposta - 1) / (12 * numeroAno)

    const impactoInflacaoMensal = valorInvestidoAtual * i * inflacaoMes

    const impactoInflacaoAtual = impactoInflacaoMensal

    aporte.push(aporteMes)
    valorInvestido.push(valorInvestidoAtual)
    rendimento.push(rendimentoAtual)
    inflacao.push(impactoInflacaoAtual)
  }

  const impactoInflacao = inflacao[inflacao.length - 1]

  const valorTotalInvestido = valorInvestido[valorInvestido.length - 1]

  const valorTotalAcumulado =
    rendimento[rendimento.length - 1] + valorTotalInvestido

  const valorTotalReal = valorTotalAcumulado - (impactoInflacao || 0)

  const dados = {
    total: {
      totalInvestido: valorTotalInvestido,
      totalAcumulado: valorTotalAcumulado,
      totalReal: valorTotalReal,
    },
    dadosSimulacao: { aporte, inflacao, rendimento, valorInvestido },
  }

  postMessage(dados)
}
