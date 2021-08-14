import { NavLink } from 'react-router-dom';
import sitebar from './Sitebar.module.css';
import SitebarFriends from './SitebarFriends/SitebarFriends'

const Sitebar = (props) => {
  let friendsData = props.state.SitebarFriends.map( friends => <SitebarFriends image={friends.image} name={friends.name} /> )
  return (
         <div className={sitebar.Sitebar}>
           <div className={sitebar.body}>
             <ul className={sitebar.menu}>
               <li className={sitebar.menu__item}><NavLink className={sitebar.menu__link} activeClassName={sitebar.active} to="/Profile">Profile</NavLink></li>
               <li className={sitebar.menu__item}><NavLink className={sitebar.menu__link} activeClassName={sitebar.active} to="/Dialogs">Messages</NavLink></li>
               <li className={sitebar.menu__item}><NavLink className={sitebar.menu__link} to="/#3">News</NavLink></li>
               <li className={sitebar.menu__item}><NavLink className={sitebar.menu__link} to="/#4">Music</NavLink></li>
             </ul>
             <ul className={sitebar.navigation}>
               <li className={sitebar.navigation__item}><NavLink className={sitebar.navigation__link} to="/#5">Settings</NavLink></li>
             </ul>
             <ul className={sitebar.friends}>
                <div className={sitebar.friendsTitle}>Friends</div>
                <div className={sitebar.friendsData}>{ friendsData }</div>
             </ul>
           </div>
         </div>
  );
}
export default Sitebar;