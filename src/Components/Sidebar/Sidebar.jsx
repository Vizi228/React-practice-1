import { NavLink } from 'react-router-dom';
import sidebar from './Sidebar.module.css';

const Sidebar = () => {
  return (
         <div className={sidebar.Sidebar}>
           <div className={sidebar.body}>
             <ul className={sidebar.menu}>
               <li className={sidebar.menu__item}><NavLink className={sidebar.menu__link} activeClassName={sidebar.active} to="/Profile">Profile</NavLink></li>
               <li className={sidebar.menu__item}><NavLink className={sidebar.menu__link} activeClassName={sidebar.active} to="/Dialogs">Messages</NavLink></li>
               <li className={sidebar.menu__item}><NavLink className={sidebar.menu__link} to="/#3">News</NavLink></li>
               <li className={sidebar.menu__item}><NavLink className={sidebar.menu__link} to="/#4">Music</NavLink></li>
             </ul>
             <ul className={sidebar.navigation}>
               <li className={sidebar.navigation__item}><NavLink className={sidebar.navigation__link} to="/#5">Settings</NavLink></li>
             </ul>
           </div>
         </div>
  );
}
export default Sidebar;