import type { SxProps, Theme } from '@mui/material'

const useStyles = () => {
  const titleStyle: SxProps<Theme> = {
    fontWeight: 600,
  }
  const headerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  }
  const buttonStyle: SxProps<Theme> = {
    display: 'flex',
    gap: 1,
  }
  const metaStyle: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexWrap: 'wrap',
  }
  const dateStyle: SxProps<Theme> = {
    fontWeight: 500,
  }
  const dividerStyle: SxProps<Theme> = {
    mx: 1,
  }
  const descriptionTitleStyle: SxProps<Theme> = {
    mt: 1,
  }
  const descriptionTextStyle: SxProps<Theme> = {
    mt: 1,
    color: 'text.secondary',
  }
  const activityStyle: SxProps<Theme> = {
    fontWeight: 600,
    mt: 2,
    mb: 2,
  }
  const commentBoxStyle: SxProps<Theme> = {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'grey.300',
    borderRadius: 2,
    p: 2,
    bgcolor: 'background.paper',
  }
  const comentDividerStyle: SxProps<Theme> = {
    my: 2,
  }
  const activityItemStyle: SxProps<Theme> = {
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start',
  }
  const avatarBoxStyle: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 40,
  }
  const avatarStyle: SxProps<Theme> = {
    width: 32,
    height: 32,
  }
  const timelineStyle: SxProps<Theme> = {
    width: '2px',
    height: 40,
    bgcolor: 'grey.300',
    mt: 1,
  }
  const userNameStyle: SxProps<Theme> = {
    fontWeight: 600,
  }
  const commentDateStyle: SxProps<Theme> = {
    color: 'text.secondary',
  }
  const contentStyle: SxProps<Theme> = {
    mt: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  }
  const actionBoxStyle: SxProps<Theme> = {
   width: 18,
   height: 18,
   border: '1px solid',
   borderColor: 'grey.400',
   borderRadius: '4px',
  }
  const commentTimelineStyle: SxProps<Theme> = {
    color: 'text.secondary',
    ml: 'auto',
    whiteSpace: 'nowrap',
  }
  return {
    headerStyle,
    titleStyle,
    buttonStyle,
    metaStyle,
    dateStyle,
    dividerStyle,
    descriptionTitleStyle,
    descriptionTextStyle,
    activityStyle,
    commentBoxStyle,
    comentDividerStyle,
    activityItemStyle,
    avatarBoxStyle,
    avatarStyle,
    timelineStyle,
    userNameStyle,
    commentDateStyle,
    contentStyle,
    actionBoxStyle,
    commentTimelineStyle,
   
  }
}

export default useStyles
