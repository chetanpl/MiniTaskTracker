import { TaskProvider } from './context/TaskProvider'
import TaskPage from './features/tasks/TaskPage'

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Mini Task Tracker</h1>
        <TaskPage />
      </div>
    </TaskProvider> 
  )
}

export default App
