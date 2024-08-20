const SeriesCard = (props) => {
  return (
    <li key={props.key}>
      <div>
        <img
          src={props.currElement.img_url}
          alt="currentElent.name"
          width="40%"
          height="40%"
        />
      </div>
      <h2>Name: {props.currElement.name}</h2>
      <h3>Rating: {props.currElement.rating}</h3>
      <p>Summary: {props.currElement.description}</p>
      <p>Cast {props.currElement.cast}</p>
      <p>Genre: {props.currElement.genre}</p>
      <a href={props.currElement.watch_url} target="_blank">
        <button>Watch Now</button>
      </a>
    </li>
  );
};

export default SeriesCard;
