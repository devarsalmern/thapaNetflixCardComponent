import serierData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <ul>
      {serierData.map((currElement) => (
        <SeriesCard key={currElement.id} currElement={currElement} />
      ))}
    </ul>
  );
};

export default NetflixSeries;

// export const Header = () => {
//   return <h1>Netflix</h1>;
// };

// export const Footer = () => {
//   return <h1>Footer</h1>;
// };
