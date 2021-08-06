import '../App.css';

const Sidebar = () => {
  return (
         <div className="Content__sidebar sidebar-content">
           <div className="sidebar-content__body">
              <ul className="sidebar-content__link">
              <li className="sidebar-content__item">Profile</li>
              <li className="sidebar-content__item">Messages</li>
              <li className="sidebar-content__item">News</li>
              <li className="sidebar-content__item">Music</li>
            </ul>
              <ul className="sidebar-content__navigation">
                <div className="sidebar-content__settings">
                   Settings
                </div>
              </ul>  
           </div>
         </div>
  );
}
export default Sidebar;