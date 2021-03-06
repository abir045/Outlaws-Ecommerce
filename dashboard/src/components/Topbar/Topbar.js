import React from "react";
import './topbar.css';
import  {NotificationsNone, Language, Settings   } from '@material-ui/icons';


const Topbar = () => {
  return <div className='topbar'>
      <div className='topbarWrapper'>
       <div className="topLeft">
       <span className='logo'>OutlawsAdmin</span>

       </div>
       <div className="topRight">
     <div className="topbarIconContainer">
        <NotificationsNone/>
        <span className='topIconBadge'>2</span>
     </div>
     <div className="topbarIconContainer">
        <Language/>
        <span className='topIconBadge'>2</span>
     </div>
     <div className="topbarIconContainer">
        <Settings/>    
     </div>
 <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="topAvatar" />
       </div>
       
      </div>
    
       </div>;

};

export default Topbar;
