import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export function App() {
  
const [users, setUsers] = useState<string[]>([]);
useEffect(() =>{
  const userarray = ["Jonas", "Nina", "Ahmed"]
  setUsers(userarray)
}, [])
  return (
    <div className="main">
      <h1 className="text-2xl underline">Spin the wheel or die?</h1>
      {users.map((user) => (
        <div className="flex flex-col">
          <button className="button">Purchase item from {user}</button>
          <Link className="link" to={`/profile/${user}`}>log in as {user}</Link>
        </div>
        ))}

    </div>

  )
}

export default App
