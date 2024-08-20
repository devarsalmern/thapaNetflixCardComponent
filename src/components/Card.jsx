const Card = () => {
  const name = "Queen of Tears";
  const rating = 8.1;
  const summary = "lorem ipsum";
  const returnGenre = () => {
    const genre = ["Drama", "Thriller"];
    return genre.join(", ");
  };
  return (
    <>
      <div>
        <img src="Queen of Tears.png" alt="" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
    </>
  );
};

export default Card;
