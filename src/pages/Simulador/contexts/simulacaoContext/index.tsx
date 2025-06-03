import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { IContextSimulador, IPropsSimuladorProvider } from './types'
import { useWorkerSimulador } from '../../hooks/useWorkerSimulador'
import { useContextFormularioSimulador } from '../formularioContext'
import { TDadosFormularioSimulador } from '../formularioContext/types'
import { TDadosResultadosSimulacao } from '../../hooks/useWorkerSimulador/types'

const simulacaoContext = createContext({} as IContextSimulador)

export const useContextSimulacao = () => {
  return useContext(simulacaoContext)
}

export function SimuladorProvider({ children }: IPropsSimuladorProvider) {
  const { handleSubmit } = useContextFormularioSimulador()
  const { simular, carregando, getResultados, resultadoDisponivel } =
    useWorkerSimulador()

  const dadosSimulacaoRef = useRef<TDadosResultadosSimulacao['dadosSimulacao']>(
    {
      aporte: [],
      inflacao: [],
      rendimento: [],
      valorInvestido: [],
    },
  )

  const [totalInvestido, setTotalInvestido] = useState(0)
  const [totalAcumulado, setTotalAcumulado] = useState(0)
  const [totalReal, setTotalReal] = useState(0)

  useEffect(() => {
    if (!resultadoDisponivel) return

    const resultados = getResultados()
    if (!resultados) return

    dadosSimulacaoRef.current = resultados.dadosSimulacao

    setTotalInvestido(resultados.total?.totalInvestido ?? 0)
    setTotalAcumulado(resultados.total?.totalAcumulado ?? 0)
    setTotalReal(resultados.total?.totalReal ?? 0)
  }, [resultadoDisponivel, getResultados])

  async function handleDados(dados: TDadosFormularioSimulador) {
    try {
      await simular(dados)
    } catch (err) {
      const error = err as Error
      alert(error.message)
    }
  }

  const buscarDados = handleSubmit(handleDados)

  return (
    <simulacaoContext.Provider
      value={{
        buscarDados,
        carregando,
        getDadosSimulacao: () => dadosSimulacaoRef.current,
        totalInvestido,
        totalAcumulado,
        totalReal,
      }}
    >
      {children}
    </simulacaoContext.Provider>
  )
}
