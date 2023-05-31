import { useEffect, useState } from "react";

const intitalState = {
  title: "",
  channel: "",
  views: "10k",
  time: "2 months ago",
  verified: true,
};
export default function AddVideo({dispatch,edvideo}) {
 

  const [video, setVideo] = useState(intitalState);
  function changeText(e) {
    
    setVideo({ ...video, [e.target.name]: e.target.value });
    
  }
  function renderedContent(e) {
    e.preventDefault();
    if((Object.keys(edvideo)).length !== 0){
      dispatch({type:'UPDATE', payload: video})
    }
   else {
    dispatch({type : "ADD", payload : video})
   }

    setVideo(intitalState)
  }
 useEffect(()=> {
    setVideo(edvideo)
 },[edvideo])

  return (
    <form action="">
      <input
        type="text"
        onChange={changeText}
        name="title"
        placeholder="Enter title"
        value={video.title}
      />
      <input
        type="text"
        onChange={changeText}
        name="channel"
        placeholder="Enter Channnel"
        value={video.channel}
      />
      <button onClick={renderedContent}> {(Object.keys(edvideo)).length !== 0 ? 'Edit' : 'Add'} Video</button>
    </form>
  );
}
