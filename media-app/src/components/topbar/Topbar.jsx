import React from 'react'
import "./topbar.css"
// import SearchIcon from '@material-ui/icons/Search';
import { Person, Search,Chat, Notifications } from '@material-ui/icons';

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Social Media</span>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input type="search" placeholder='search items' className="searchInput" />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">

          <div className="topbarIconItem">
          <Person />
          <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
          <Chat />
          <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
          <Notifications />
          <span className="topbarIconBadge">1</span>
          </div>

          <img src="/assets/Mohd Nafees Image1.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
