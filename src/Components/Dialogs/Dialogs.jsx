import dialogs from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.title}>Dialogs</div>
      <div className={dialogs.body}>
        <div className={dialogs.contacts}>
          <div className={dialogs.inner}>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/1">Myron</NavLink>
            </div>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/2">Bodya</NavLink>
            </div>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/3">Andrew</NavLink>
            </div>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/4">Johny</NavLink>
            </div>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/5">Oleg</NavLink>
            </div>
            <div className={dialogs.item}>
              <NavLink className={dialogs.item__link} activeClassName={dialogs.active} to="/Dialogs/6">Igor</NavLink>
            </div>
          </div>
        </div>
        <div className={dialogs.messages}>
          <div className={dialogs.message}>Hi</div>
          <div className={dialogs.message}>Hi</div>
          <div className={dialogs.message}>Ho</div>
          <div className={dialogs.message}>GF</div>
          <div className={dialogs.message}>HF</div>
          <div className={dialogs.message}>GT</div>
        </div>
      </div>
    </div>
  );
}



export default Dialogs;
