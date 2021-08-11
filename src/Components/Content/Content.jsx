import ContentImage from './Content Image/ContentImage';
import content from'./Content.module.css';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';

const Content = (props) => {

  return (
          
         <div className={content.Content}>
           <div className={content.body}>
             <div className={content.image}>
               <ContentImage />
             </div>
             <div className={content.profile}>         
                <Profile />
            </div>
             <div className={content.posts}>
                <Posts info={props.ReviewInfo}/>
             </div>
           </div>
         </div>

  );
}
export default Content;