import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { NumericFormat } from 'react-number-format'
import { Controller } from 'react-hook-form'
import { useContextFormularioSimulador } from '../contexts/formularioContext'

export function FormularioSimulacao() {
  const { control, errosCampos, anos, watch } = useContextFormularioSimulador()
  const periodo = watch('periodo')

  return (
    <Card
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{ gap: 2, width: '100%', display: 'flex', flexDirection: 'row' }}
      >
        <Controller
          name="valorInicial"
          control={control}
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <NumericFormat
              value={value}
              onValueChange={(values) => onChange(values.floatValue)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              customInput={TextField}
              label="Valor Inicial"
              size="small"
              error={!!errosCampos.valorInicial}
              helperText={errosCampos.valorInicial?.message as string}
              onBlur={onBlur}
              inputRef={ref}
            />
          )}
        />

        <Controller
          name="aporteMensal"
          control={control}
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <NumericFormat
              value={value}
              onValueChange={(values) => onChange(values.floatValue)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="R$ "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              customInput={TextField}
              label="Aporte Mensal"
              size="small"
              error={!!errosCampos.aporteMensal}
              helperText={errosCampos.aporteMensal?.message as string}
              onBlur={onBlur}
              inputRef={ref}
            />
          )}
        />

        <Controller
          name="jurosMensal"
          control={control}
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <NumericFormat
              value={value}
              onValueChange={(values) => onChange(values.floatValue)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="% "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              customInput={TextField}
              label="Juros (Mensal)"
              size="small"
              error={!!errosCampos.jurosMensal}
              helperText={errosCampos.jurosMensal?.message as string}
              onBlur={onBlur}
              inputRef={ref}
            />
          )}
        />

        <Controller
          name="inflacaoAnual"
          control={control}
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <NumericFormat
              value={value}
              onValueChange={(values) => onChange(values.floatValue)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="% "
              decimalScale={2}
              fixedDecimalScale
              allowNegative={false}
              customInput={TextField}
              label="Inflação (Anual)"
              size="small"
              error={!!errosCampos.inflacaoAnual}
              helperText={errosCampos.inflacaoAnual?.message as string}
              onBlur={onBlur}
              inputRef={ref}
            />
          )}
        />

        <Controller
          name="reinvestimento"
          control={control}
          defaultValue={'SIM'}
          render={({ field, fieldState: { error } }) => (
            <Select
              size="small"
              defaultValue={'SIM'}
              error={!!error}
              {...field}
            >
              <MenuItem key={'comReinvestimento'} value={'SIM'}>
                COM REINVESTIMENTO
              </MenuItem>

              <MenuItem key={'semReinvestimento'} value={'NAO'}>
                SEM REINVESTIMENTO
              </MenuItem>
            </Select>
          )}
        />

        <FormControl sx={{ width: '13rem' }}>
          <InputLabel id="periodo-label">Período</InputLabel>
          <Controller
            name="periodo"
            control={control}
            defaultValue={'12'}
            render={({ field, fieldState: { error } }) => (
              <Select
                fullWidth
                size="small"
                labelId="periodo-label"
                id="periodo"
                label="Período"
                error={!!error}
                {...field}
              >
                <MenuItem key={'1'} value={'12'}>
                  1 ANO (12 MESES)
                </MenuItem>
                <MenuItem key={'2'} value={'24'}>
                  2 ANOS (24 MESES)
                </MenuItem>
                <MenuItem key={'4'} value={'48'}>
                  4 ANOS (48 MESES)
                </MenuItem>
                <MenuItem key={'5'} value={'60'}>
                  5 ANOS (60 MESES)
                </MenuItem>
                <MenuItem key={'10'} value={'120'}>
                  10 ANOS (120 MESES)
                </MenuItem>
                <MenuItem key={'20'} value={'240'}>
                  20 ANOS (240 MESES)
                </MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <FormControl sx={{ width: '12rem' }}>
          <InputLabel id="ano-label">Ano</InputLabel>
          <Controller
            name="ano"
            control={control}
            defaultValue={'1'}
            render={({ field, fieldState: { error } }) => (
              <Select
                size="small"
                labelId="ano-label"
                id="ano"
                label="Ano"
                error={!!error}
                {...field}
              >
                {anos.map((e) => {
                  return (
                    <MenuItem key={e} value={e}>
                      {e}° ANO - {parseInt(e) + parseInt(periodo) / 12 - 1}° ANO
                    </MenuItem>
                  )
                })}
              </Select>
            )}
          />
        </FormControl>
      </Box>
    </Card>
  )
}
