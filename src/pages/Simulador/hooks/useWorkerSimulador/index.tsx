import { useState, useCallback, useRef } from 'react'
import { TDadosFormularioSimulador } from '../../contexts/formularioContext/types'
import { TDadosResultadosSimulacao } from './types'

export function useWorkerSimulador() {
  const resultadosRef = useRef<TDadosResultadosSimulacao | null>(null)
  const [resultadoDisponivel, setResultadoDisponivel] = useState(false)
  const [carregando, setCarregando] = useState(false)

  const [erro, setErro] = useState<ErrorEvent | null>(null)

  const simular = useCallback((form: TDadosFormularioSimulador) => {
    return new Promise((resolve, reject) => {
      setCarregando(true)
      setErro(null)

      const worker = new Worker('workers/simulacao.worker.js', {
        type: 'module',
      })

      worker.onmessage = (e) => {
        resultadosRef.current = e.data
        setResultadoDisponivel(true)
        setCarregando(false)
        resolve(e.data)
        worker.terminate()
      }

      worker.onerror = (err) => {
        setErro(err)
        setCarregando(false)
        reject(err)
        worker.terminate()
      }

      worker.postMessage(form)
    })
  }, [])

  return {
    simular,
    resultadoDisponivel,
    getResultados: () => resultadosRef.current,
    carregando,
    erro,
  }
}
