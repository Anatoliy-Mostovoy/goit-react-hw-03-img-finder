import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imgs, onImgClick }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imgs={imgs} onImgClick={onImgClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  imgs: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
