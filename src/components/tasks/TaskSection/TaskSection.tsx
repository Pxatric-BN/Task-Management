'use client'

import { Box } from '@mui/material'
import {
  TaskController,
  TaskCardList,
  TaskTable,
  TaskToolBar,
} from '@/components/tasks'
import useStyles from './TaskSection.style'

export const TaskSection = () => {
  const styles = useStyles()

  return (
    <Box sx={styles.taskSectionStyle}>
      <TaskController>
        {({
          tasks,
          view,
          setView,
          search,
          setSearch,
          status,
          setStatus,
        }) => (
          <>
            <Box sx={styles.taskToolBarStyle}>
              <TaskToolBar
                view={view}
                onViewChange={setView}
                search={search}
                onSearchChange={setSearch}
                status={status}              
                onStatusChange={setStatus}  
              />
            </Box>
           <Box sx={styles.taskContentStyle}>
          {view === 'card' ? (
            <TaskCardList tasks={tasks} />
          ) : (
            <TaskTable tasks={tasks} />
          )}
        </Box>
          </>
        )}
      </TaskController>
    </Box>
  )
}
