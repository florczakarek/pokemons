import spinner from '../assets/spinner.gif';

const Loading = () => {
  return (
    <div>
      <img src={spinner} className='loading' alt='loading...' />;
    </div>
  );
};

export default Loading;
