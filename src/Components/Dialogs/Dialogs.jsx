import dialogs from './Dialogs.module.css'
import DialogsItem from './Dialog/Dialog'
import MessageItem from './Message/Message'




const Dialogs = (props) => {
  let DialogsData = props.state.DialogsData.map( name => <DialogsItem name = {name.name} id = {name.id}/>);
  let MessagesData = props.state.MessageData.map( message => <MessageItem message = {message.message} />)

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
