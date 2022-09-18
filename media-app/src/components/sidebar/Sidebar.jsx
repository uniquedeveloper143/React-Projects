import React from 'react'
import './sidebar.css'
import {RssFeed, HelpOutline,WorkOutline,School,Event, Bookmark, Group, PlayCircleFilledOutlined, Chat} from '@material-ui/icons';
import {Users} from '../../dummyData';
import CloseFriends from '../clodeFriends/CloseFriends';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="didebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarListText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarListText">Chats</span>
          </li>

          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarListText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarListText">Groups</span>
          </li>

          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarListText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarListText">Questions</span>
          </li>

          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarListText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarListText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarListText">Courses</span>
          </li>
        </ul> 
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">

          {Users.map((u) =>
            <CloseFriends key={u.id} user={u} />
          )}

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
