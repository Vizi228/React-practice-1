import posts from'./Posts.module.css';
import ReviewData from './Review/Review';

const Posts = () => {
  return (
    <div className={posts.body}>
        <div className={posts.inner}>
           <div className={posts.title}>My posts</div>
           <form action="#" className={posts.input}>
             <div className={posts.text}>
               <textarea className={posts.textarea} placeholder="your news..." id="" ></textarea>
             </div>
             <div className={posts.button}>
               <button className={posts.btn}>Send</button>
             </div>
           </form>
        </div>
        <div className={posts.review}>
            { ReviewData }
        </div>
    </div>
  );
}
export default Posts;