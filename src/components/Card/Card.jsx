import { Link } from "react-router";

function Card(props) {
  const { id, name, coverImageUrl, caption } = props;
  return (
    <article className="card">
      <img src={coverImageUrl} alt="" />
      <div className="text">
        <h2>{name}</h2>
        <p>{caption}</p>
      </div>
      <Link to={`/user/${id}`}>read more</Link>
    </article>
  );
}

export default Card;
