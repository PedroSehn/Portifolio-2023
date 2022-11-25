import './style.scss';
import React, { useContext } from 'react'
import AppContext from "../../context/AppContext";

function HeaderIcon (props) {
  const { icons, name, refer } = props;
  const { HeaderSelected, SetHeaderSelected } = useContext(AppContext);
  const icon = HeaderSelected === name ? icons.selected : icons.normal;
  return(
    <div className='icon-parent'  onClick={(e) => SetHeaderSelected(e.target.id)}>
      <a href={`#${refer}`}>
        <img src={icon} id={`${name}`} alt='' className='icon'/>
      </a>
    </div>
  )
}

export default HeaderIcon;
