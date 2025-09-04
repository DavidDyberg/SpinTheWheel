import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../type";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [msg, setMsg] = useState('')
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://[::1]:3000/users");
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err: unknown) {
        console.error("failed to fetch user data:", err);
      }
    };
    fetchUsers();
  }, []);
  const makePurchase = async (id: string) => {
    try {
      const res = await fetch(`http://[::1]:3000/user?user_id=${id}`, {
        credentials: "include",
        method: 'POST',
      })
      const data = await res.json()
      setMsg(data.message)
      setTimeout(() => {
        document.getElementById("message")!.style.display = "none"
      }, 3000)
    } catch(err: unknown) {
      if(err instanceof Error) {
        console.error("Failed to make a purchase ", err)
        return;
      }
    }
  }

  return (
    <div className="main">
      <h1 className="text-2xl underline">Spin the wheel or die?</h1>
      {users.map((user, index) => (

        <div className="flex flex-col" key={index}>
          <button onClick={() => makePurchase(user._id)} className="button">Purchase item from {user.name}</button>
          <Link className="link" to={`/profile/${user._id}`}>
            log in as {user.name}
          </Link>
        </div>
      ))}
      <p id="message">{msg}</p>
    </div>
  );
}

export default App;
