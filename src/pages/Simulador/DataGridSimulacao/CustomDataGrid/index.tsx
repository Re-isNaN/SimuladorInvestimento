import { IPropsCustomDataGrid } from './types'
import { CustomPagination } from './CustomPaginationDataGrid'
import { StyledDataGrid } from './styles'

export function CustomDataGrid({
  dadosGrid,
  configDataGrid,
}: IPropsCustomDataGrid) {
  return (
    <StyledDataGrid
      rows={dadosGrid || []}
      columns={configDataGrid}
      slots={{
        toolbar: null,
        pagination: CustomPagination,
      }}
      disableDensitySelector
      disableMultipleRowSelection
      disableColumnSelector
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 12,
          },
        },
      }}
      pageSizeOptions={[12]}
    />
  )
}
