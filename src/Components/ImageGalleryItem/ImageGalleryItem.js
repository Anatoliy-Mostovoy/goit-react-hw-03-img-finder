import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imgs, onImgClick }) => {
  return (
    <>
      {imgs.map(img => {
        return (
          <li className={s.ImageGalleryItem} key={img.id}>
            <img
              src={img.webformatURL}
              alt={img.tags}
              className={s.ImageGalleryItemImage}
              onClick={() => onImgClick(img.largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imgs: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
