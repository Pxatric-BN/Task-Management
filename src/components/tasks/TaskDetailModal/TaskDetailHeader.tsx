import { Box, Typography, Button } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import useStyles from './TaskDetailModal.style'

interface Props {
  title: string
  onEdit?: () => void
  onDelete?: () => void
}

export const TaskDetailHeader = ({ title, onEdit, onDelete }: Props) => {
  const styles = useStyles()
  return (
    <Box sx={styles.headerStyle}>
      <Typography variant="h6" sx={styles.titleStyle}>
        {title}
      </Typography>

      <Box sx={styles.buttonStyle}>
        <Button size="small"  variant="outlined"  startIcon={<EditOutlinedIcon />} onClick={onEdit}>
          Edit
        </Button>
        <Button size="small"  variant="outlined" color="error" onClick={onDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  )
}
