import { Box, Avatar, Typography, TextField, Button, Divider } from '@mui/material'
import { formatDate } from '@/utils'
import useStyles from './TaskDetailModal.style'

interface Props {
  createdAt: Date
}

export const TaskDetailActivity = ({ createdAt }: Props) => {
  const styles = useStyles()
  return (
    <>
      <Typography sx={styles.activityStyle}>
        Activity
      </Typography>

     
      <Box
       sx={styles.commentBoxStyle}
      >
        <Avatar />
        <TextField fullWidth size="small" placeholder="Add a comment..." />
        <Button variant="contained">Comment</Button>
      </Box>

      <Divider sx={styles.comentDividerStyle} />

      <Box sx={styles.activityItemStyle}>
        <Box
          sx={styles.avatarBoxStyle}
        >
          <Avatar sx={styles.avatarStyle} />

         
          <Box
            sx={styles.timelineStyle}
          />
        </Box>

        
        <Box>
          <Typography sx={styles.userNameStyle}>John Doe</Typography>

          <Typography variant="body2" sx={styles.commentDateStyle}>
            Created this task on {formatDate(createdAt)}
          </Typography>

          <Box sx={styles.contentStyle}>
            <Box
              sx={styles.actionBoxStyle}
            />
            <Typography variant="body2" sx={styles.commentDateStyle}>
              Created the task
            </Typography>
          </Box>
        </Box>

        
        <Typography
          sx={styles.commentTimelineStyle}
        >
          1 hour ago
        </Typography>
      </Box>
    </>
  )
}
