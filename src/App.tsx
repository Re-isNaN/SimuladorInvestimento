import { Layout } from './layout/Layout'
import { ThemeProvider } from '@emotion/react'
import { temaPadrao } from './themes/Themes'
import { Simulador } from './pages/Simulador'
import { FormularioSimuladorProvider } from './pages/Simulador/contexts/formularioContext'
import { SimuladorProvider } from './pages/Simulador/contexts/simulacaoContext'

export function App() {
  return (
    <ThemeProvider theme={temaPadrao}>
      <Layout>
        <FormularioSimuladorProvider>
          <SimuladorProvider>
            <Simulador />
          </SimuladorProvider>
        </FormularioSimuladorProvider>
      </Layout>
    </ThemeProvider>
  )
}
