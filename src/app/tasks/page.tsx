import {AppLayout}  from '@/components/layout/AppLayout/AppLayout'
import { NavSide } from '@/components/layout/NavSide/NavSide'
import { Header } from '@/components/layout/Header/Header'
import { TaskSection } from '@/components/tasks/TaskSection/TaskSection'

export default function TaskPage() {
  return (
   <AppLayout>
      <NavSide />
      <Header />
      <TaskSection />
  </AppLayout>
  )
}