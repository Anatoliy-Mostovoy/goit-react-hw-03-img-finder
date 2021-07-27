import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export const CustomLoader = () => (
  <div className={s.Loader}>
    <Loader
      type="Grid"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  </div>
);
