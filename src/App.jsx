import { useContext, useReducer, useState,useEffect } from "react";
import React from "react";
import { videoContent } from "./components/VideoContent";
import VideoList from "./components/VideoList";
import AddVideo from "./components/AddVideos";
import ThemeContext from "./content/ThemeContext";
import './App.css'


function App() {
  const [editvideo , setEditvideo] = useState({})
  const [videos, dispatch] = useReducer(videoReducer ,videoContent)
       function videoReducer(videos, action) {
            switch(action.type){
              case 'ADD' :
                return [
                  ...videos,
                  {...action.payload, id : videos.length+1}
                 ]
               case 'DELETE':
                  return videos.filter(val => val.id !== action.payload)
               case 'UPDATE': 
              const index = videos.findIndex(v => v.id === action.payload.id)
             const updatedValue = [...videos]
               updatedValue.splice(index,1,action.payload) 
               setEditvideo({})
               return updatedValue
            }
       }

       const themecontext  = useContext(ThemeContext)
       const [mode , setMode] = useState(themecontext)

       useEffect(() => {
        document.querySelector(".main").classList.remove(themecontext);
        document.querySelector(".main").classList.add(mode);
      }, [mode]);
    

 
  function closeVideo(parameter){
    dispatch({type : 'DELETE',payload:parameter})
  
  }
  function editVideo(parameter){

    const item = videos.find(val => val.id === parameter)
   setEditvideo(item)

  }
  

  return (
    <ThemeContext.Provider value={mode}>
  <div className={`main ${themecontext}`}>
    <button type="button" class="btn btn-secondary"onClick={()=>{ mode==='darkmode'? setMode('lightmode'): setMode('darkmode') }  }>Mode</button>
    <VideoList myvideos={videos}  closeVideo={closeVideo} editVideo={editVideo}> </VideoList>
  <AddVideo dispatch={dispatch} edvideo={editvideo}></AddVideo>
  </div>
  </ThemeContext.Provider>
 )

}

export default App;

