import { useParams } from "react-router-dom";

export const Profile = () => {
  const { slug } = useParams();
  function SpinWheel() {
    // code
  }
  return (
    <div className="main">
      <h1>Hello {slug}!</h1>
      <img
        src="https://cdn.pixabay.com/photo/2021/12/16/03/04/spin-the-wheel-6873663_1280.png"
        alt="a wheel"
        className="h-32 wheel"
      ></img>
      <p> {slug}.</p>
      <button onClick={() => SpinWheel()}></button>
    </div>
  );
};
