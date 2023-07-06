import RestaurantItem from './RestaurantItem';
import PropTypes from 'prop-types';

const RestaurantsList = ({ restaurants }) => {
  return (
    <div className='grid'>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </div>
  )
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default RestaurantsList
