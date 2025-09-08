import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Reward, User } from "../type";

export const Profile = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();
  const [history, setHistory] = useState<Reward[]>([]);
  const [isSpinning, setIsSpinning] = useState(false);

  const getUser = async () => {
    if (!id) return;
    try {
      const res = await fetch(`http://[::1]:3000/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser(data);
    } catch (err: unknown) {
      console.error("Failed to fetch user:", err);
    }
  };

  const getRewards = async () => {
    if (!id) return;
    try {
      const res = await fetch(`http://[::1]:3000/users/${id}/rewards`);
      const data = await res.json();
      console.log("rewards", data);
      setHistory(data.rewards);
    } catch (err: unknown) {
      console.error("Failed to fetch rewards:", err);
    }
  };

  useEffect(() => {
    getUser();
    getRewards();
  }, [id]);

  const SpinWheel = async () => {
    if (!id) return;
    try {
      setIsSpinning(true);

      setTimeout(() => {
        setIsSpinning(false);
      }, 1000);

      const res = await fetch(`http://[::1]:3000/users/${id}/spin`);
      const data = await res.json();
      console.log("spin result", data);
      alert(data.message);

      await getUser();
      await getRewards();
    } catch (err: unknown) {
      console.error("Failed to spin wheel:", err);
    }
  };

  return (
    <div className="main">
      <h1>Hello {user?.name}!</h1>
      <img
        src="https://cdn.pixabay.com/photo/2021/12/16/03/04/spin-the-wheel-6873663_1280.png"
        alt="a wheel"
        className={`h-48 wheel ${isSpinning ? "animate-spin" : ""}`}
      />
      <p>Your remaining spins: {user?.spins}</p>
      <button
        onClick={SpinWheel}
        className="bg-blue-400 rounded-2xl p-4 cursor-pointer transition ease-in-out hover:bg-blue-600"
      >
        Spin the wheeeeeeel
      </button>

      <p className="text-4xl mt-6">Your rewards</p>
      <section className="bg-slate-200 rounded-2xl p-4 mt-2">
        <h1>You have {history.length} rewards:</h1>
        {history.length === 0 ? (
          <p>No rewards yet.</p>
        ) : (
          history.map((reward) => (
            <p key={reward._id}>{reward.title ?? "Untitled reward"}</p>
          ))
        )}
      </section>
    </div>
  );
};
