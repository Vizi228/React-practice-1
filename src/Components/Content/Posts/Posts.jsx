import posts from'./Posts.module.css';
import Review from './Review/Review';
import React from 'react';

const Posts = (props) => {

  let ReviewData = props.info.map( rev => <Review text = {rev.text} src = {rev.src} />)



  let newPostElement = React.createRef();

  let addPost = () => {
    props.post();
  }
  let inputTextChange = () => {
    let text = newPostElement.current.value;
    props.inputChange(text);
  }


  return (
    <div className={posts.body}>
        <div className={posts.inner}>
           <div className={posts.title}>My posts</div>
             <div className={posts.text}>
               <textarea ref={newPostElement} onChange={ inputTextChange } className={posts.textarea} value={props.inputText} placeholder="Write your post..."></textarea>
             </div>
             <div className={posts.button}>
               <button className={posts.btn} onClick={ addPost } >Send</button>
             </div>
        </div>
        <div className={posts.review}>
            { ReviewData }
        </div>
    </div>
  );
}
export default Posts;