import { useTasks } from '../../../hooks/useTasks'
export default function TaskList() {
  const { filteredTasks, toggleTask } = useTasks()

  return (
    <ul aria-label="Task list">
      {filteredTasks.length === 0 && <p className='no-list'>No tasks yet.</p>}
      {filteredTasks.map(task => {
        return (
          <li key={task.id} className={`task ${task.completed ? 'completed' : ''}`}>
            <label>
              <input id={task.id}
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark ${task.title} as complete`}
              />
            </label>
            <span
              title={task.title}
              className="truncate-title"
            >
              {task.title.length > 30 ? task.title.slice(0, 30) + '...' : task.title}
            </span>
            <span>{task.category}</span>
          </li>
        )
      })}
    </ul>
  )
}
