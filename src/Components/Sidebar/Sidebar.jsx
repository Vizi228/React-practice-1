import sidebar from './Sidebar.module.css';

const Sidebar = () => {
  return (
         <div className={sidebar.Sidebar}>
           <div className={sidebar.body}>
             <ul className={sidebar.menu}>
               <li className={sidebar.menu__item}><a className={sidebar.menu__link} href="#1">Profile</a></li>
               <li className={sidebar.menu__item}><a className={sidebar.menu__link} href="#2">Messages</a></li>
               <li className={sidebar.menu__item}><a className={sidebar.menu__link} href="#3">News</a></li>
               <li className={sidebar.menu__item}><a className={sidebar.menu__link} href="#4">Music</a></li>
             </ul>
             <ul className={sidebar.navigation}>
               <li className={sidebar.navigation__item}><a className={sidebar.navigation__link}  href="#5">Settings</a></li>
             </ul>
           </div>
         </div>
  );
}
export default Sidebar;