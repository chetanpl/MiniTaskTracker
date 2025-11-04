#  Mini Task Tracker

A simple and lightweight **Task Tracker** built with **React**. This app allows users to quickly add, manage, and filter tasks by category. It uses **React Context** for state management, persists tasks in **localStorage**, and is fully tested with **Vitest** and **React Testing Library**.

It is developed using the latest version of React (19.1.1).
Here is deployed app Vercel link: https://mini-task-tracker-eight.vercel.app/
---

## Features

- **Add Tasks** – Enter a title and select a category for your task.  
- **Task Categories** – Work, Personal, Home, or Other.  
- **Filter Tasks** – Easily view tasks by category.  
- **Mark as Complete** – Toggle tasks as completed.  
- **Local Storage** – Tasks persist even after refreshing the page.  
- **Responsive & Accessible** – Semantic HTML, ARIA labels, and accessible UI.  
- **Unit Tested** – Ensures all features work as expected.

---

## Tech Stack

| Area | Technology |
|------|------------|
| Frontend | React |
| State Management | React Context API |
| Styling | CSS (with optional custom classes) |
| Storage | LocalStorage |
| Testing | Vitest + React Testing Library |
| Build Tool | Vite |

---

## Project Structure
```
src/
│
├── context/
│   ├── TaskContext.js       # React Context for tasks
│   └── TaskProvider.jsx     # Provides TaskContext to components
│
├── features/tasks/
│   ├── __tests__/
│   │   └── TaskPage.test.jsx # Unit tests for tasks
│   ├── components/
│   │   ├── AddTask.jsx       # Form to add tasks
│   │   ├── TaskList.jsx      # Display task list
│   │   └── Filter.jsx        # Category filter dropdown
│   └── TaskPage.jsx          # Page to display all task components
│
├── hooks/
│   └── useTasks.js           # Custom hook for task context
│
├── Shared/ui/
│   ├── Button.jsx            # Reusable button component
│   ├── Input.jsx             # Reusable input component
│   └── Select.jsx            # Reusable select dropdown component
│
├── utils/
│   └── storage.js            # Load and save tasks from/to localStorage
│
└── App.jsx                   # Main entry point
```

## Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/mini-task-tracker.git
cd mini-task-tracker

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

The app will run at http://localhost:5173/ by default.


** Run all tests **

npm run test

** How to Use **

Type a task title in the input field.

Select a category from the dropdown.

Click Add Task — the task appears in the list.

Toggle completion using the checkbox next to each task.

Use the filter dropdown to view tasks by category.

Tasks remain saved even after refreshing the page.

Long task titles are truncated with "..." and the full title is visible on hover via a tooltip.

### App Screenshot
The app displays all previously recorded tasks and their categories.

<img width="509" height="382" alt="image" src="https://github.com/user-attachments/assets/4fadb0a4-b06e-448d-a435-2dd1efbce82e" />


Validation: When trying to add a task without a name

<img width="506" height="389" alt="image" src="https://github.com/user-attachments/assets/753d312c-db29-4a2f-a123-96cc7577d2bf" />


Filtered Shows only tasks of the "Home" category. 

<img width="503" height="263" alt="image" src="https://github.com/user-attachments/assets/75e37c00-f42a-4ab3-b25a-2b6589076dd5" />
