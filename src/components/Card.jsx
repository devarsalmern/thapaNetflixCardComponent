const Card = () => {
  const name = "Queen of Tears";
  const rating = 8.1;
  const summary = "lorem ipsum";
  const returnGenre = () => {
    const genre = ["Drama", "Thriller"];
    return genre.join(", ");
  };
  // let age = 18;
  // let canWatch = "Not Available";
  // if (age >= 18) {
  //   canWatch = "Watch Now";
  // }
  const canWatch = (age) => {
    if (age >= 18) {
      return "Watch Now";
    }
    return "Not Available";
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
      {/* <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> */}
      {/*Another way */}
      {/* <button>{canWatch}</button> */}
      {/*Another way */}
      <button>{canWatch(18)}</button>
    </>
  );
};

export default Card;
