import { Circles } from 'react-loader-spinner';
import './style.css';

const PageLoader = () => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[rgba(255,255,255,0.8)] z-[55] flex items-center justify-center'>
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
};

export default PageLoader;