import { z } from 'zod'

export const validarFormularioSimulador = z.object(
  {
    valorInicial: z.coerce.number({
      required_error: `Campo obrigatório`,
      invalid_type_error: `Campo inválido`,
    }),

    aporteMensal: z.coerce
      .number({
        required_error: `Campo obrigatório`,
        invalid_type_error: `Campo inválido`,
      })
      .optional()
      .default(0),

    jurosMensal: z.coerce.number({
      required_error: `Campo obrigatório`,
      invalid_type_error: `Campo inválido`,
    }),

    inflacaoAnual: z.coerce
      .number({
        required_error: `Campo obrigatório`,
        invalid_type_error: `Campo inválido`,
      })
      .optional()
      .default(0),

    reinvestimento: z.enum(['SIM', 'NAO']).optional().default('SIM'),

    // periodo em Meses, 1 ANO, 2 ANOS, 3 ANOS, 5 ANOS, 10 ANOS, 20 ANOS E 25 ANOS
    periodo: z
      .enum(['12', '24', '48', '60', '120', '240'])
      .optional()
      .default('12'),

    ano: z.string().optional().default('1'),
  },
  { required_error: `Campos devem ser preenchido` },
)
