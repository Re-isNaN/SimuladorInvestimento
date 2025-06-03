import { Pagination, PaginationItem } from '@mui/material'
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'

export function CustomPagination() {
  const apiRef = useGridApiContext()
  const page = useGridSelector(apiRef, gridPageSelector)
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  let atualPage = 0

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      siblingCount={1} // Desativa páginas extras (só exibiremos as manuais)
      boundaryCount={0} // Remove a exibição das primeiras e últimas páginas
      renderItem={(item) => {
        if (item.selected && item.page) {
          atualPage = item.page
        }

        const isAValidPage =
          (atualPage === item.page ||
            atualPage + 1 === item.page ||
            atualPage - 1 === item.page) &&
          item.type !== 'end-ellipsis' &&
          item.type !== 'start-ellipsis'

        // @ts-expect-error Biblioteca do MUI
        return isAValidPage ? <PaginationItem {...item} disableRipple /> : null
      }}
      onChange={
        (_event: React.ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1) // Ajusta a página no DataGrid
      }
    />
  )
}
