import { priceFormatter } from '@/utils/formatters'
import { Card } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useContextSimulacao } from '../contexts/simulacaoContext'
import { useEffect, useState } from 'react'
import { IDadosGridValoresMensais } from './types'
import { useContextFormularioSimulador } from '../contexts/formularioContext'
import { Loading } from '@/components/Loading'
import { CustomDataGrid } from './CustomDataGrid'

export function DataGridSimulacao() {
  const { watch } = useContextFormularioSimulador()
  const { getDadosSimulacao, carregando } = useContextSimulacao()

  const ano = watch('ano')

  const [dadosGrid, setDadosGrid] = useState<IDadosGridValoresMensais[]>([])

  useEffect(() => {
    const dadosSimulacao = getDadosSimulacao()
    if (dadosSimulacao.valorInvestido.length > 0) {
      const dadosFormatados: IDadosGridValoresMensais[] = []

      for (
        let index = 0;
        index < dadosSimulacao.valorInvestido.length;
        index++
      ) {
        const valorInvestidoMes = dadosSimulacao.valorInvestido[index]
        const rendimentoMes = dadosSimulacao.rendimento[index]

        dadosFormatados.push({
          id: index + 1,
          mes: `${(parseInt(ano) - 1 || 0) * 12 + index + 1}`,
          total: valorInvestidoMes + rendimentoMes,
        })
      }

      setDadosGrid(dadosFormatados)
    }
  }, [getDadosSimulacao])

  const configDataGrid: GridColDef[] = [
    {
      field: 'mes',
      headerName: 'Mês',
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      valueFormatter: (val) => `${val}° mês`,
    },
    {
      field: 'total',
      headerName: 'Total (R$)',
      flex: 4,
      disableColumnMenu: true,
      sortable: false,
      valueGetter: (val) => Number(val),
      valueFormatter: (val) => priceFormatter.format(val),
    },
  ]

  if (carregando) return <Loading />

  return (
    <Card
      sx={{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <CustomDataGrid dadosGrid={dadosGrid} configDataGrid={configDataGrid} />
    </Card>
  )
}
