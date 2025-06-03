import { styled } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',
  fontSize: '12px',
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#FFF',
  },
  '& .MuiDataGrid-row:nth-of-type(even)': {
    backgroundColor: theme.palette.grey[300],
    ':hover': {
      backgroundColor: theme.palette.grey[400],
    },
  },
  '& .MuiDataGrid-row:nth-of-type(odd)': {
    backgroundColor: theme.palette.background.default,
    ':hover': {
      backgroundColor: theme.palette.grey[400],
    },
  },
}))
