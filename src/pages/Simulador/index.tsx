import { GraficoSimulacao } from './GraficoSimulacao'
import { DataGridSimulacao } from './DataGridSimulacao'
import { FormularioSimulacao } from './FormularioSimulacao'
import { HeaderTotalizador } from './HeaderTotalizador'
import {
  StyledContainerAbsoluto,
  StyledContainerInfo,
  StyledContainerSimulacao,
} from './styles'

export function Simulador() {
  return (
    <StyledContainerAbsoluto>
      <FormularioSimulacao />

      <StyledContainerSimulacao>
        <StyledContainerInfo>
          <HeaderTotalizador />

          <GraficoSimulacao />
        </StyledContainerInfo>

        <DataGridSimulacao />
      </StyledContainerSimulacao>
    </StyledContainerAbsoluto>
  )
}
