'use client'

import { Box } from '@mui/material'
import {
  TaskController,
  TaskCardList,
  TaskTable,
  TaskToolBar,
} from '@/components/tasks'
import useStyles from './TaskSection.style'
import { TaskModalController } from '@/components/tasks'

export const TaskSection = () => {
  const styles = useStyles()

  return (
    <Box sx={styles.taskSectionStyle}>
      <TaskModalController>
      {({ openDetail }) => (
      <TaskController>
        {({
          tasks,
          view,
          setView,
          search,
          setSearch,
          status,
          setStatus,
          priority,
          setPriority,
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
                priority={priority}
                onPriorityChange={setPriority}
              />
            </Box>
           <Box sx={styles.taskContentStyle}>
          {view === 'card' ? (
            <TaskCardList tasks={tasks} onSelect={openDetail} />
          ) : (
            <TaskTable tasks={tasks} onSelect={openDetail}/>
          )}
        </Box>
          </>
        )}
      </TaskController>
       )}
    </TaskModalController>
    </Box>
  )
}
