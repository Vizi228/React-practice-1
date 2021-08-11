import dialogs from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogsData from './Dialog/Dialog'
import MessagesData from './Message/Message';




const Dialogs = () => {
  return (
    <div className={dialogs.dialogs}>
      <div className={dialogs.title}>Dialogs</div>
      <div className={dialogs.body}>
        <div className={dialogs.contacts}>
          <div className={dialogs.inner}>
           { DialogsData }
          </div>
        </div>
        <div className={dialogs.messages}>
          { MessagesData }
        </div>
      </div>
    </div>
  );
}



export default Dialogs;
