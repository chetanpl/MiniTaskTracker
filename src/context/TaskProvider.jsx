import { useState, useEffect } from 'react'
import { TaskContext } from './TaskContext'
import { loadTasks, saveTasks } from '../utils/storage'

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(loadTasks())
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = (title, category) => {
    setTasks(prev => [
      ...prev,
      { id: Date.now(), title, category, completed: false },
    ])
  }

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter(task => task.category === filter)

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        filter,
        setFilter,
        filteredTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
