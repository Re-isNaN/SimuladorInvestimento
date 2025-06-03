import { Icon, Toolbar, Typography } from '@mui/material'
import { AppBarComponent } from './styles'
import { ViewInAr } from '@mui/icons-material'

export function AppBarHeader() {
  return (
    <AppBarComponent position="fixed">
      <Toolbar>
        <Icon sx={{ marginRight: 1 }}>
          <ViewInAr />
        </Icon>
        <Typography
          variant="h5"
          width={'100%'}
          component="div"
          color="primary.info"
        >
          Simulação Investimento
        </Typography>
      </Toolbar>
    </AppBarComponent>
  )
}
