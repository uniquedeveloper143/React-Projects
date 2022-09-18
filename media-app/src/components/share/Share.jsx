import "./share.css"
import {EmojiEmotions, Label, PermMedia, Room} from "@material-ui/icons"

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/Mohd Nafees Image1.jpg" alt="" className="shareProfileImg"/>
          <input placeholder="What's in your mind Mohd" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">

            <div className="shareOption">
              <PermMedia htmlColor="tomato"  className="shareIcon"/>
              <span className="shareOptionText">Photo or Viedio</span>
            </div>

            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Feelings</span>
            </div>

          </div>
          <button className="shareBotton">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share
