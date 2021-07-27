import s from './Button.module.css';

export const MoreButton = ({ nextPage }) => {
  return (
    <button className={s.Button} type="button" onClick={nextPage}>
      Load more
    </button>
  );
};
