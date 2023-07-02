import { ListItem } from '../../components';
import './listratings.css';

function ListRating({ rating }) {
  return (
    <ul id="schoolRatingsList" className="school-ratings-list">
      <>
        <b>{rating.length} Ratings</b>
      </>
      {rating.map((item, index) => (
        <li key={item.id}>
          {item && <ListItem rating={item} />}

        </li>
      ))}
    </ul>
  );
}
export default ListRating;
