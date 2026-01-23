import type { Task } from '@/types/task';

export const TaskCardList = ({ tasks }: { tasks: Task[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {tasks.map((task) => (
                <div key={task.id} className="border p-4 ">
                    <div>{task.title}</div>
                    <small>{task.status}</small>
                </div>
            ))}
        </div> 
    )
}