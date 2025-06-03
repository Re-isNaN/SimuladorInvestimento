export type TDadosResultadosSimulacao = {
  total: {
    totalInvestido: number
    totalAcumulado: number
    totalReal: number
  }
  dadosSimulacao: {
    aporte: number[]
    inflacao: number[]
    rendimento: number[]
    valorInvestido: number[]
  }
}
