import { useReducer, useState } from "react";
import React from "react";
import { videoContent } from "./components/VideoContent";
import VideoList from "./components/VideoList";
import AddVideo from "./components/AddVideos";

function App() {
       function videoReducer(state, action) {
            switch(action.type){
              case 'ADD' :
                return 
            }
       }



  const [videos, dispatch] = useReducer(videoReducer ,videoContent)
  // const [videos, setVideos] = useState(videoContent)
  const [editvideo , setEditvideo] = useState({})

  function allVideos(video){
    dispatch{(type: "ADD", payload:video)}

     setVideos([
      ...videos,
      {...video, id : videos.length+1}
     ])
  }
  function closeVideo(parameter){
   const item = videos.filter(val => val.id !== parameter)
     setVideos(item)
  }
  function editVideo(parameter){

    const item = videos.find(val => val.id === parameter)
   setEditvideo(item)

  }
  
  function updatedVideo(val){
   const index = videos.findIndex(v => v.id === val.id)

  const updatedValue = [...videos]
  updatedValue.splice(index,1,val)
  setVideos(updatedValue)
  setEditvideo({})
 }
  return (
  <>
    <VideoList myvideos={videos}  closeVideo={closeVideo} editVideo={editVideo}> </VideoList>
  <AddVideo allVideos={allVideos}  updatedVideo={updatedVideo} edvideo={editvideo}></AddVideo>
  </>

 )

}

export default App;

