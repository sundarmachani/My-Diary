import { useParams, Link } from "react-router-dom";

export default function WelcomeComponent() {
  const { username } = useParams();

  return (
    <div className="welcomeComponent">
      <h1>Welcome to Your Diary <p className="userName">{username.toUpperCase()}</p> </h1>
      <div className="welcomeStories m-9">
      <h3>Your Diary stories - <Link to="/entries">go here</Link></h3>
      </div>
      
    </div>
  );
}
