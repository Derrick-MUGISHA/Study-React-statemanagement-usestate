import { useState } from 'react'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router';
import SignUp from './signup';


export function State() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [profile, setProfile] = useState({ name: "Aline", city: "Kigali", available: true });

  const [tasks, setTasks] = useState([]);

  const addTask = (title) => setTasks((prev) => [...prev, { id: crypto.randomUUID(), title, done: false }]);

  const toggleTask = (id) =>
  setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));
  

  return (
    <>
    <div className="div">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <br />
      <br />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={() => setName('')}>
        Clear
      </button>
      {`These is the profile name ${profile.name}`}
      <button onClick={() => setProfile({name: 'John'})}>Change Name</button>
      <br />
      <button onClick={() => addTask('New Task')}>Add Task</button>
      {tasks.map((task) => (
        <>
        <div key={task.id}>
          {task.title}
          <button onClick={() => toggleTask(task.id)}>Toggle</button>
          <div>
            {task.done ? 'Done' : 'Not Done'}
          </div>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
        <br />
        </>
        ))}


      <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}



function App() {

  return (
      <Routes>
        <Route path='/' element={<State />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
  )
}  
export default App
