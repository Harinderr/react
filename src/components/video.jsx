 import { useContext } from 'react';
import './video.css'
import ThemeContext from '../content/ThemeContext';

function Video({title,channel,views,time,id,closeVideo,editVideo}){
  const Theme = useContext(ThemeContext)
    return (
        <>
        <div className={`container ${Theme}`}>
            <button className={`close ${Theme}`}onClick={()=>closeVideo(id)}>×</button>
            <button className={`edit ${Theme}`}onClick={()=> editVideo(id)}>Edit</button>
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
       
        </div>
        </>
       
    )
}

export default Video;