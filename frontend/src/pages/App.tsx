import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../type";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);
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
      {users.map((user, index) => (

        <div className="flex flex-col" key={index}>
          <button className="button">Purchase item from {user.name}</button>
          <Link className="link" to={`/profile/${user.id}`}>
            log in as {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default App;
