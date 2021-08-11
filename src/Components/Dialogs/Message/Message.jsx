import message from './Message.module.css'

const MessageItem = (props) => {
  return  ( 
    <div className={message.message}>{props.message}</div>
  )
}

export default MessageItem;