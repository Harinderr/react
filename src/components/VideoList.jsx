
import Video from "./video"


export default function VideoList({myvideos, closeVideo,editVideo}) {


  return (
    <>
  
      {myvideos.map((val, index) => 
        <Video
          key={index}
          title={val.title}
          channel={val.channel}
          views={val.views}
          time={val.time}
          id={val.id}
          closeVideo={closeVideo}
          editVideo={editVideo}
        ></Video>

      )}
   
      </>
  )
}