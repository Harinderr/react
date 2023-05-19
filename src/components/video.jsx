 import './video.css'

function Video({title,channel,views,time,id,closeVideo,editVideo}){
  
    return (
        <>
        <div className="container">
            <button className='close' onClick={()=>closeVideo(id)}>×</button>
            <button className='edit'onClick={()=> editVideo(id)}>Edit</button>
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