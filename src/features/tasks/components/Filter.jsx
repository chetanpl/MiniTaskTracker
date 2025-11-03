import { useTasks } from '../../../hooks/useTasks'
const categories = ['All', 'Work', 'Personal', 'Home', 'Other']

export default function Filter() {
  const { filter, setFilter } = useTasks()

  return (
    <div className="filter">
      <select id="taskCategory" aria-label="Filter tasks by category" value={filter} onChange={(e) => setFilter(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  )
}
