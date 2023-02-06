import './logo.scss';

const Logo = ({src, name, scale}) => {

  return (
    <div className='pt-3 logo'>
      <img src={src} alt={name}/>
    </div>
  );
};

export default Logo;
