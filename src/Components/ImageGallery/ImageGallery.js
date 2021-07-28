import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ imgs, onImgClick }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imgs={imgs} onImgClick={onImgClick} />
    </ul>
  );
};
