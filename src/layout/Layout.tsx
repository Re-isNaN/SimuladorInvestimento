import { Box, CssBaseline } from '@mui/material'
import { Header } from '../components/Header'
import { IPropsLayout } from './types'

export function Layout({ children }: IPropsLayout) {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          marginTop: '3.75rem',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            height: 'calc(100vh - 3.75rem)',
            padding: '0.5rem',
            backgroundColor: theme.palette.secondary.light,
          })}
        >
          {children}
        </Box>
      </Box>
    </>
  )
}
