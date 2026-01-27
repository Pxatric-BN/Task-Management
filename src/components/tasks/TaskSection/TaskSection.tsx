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
import { TaskDetailModal } from '@/components/tasks/TaskDetailModal'
import { TaskFormModal } from '@/components/tasks/TaskFormModal'
import { TaskDeleteModal } from '@/components/tasks/TaskDeleteModal'

export const TaskSection = () => {
  const styles = useStyles()

  
  const modal = TaskModalController()

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
                onCreate={modal.openCreate}
              />
            </Box>

            <Box sx={styles.taskContentStyle}>
              {view === 'card' ? (
                <TaskCardList
                  tasks={tasks}
                  onSelect={modal.openDetail}
                  onEdit={modal.openEdit}
                  onDelete={modal.openDelete}
                />
              ) : (
                <TaskTable
                  tasks={tasks}
                  onSelect={modal.openDetail}
                  onEdit={modal.openEdit}
                  onDelete={modal.openDelete}
                />
              )}
            </Box>

            {modal.type === 'detail' && (
              <TaskDetailModal
                open
                task={modal.task}
                onClose={modal.close}
                onEdit={modal.openEdit}
                onDelete={modal.openDelete}
              />
            )}

            {modal.type === 'form' && (
              <TaskFormModal
                open
                task={modal.task}
                onClose={modal.close}
                onSubmit={(data) => {
                  if (modal.task) {
                    // EDIT
                    console.log('update task', modal.task.id, data)
                  } else {
                    // CREATE
                    console.log('create task', data)
                  }
                  modal.close()
                }}
              />
            )}

            {modal.type === 'delete' && (
              <TaskDeleteModal
                open
                task={modal.task}
                onClose={modal.close}
              />
            )}

          </>
        )}
      </TaskController>
    </Box>
  )
}
