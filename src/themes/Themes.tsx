import { createTheme } from '@mui/material'
import { ptBR as coreptBR } from '@mui/material/locale'
import { ptBR as dataGridptBR } from '@mui/x-data-grid/locales'

const mixinsPadrao = {
  toolbar: {
    minHeight: 60,
    paddingTop: 8,
    paddingBottom: 8,
  },
}

const infoPalletePadrao = {
  main: '#1144FF',
  contrastText: '#FFF',
}

const textPalletePadrao = {
  primary: '#000000',
  dark: '#000000',
  secondary: '#a7a7a7',
}

export const temaPadrao = createTheme(
  {
    direction: 'ltr',
    mixins: mixinsPadrao,
    palette: {
      success: {
        main: '#018E42',
        light: '#4caf50',
      },

      info: infoPalletePadrao,

      error: {
        main: '#ff5500',
        dark: '#ff7b00',
        light: '#ffcec4',
      },

      warning: {
        main: '#fdff91',
        contrastText: '#000',
      },

      text: textPalletePadrao,

      primary: {
        main: '#235789',
        dark: '#61A0AF',
        contrastText: '#FFFFFF',
      },

      secondary: {
        main: '#898989',
        dark: '#6A6A6A',
        light: '#f0f0f0',
        contrastText: '#000000',
      },
    },
  },
  coreptBR,
  dataGridptBR,
)
