import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background dark:bg-darkbg transition-colors">
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded shadow hover:scale-105 transition-transform"
        >
          {darkMode ? '☀️ حالت روشن' : '🌙 حالت شب'}
        </button>
      </div>
      <LoginForm />
    </div>
  )
}

export default App