import dialog from './Dialog.module.css'
import { NavLink } from 'react-router-dom';


let DialogsItem = (props) => {
  return (
    <div className={dialog.item}>
      <NavLink className={dialog.item__link} activeClassName={dialog.active} to={"/Dialogs/" + props.id} >{ props.name }</NavLink>
    </div>
  );
}

let DialogsName = [
    {id: 1 , name: "Myron"},
    {id: 2 , name: "Oleg"},
    {id: 3 , name: "Andrew"},
    {id: 4 , name: "Dimych"},
    {id: 5 , name: "Igor"},
    {id: 6 , name: "Svetlana"},
]

let DialogsData = DialogsName.map( name => <DialogsItem name = {name.name} id = {name.id}/>);

export default DialogsData;
