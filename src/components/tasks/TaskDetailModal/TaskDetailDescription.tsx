import { Typography } from '@mui/material'
import useStyles from './TaskDetailModal.style'

interface Props {
  description?: string
}

export const TaskDetailDescription = ({ description }: Props) => {
  const styles = useStyles()
  return (
    <>
      <Typography sx={styles.descriptionTitleStyle}>Description</Typography>
      <Typography sx={styles.descriptionTextStyle}>
        {description || '-'}
      </Typography>
    </>
  )
}
