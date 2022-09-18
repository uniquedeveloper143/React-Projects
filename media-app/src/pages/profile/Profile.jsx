import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() { 
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">

            <div className="profileCover">
              <img src="/assets/l1.jpeg" alt="" className="profileCoverImg"/>
              <img src="/assets/Mohd Nafees Image1.jpg" alt="" className="profileUserImg"/>
            </div>

            <div className="profileInfo">
              <h4 className="profileInfoName">Mohd Nafees</h4>
              <span className="profileInfoDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
