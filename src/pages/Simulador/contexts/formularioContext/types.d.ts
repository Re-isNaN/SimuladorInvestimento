import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
} from 'react-hook-form'
import { ReactNode } from 'react'
import { z } from 'zod'
import { validarFormularioSimulador } from './validarCampos'

export type TDadosFormularioSimulador = z.infer<
  typeof validarFormularioSimulador
>

export interface IContextFormularioSimulador {
  register: UseFormRegister<TDadosFormularioSimulador>
  handleSubmit: UseFormHandleSubmit<TDadosFormularioSimulador>
  reset: UseFormReset<TDadosFormularioSimulador>
  errosCampos: FieldErrors<TDadosFormularioSimulador>
  control: Control<TDadosFormularioSimulador>
  watch: UseFormWatch<TDadosFormularioSimulador>
  anos: string[]
}

export interface IPropsFormularioSimuladorProvider {
  children: ReactNode
}
