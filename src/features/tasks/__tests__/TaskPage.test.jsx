import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, beforeEach } from 'vitest'
import { TaskProvider } from '../../../context/TaskProvider'
import AddTask from '../components/AddTask'
import TaskList from '../components/TaskList'
import Filter from '../components/Filter'

describe('Mini Task Tracker - AddTask & TaskList', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  const setup = () => {
    render(
      <TaskProvider>
        <AddTask />
        <Filter />
        <TaskList />
      </TaskProvider>
    )
  }

  it('adds a task and displays it in the list', async () => {
    setup()
    const input = screen.getByPlaceholderText(/task title/i)
    const button = screen.getByRole('button', { name: /add task/i })

    await userEvent.type(input, 'WakeUP at 7AM')
    await userEvent.click(button)

    expect(await screen.findByText('WakeUP at 7AM')).toBeInTheDocument()
  })

  it('shows validation message when adding an empty task', async () => {
    setup()
    const button = screen.getByRole('button', { name: /add task/i })
    await userEvent.click(button)
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
  })

  it('marks a task as complete when checkbox is clicked', async () => {
    setup()
    const input = screen.getByPlaceholderText(/task title/i)
    const button = screen.getByRole('button', { name: /add task/i })
    await userEvent.type(input, 'WakeUP at 7AM')
    await userEvent.click(button)

    const checkbox = await screen.findByRole('checkbox')
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('should not crash if toggling invalid task', () => {
    setup()
    expect(() => {
      const fakeCheckbox = document.createElement('input')
      fakeCheckbox.type = 'checkbox'
      fakeCheckbox.click()
    }).not.toThrow()
  })

  //Positive: Filters tasks by category
it('filters tasks correctly by category', async () => {
  setup()
  const input = screen.getByPlaceholderText(/task title/i)
  const categorySelect = screen.getByLabelText(/select task category/i)
  const button = screen.getByRole('button', { name: /add task/i })

  // Add a "Work" task
  await userEvent.type(input, 'Work Task')
  await userEvent.selectOptions(categorySelect, 'Work')
  await userEvent.click(button)

  // Add a "Home" task
  await userEvent.type(input, 'Home Task')
  await userEvent.selectOptions(categorySelect, 'Home')
  await userEvent.click(button)

  // Get the filter <select>
  const filterSelect = screen.getByRole('combobox', { name: /filter tasks by category/i })

  // Filter by "Home"
  await userEvent.selectOptions(filterSelect, 'Home')

  // Expect only "Home Task" visible
  expect(await screen.findByText('Home Task')).toBeInTheDocument()
  expect(screen.queryByText('Work Task')).not.toBeInTheDocument()
})


  it('shows no tasks if category does not exist', async () => {
    setup()
    const input = screen.getByPlaceholderText(/task title/i)
    const categorySelect = screen.getByLabelText(/select task category/i)
    const button = screen.getByRole('button', { name: /add task/i })
    const filterSelect = screen.getByLabelText(/filter tasks by category/i)


    await userEvent.type(input, 'Some Task')
    await userEvent.selectOptions(categorySelect, 'Work')
    await userEvent.click(button)

    // varify invalid category
    filterSelect.value = 'InvalidCategory'
    filterSelect.dispatchEvent(new Event('change', { bubbles: true }))

    expect(screen.queryByText('Some Task')).not.toBeInTheDocument()
  })

  it('saves added tasks in localStorage', async () => {
    setup()
    const input = screen.getByPlaceholderText(/task title/i)
    const button = screen.getByRole('button', { name: /add task/i })

    await userEvent.type(input, 'Persistent Task')
    await userEvent.click(button)

    const data = JSON.parse(localStorage.getItem('task-tracker-tasks'))
    expect(data[0].title).toBe('Persistent Task')
  })

  it('handles corrupted localStorage data safely', () => {
    localStorage.setItem('task-tracker-tasks', 'not-json')
    expect(() => setup()).not.toThrow()
  })

  it('focuses back on input after task addition', async () => {
    setup()
    const input = screen.getByPlaceholderText(/task title/i)
    const button = screen.getByRole('button', { name: /add task/i })
    await userEvent.type(input, 'Focus Test')
    await userEvent.click(button)
    expect(document.activeElement).toBe(input)
  })

  it('should not crash if category list is empty', async () => {
    render(
      <TaskProvider>
        <AddTask categories={[]} />
      </TaskProvider>
    )
    const input = screen.getByPlaceholderText(/task title/i)
    expect(input).toBeInTheDocument()
  })
})
