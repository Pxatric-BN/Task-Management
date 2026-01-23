import type { Task } from "@/types/task";

export const TaskTable = ({ tasks }: { tasks: Task[] }) => {
  return (
    <table className="w-full border">
        <thead>
            <tr>
                <th className="border">Task</th>
                <th className="border">Status</th>
            </tr>
        </thead>
        <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td className="border px-4 py-2">{task.title}</td>
                    <td className="border px-4 py-2">{task.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}