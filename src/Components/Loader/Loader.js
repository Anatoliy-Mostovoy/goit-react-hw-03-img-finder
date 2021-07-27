import Loader from 'react-loader-spinner';

export const CustomLoader = () => (
  <Loader
    type="Grid"
    color="#3f51b5"
    height={100}
    width={100}
    timeout={3000} //3 secs
  />
);
