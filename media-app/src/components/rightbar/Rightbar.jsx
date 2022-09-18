import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar() {
  return (
    <div className='rightbar'>
       <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/Mohd Nafees Image1.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 other frients </b>have a birthday today. 
          </span>
        </div>
        <img src="/assets/Mohd Nafees Image1.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

        {Users.map(u =>(
          <Online key={u.id} user={u}/>
        ))}

        </ul>
       </div>
    </div>
  )
}

export default Rightbar;
