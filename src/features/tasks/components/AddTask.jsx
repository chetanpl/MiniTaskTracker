import { useRef, useState, useEffect } from 'react'
import { useTasks } from '../../../hooks/useTasks'
import Button from './../../../Shared/ui/Button'
import Input from './../../../Shared/ui/Input'
import Select from './../../../Shared/ui/Select'

const categories = ['Work', 'Personal', 'Home', 'Other']

export default function AddTask() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(
    localStorage.getItem('lastCategory') || 'Work'
  )
  const [error, setError] = useState(false);
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [title])

  const handleAdd = (e) => {
    e.preventDefault()
    if (!title.trim()) { setError(true); 
    return;}
    addTask(title.trim(), category)
    setTitle('')
    localStorage.setItem('lastCategory', category)
    inputRef.current.focus()
  }

  return (
    <form onSubmit={handleAdd} className='formContainer' aria-label="Add new task form">
      <Input
        id="task"
        ariaLabel="Task title input"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (error && e.target.value.trim()) setError(false); 
        }}
        placeholder="Task title"
        inputRef={inputRef}
        className={error ? 'error' : ''}
      />
      <Select
        id="selectTask"
        ariaLabel="Select task category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={categories}
        className='select'
      />

      <Button
        id="AddTask"
        type="submit"
        ariaLabel="Add task"
        className="button"
      >
        Add
      </Button>
    </form>
  )
}
