import '/app/global.css';
import LikeButton from "./likebutton";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

  return (
    <div>
      <Header title="Profile Check?" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton/>

      
    </div>
  );
}