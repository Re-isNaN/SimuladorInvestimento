import { createContext, useContext, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  IContextFormularioSimulador,
  IPropsFormularioSimuladorProvider,
  TDadosFormularioSimulador,
} from './types'
import { validarFormularioSimulador } from './validarCampos'

const formularioSimuladorContext = createContext(
  {} as IContextFormularioSimulador,
)

export const useContextFormularioSimulador = () => {
  return useContext(formularioSimuladorContext)
}

export function FormularioSimuladorProvider({
  children,
}: IPropsFormularioSimuladorProvider) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors: errosCampos },
  } = useForm<TDadosFormularioSimulador>({
    resolver: zodResolver(validarFormularioSimulador),
    defaultValues: {
      aporteMensal: 0,
      inflacaoAnual: 0,
      reinvestimento: 'SIM',
      periodo: '12',
      ano: '1',
    },
  })

  const periodo = watch('periodo')

  const periodoAno = parseInt(periodo) / 12 || 1

  const qtdeAnos = 100 / periodoAno
  const anos = Array.from({ length: qtdeAnos }).map((_e, i) =>
    (i * periodoAno + 1).toString(),
  )

  const value = useMemo(
    () => ({
      register,
      handleSubmit,
      reset,
      control,
      watch,
      errosCampos,
      anos,
    }),
    [register, handleSubmit, reset, control, watch, errosCampos, anos],
  )

  return (
    <formularioSimuladorContext.Provider value={value}>
      {children}
    </formularioSimuladorContext.Provider>
  )
}
