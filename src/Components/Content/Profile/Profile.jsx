import profile from'./Profile.module.css';

const Profile = () => {
  return (
             <div className={profile.profile}>
               <div className={profile.body}>
                  <div className={profile.image}>
                    <img className={profile.img} src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" alt="fsdfs" />
                  </div>
                  <div className={profile.nfo}>
                    <div className={profile.title}>Myroslav</div>
                    <div className={profile.text}>
                        <div className={profile.item}>Date of birth:</div>
                        <div className={profile.item}>City:</div>
                        <div className={profile.item}>Education:</div>
                        <div className={profile.item}>Website:</div>
                    </div>
                  </div>
               </div>
             </div>
  );
}
export default Profile;