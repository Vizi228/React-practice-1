import dialog from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  return (
    <div className={dialog.item}>
      <NavLink className={dialog.item__link} activeClassName={dialog.active} to={"/Dialogs/" + props.id} >{ props.name }</NavLink>
    </div>
  );
}

export default DialogsItem;