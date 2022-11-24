import './style.scss';


function HeaderIcon (props) {
  const { icon } = props;
  return(
    <div className='icon-parent'>
      <a href='https://www.youtube.com/watch?v=BxfaoyR5mQg'>
        <img src={ icon } alt='' className='icon'/>
      </a>
    </div>
  )
}

export default HeaderIcon;
