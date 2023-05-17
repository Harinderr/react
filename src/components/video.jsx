 import './video.css'
import PlayButton from './playbutton';
function Video({title,channel,views,time,id}){
  
    return (
        <>
        <div className="container">
       <div className="pic"> <img
          src={`https://picsum.photos/id/${id}/200/300`}
         
          alt="Hedy Lamarr"
          className="photo"
        />
        </div>
        <div className="videoinfo">
        <div className="title">{title}</div>
        <div className="channelName">{channel}</div>
        <div className="views">{views} views <span>   </span> {time}</div>
        </div>
        <PlayButton></PlayButton>
        </div>
        </>
       
    )
}

export default Video;