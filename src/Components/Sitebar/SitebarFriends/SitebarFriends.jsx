import sitefriend from './SitebarFriends.module.css'

const SitebarFriends = (props) => {

    return (
      <div className={sitefriend.body}>
          <div className={sitefriend.image}><img className={sitefriend.img} src={props.image} alt="dad" /></div>
          <div className={sitefriend.name}>{ props.name }</div>
      </div>
    );
}

export default SitebarFriends;