import React from 'react';
import textarea from './DialogTextarea.module.css'

 const DialogTextarea = () => {
    let textareaInput = React.createRef();
    let addMessage = () =>{
      let text = textareaInput.current.value;
      alert(text);
    }

    return (
      <div className={textarea.body}>
          <textarea className={textarea.input} ref={textareaInput} placeholder="Message"></textarea>
          <button className={textarea.buttun} onClick={addMessage} >Send</button>
      </div>
    );
  
}

export default DialogTextarea;