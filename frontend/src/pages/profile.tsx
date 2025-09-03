import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../type";

export const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();
  // const [history, setHistory] = useState()
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch(`http://[::1]:3000/user/${id}`);
      const data = await res.json();
      setUser(data);
    };
    getUser();
    //  const getRewards = async () => {
    //   const res = await fetch(`http://[::1]:3000/user/${id}`)
    //   const data = await res.json()
    //   setHistory(data)
    // }
    // getRewards()
    getUser();
  });
  const SpinWheel = async () => {
  };
  return (
    <div className="main">
      <h1>Hello {user?.name}!</h1>
      <img
        src="https://cdn.pixabay.com/photo/2021/12/16/03/04/spin-the-wheel-6873663_1280.png"
        alt="a wheel"
        className="h-48 wheel"
      ></img>
      <p>Your remaining spins: {user?.spins}</p>
      <button onClick={() => SpinWheel()}>Spin the wheeeeeeel</button>
    </div>
  );
};