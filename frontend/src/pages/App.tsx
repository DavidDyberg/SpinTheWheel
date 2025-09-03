import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export function App() {
  const [users, setUsers] = useState<string[]>([]);
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
  return (
    <div className="main">
      <h1 className="text-2xl underline">Spin the wheel or die?</h1>
      {users.map((user) => (
        <div className="flex flex-col">
          <button className="button">Purchase item from {user}</button>
          <Link className="link" to={`/profile/${user}`}>
            log in as {user}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default App;
