import ApexCharts from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import { Card } from '@mui/material'
import { useContextSimulacao } from '../contexts/simulacaoContext'
import { Loading } from '@/components/Loading'
import { useMemo } from 'react'
import { priceFormatter } from '@/utils/formatters'
import { useContextFormularioSimulador } from '../contexts/formularioContext'

export function GraficoSimulacao() {
  const { watch } = useContextFormularioSimulador()
  const { getDadosSimulacao, carregando } = useContextSimulacao()

  const ano = watch('ano')

  const dadosSimulacao = getDadosSimulacao()

  const configGraphic: {
    options: ApexOptions
    series: ApexOptions['series']
  } = useMemo(
    () => ({
      series: [
        {
          name: 'Inflação',
          type: 'column',
          data: dadosSimulacao.inflacao,
          color: '#FF4560',
        },
        {
          name: 'Valor investido',
          type: 'column',
          data: dadosSimulacao.valorInvestido,
          color: '#546E7A',
        },
        {
          name: 'Aporte',
          type: 'column',
          data: dadosSimulacao.aporte,
          color: '#008FFB',
        },
        {
          name: 'Rendimento',
          type: 'column',
          data: dadosSimulacao.rendimento,
          color: '#00E396',
        },
      ],
      options: {
        chart: {
          type: 'bar',
          stacked: true,
          animations: { enabled: false },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Simulação',
          offsetX: 30,
          offsetY: 20,
          style: {
            fontSize: '24px',
          },
        },
        xaxis: {
          categories: dadosSimulacao.aporte.map(
            (_e, i) => `${(parseInt(ano) - 1 || 0) * 12 + i + 1}° mês`,
          ),
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#000',
            },
            labels: {
              formatter: (val) => priceFormatter.format(val),
              style: {
                colors: '#000',
              },
            },
            tooltip: {
              enabled: true,
            },
            tickAmount: 0,
          },
        ],
        tooltip: {
          enabled: true,
          shared: true,
          intersect: false,
          y: { formatter: (val) => priceFormatter.format(val) },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40,
        },
      },
    }),
    [dadosSimulacao],
  )

  if (carregando) return <Loading />

  return (
    <Card
      sx={{
        padding: 1,
        width: '100%',
      }}
    >
      <ApexCharts
        height={560}
        options={configGraphic.options}
        series={configGraphic.series}
        type="bar"
      />
    </Card>
  )
}
