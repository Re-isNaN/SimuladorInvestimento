import { Box, Card, IconButton, Typography } from '@mui/material'
import { priceFormatter } from '@/utils/formatters'
import { useContextSimulacao } from '../contexts/simulacaoContext'
import { Check } from '@mui/icons-material'
import { Loading } from '@/components/Loading'

export function HeaderTotalizador() {
  const { totalAcumulado, totalInvestido, totalReal, buscarDados, carregando } =
    useContextSimulacao()

  if (carregando) return <Loading />

  return (
    <Card
      sx={{
        padding: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40rem',
      }}
    >
      <Box sx={{ width: '12rem', display: 'flex', flexDirection: 'column' }}>
        <Typography fontSize={16} fontWeight={600}>
          Total investido
        </Typography>
        <Typography fontSize={14}>
          {priceFormatter.format(totalInvestido)}
        </Typography>
      </Box>

      <Box sx={{ width: '12rem', display: 'flex', flexDirection: 'column' }}>
        <Typography fontSize={16} fontWeight={600}>
          Total acumulado
        </Typography>
        <Typography fontSize={14}>
          {priceFormatter.format(totalAcumulado || 0)}
        </Typography>
      </Box>

      <Box sx={{ width: '12rem', display: 'flex', flexDirection: 'column' }}>
        <Typography fontSize={16} fontWeight={600}>
          Total real
        </Typography>
        <Typography fontSize={14}>
          {priceFormatter.format(totalReal || 0)}
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', placeItems: 'center' }}>
        <IconButton
          sx={(theme) => ({
            color: '#FFF',
            backgroundColor: theme.palette.success.main,
            '&:hover': { backgroundColor: theme.palette.success.light },
          })}
          onClick={buscarDados}
        >
          <Check />
        </IconButton>
      </Box>
    </Card>
  )
}
