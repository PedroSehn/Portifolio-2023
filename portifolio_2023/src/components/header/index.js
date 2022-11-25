import './style.scss';
import headerIcons from '../../assets/header'
import HeaderIcon from './header-icons';


function Header() {
  const icons = Object.keys(headerIcons);

  return (
    <header className="Header">
       { icons.map((index) => {
          const icon = headerIcons[index];
          return <HeaderIcon icons={ icon } name={index} refer={`${index}-section`}/>
       }) }
    </header>
  );
}

export default Header;
