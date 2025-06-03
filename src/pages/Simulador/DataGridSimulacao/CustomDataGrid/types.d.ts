import { DataGridProps, GridColDef, GridValidRowModel } from '@mui/x-data-grid'

export interface IPropsCustomDataGrid extends Partial<DataGridProps> {
  dadosGrid: GridValidRowModel[]
  configDataGrid: GridColDef[]
}
