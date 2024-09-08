import { Circles } from 'react-loader-spinner';

const LoadingSpinner = () => (
  <div className='text-center grid place-content-center'>
    <Circles
      height={80}
      width={80}
      color='#593A9E'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='circles-loading'
      
    />
  </div>
);

export default LoadingSpinner;