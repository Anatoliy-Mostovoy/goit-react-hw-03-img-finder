import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imgs }) => {
  return (
    <>
      {imgs.map(img => {
        return (
          <li className={s.ImageGalleryItem} key={img.id}>
            <img
              src={img.webformatURL}
              alt={img.tags}
              className={s.ImageGalleryItemImage}
            />
          </li>
        );
      })}
    </>
  );
};