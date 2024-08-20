import serierData from "../api/seriesData.json";
const Card = () => {
  return (
    <ul>
      {serierData.map((currElement) => {
        return (
          <li key={currElement.id}>
            <div>
              <img
                src={currElement.img_url}
                alt="currentElent.name"
                width="40%"
                height="40%"
              />
            </div>
            <h2>Name: {currElement.name}</h2>
            <h3>Rating: {currElement.rating}</h3>
            <p>Summary: {currElement.description}</p>
            <p>Cast {currElement.cast}</p>
            <p>Genre: {currElement.genre}</p>
            <a href={currElement.watch_url} target="_blank">
              <button>Watch Now</button>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;

// export const Header = () => {
//   return <h1>Netflix</h1>;
// };

// export const Footer = () => {
//   return <h1>Footer</h1>;
// };
