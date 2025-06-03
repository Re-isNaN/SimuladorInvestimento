import { Box, styled } from '@mui/material'

export const StyledContainerAbsoluto = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const StyledContainerSimulacao = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: 4,
  height: '100%',
})

export const StyledContainerInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: '80%',
  justifyContent: 'space-between',
})
