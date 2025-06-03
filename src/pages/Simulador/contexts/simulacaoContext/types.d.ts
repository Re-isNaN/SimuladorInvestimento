import { ReactNode } from 'react'
import { TDadosResultadosSimulacao } from '../../hooks/useWorkerSimulador/types'

export interface IContextSimulador {
  carregando: boolean
  buscarDados: (e?: React.BaseSyntheticEvent) => Promise<void>
  getDadosSimulacao: () => TDadosResultadosSimulacao['dadosSimulacao']
  totalInvestido: number
  totalAcumulado: number
  totalReal: number
}

export interface IPropsSimuladorProvider {
  children: ReactNode
}
