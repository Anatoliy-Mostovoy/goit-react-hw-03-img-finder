import s from './Button.module.css';
import PropTypes from 'prop-types';

export const MoreButton = ({ nextPage }) => {
  return (
    <button className={s.Button} type="button" onClick={nextPage}>
      Load more
    </button>
  );
};

MoreButton.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
