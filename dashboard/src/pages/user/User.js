import React from "react";
import "./User.css";
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from '@material-ui/icons';
import { Link } from "react-router-dom";



const User = () => {
  return <div className="user">
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
           <Link to='/newUser'>
          <button className='userAddButton'>Create</button>
            </Link>
          
      </div>
      <div className="userContainer">
          <div className="userShow">
              <div className="userShowTop">
                  <img src="https://images.pexels.com/photos/8157417/pexels-photo-8157417.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 " alt="" className="userShowImg" />
                  </div>
                  <div className="userShowTopTitle">
                      <span className="userShowUsername">Anna Kendric</span>
                      <span className="userShowUserTitle">Actress</span>
                  </div>
                  <div className="userShowBottom">
                      <span className="userShowTitle">Account Details</span>
                      
                      <div className="userShowInfo">
                       <PermIdentity className='userShowIcon'/>
                      <span className="userShowInfoTitle">AnnaKendric19</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>

                      <div className="userShowInfo">
                       <CalendarToday className='userShowIcon'/>
                      <span className="userShowInfoTitle">16.12.89</span>
                      </div>
                      <div className="userShowInfo">
                       <MailOutline className='userShowIcon'/>
                      <span className="userShowInfoTitle">AnnaKendric19@gmail.com</span>
                      </div>
                      <div className="userShowInfo">
                       <PhoneAndroid className='userShowIcon'/>
                      <span className="userShowInfoTitle">+4591437116</span>
                      </div>
                      <div className="userShowInfo">
                       <LocationSearching className='userShowIcon'/>
                      <span className="userShowInfoTitle">New York | USA </span>
                      </div>
                      
                  </div>
                  </div>

                  
          <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form action="" className='userUpdateForm'>
                  
                  <div className="userUpdateLeft">
                      <div className="userUpdateItem">
                      <label>Username</label>
                      <input type='text' placeholder='AnnaKendric19' className='userUpdateInput'/>
                      </div>

                      <div className="userUpdateItem">
                      <label>Full Name</label>
                      <input type='text' placeholder='Anna Kendric' className='userUpdateInput'/>
                      </div>

                      <div className="userUpdateItem">
                      <label>Email</label>
                      <input type='text' placeholder='AnnaKendric19@gmail.com' className='userUpdateInput'/>
                      </div>

                      <div className="userUpdateItem">
                      <label>Phone</label>
                      <input type='text' placeholder='+459143716' className='userUpdateInput'/>
                      </div>
                      <div className="userUpdateItem">
                      <label>Address</label>
                      <input type='text' placeholder='New York | USA' className='userUpdateInput'/>
                      </div>
                      
                      
                  </div>
                  <div className="userUpdateRight">
                      <div className="userUpdateUpload">
                       <img src="https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="userUpdateImg" />
                      <label for='file'><Publish className='userUpdateIcon' /> </label>
                      <input type='file' id='file' style={{display:'none'}} />
                      
                      </div>
                      <button className="userUpdateButton">
                          update
                      </button>
                      
                  </div>
              </form>
              
              </div>
      </div>
  </div>;
};

export default User;
