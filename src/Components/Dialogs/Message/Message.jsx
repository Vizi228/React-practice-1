import message from './Message.module.css'


let MessageItem = (props) => {
  return  ( 
    <div className={message.message}>{props.message}</div>
  )

}
let Message = [
  {id: 1, message: "Hi"},
  {id: 2, message: "Hello"},
  {id: 3, message: "How are you"},
  {id: 4, message: "Im ok"},
  {id: 5, message: "What about you"},
  {id: 6, message: "Im also ok"}
] 
let MessagesData = Message.map( message => <MessageItem message = {message.message} />)



export default MessagesData;