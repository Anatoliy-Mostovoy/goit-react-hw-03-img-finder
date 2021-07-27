import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ imgs }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem imgs={imgs} />
    </ul>
  );
};
