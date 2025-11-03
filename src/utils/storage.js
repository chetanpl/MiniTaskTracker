const STORAGE_KEY = 'task-tracker-tasks'

export const loadTasks = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch (error){
    console.log('Something went wrong in parse.',error.message)
    return []
  }
}

export const saveTasks = (tasks) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}
