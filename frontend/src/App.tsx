import { useEffect, useState } from 'react'

function App() {
const [users, setUsers] = useState<string[]>([]);
useEffect(() =>{
  const userarray = ["Jonas", "Nina", "Ahmed"]
  setUsers(userarray)
}, [])

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen">
      <h1 className="text-2xl underline">Spin the wheel or die?</h1>
      {users.map((user) => (
      <button className="button">Purchase item from {user}</button>
        ))}
    </div>
  )
}

export default App
