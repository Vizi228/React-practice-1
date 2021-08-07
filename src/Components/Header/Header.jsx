import header from'./Header.module.css';


const Header = () => {
  return (
    <div className={header.Header}>
      <div className={header.body}>
        <div className={header.logo}>
          <img className={header.image} alt="sds" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1724px-Apple_logo_black.svg.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;