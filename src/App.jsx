import Video from "./components/video";
import { useState } from "react";
import Stopwatch from "./components/Timer";

function App() {
   
  const videoContent =  [
    {
      id: 1,
      title: "mern Stack developer",
      channel: "Fantasma",
      views: "50k",
      time: "2 months ago",
      verified: true,
    },
    {
      id: 2,
      title: "Software developer",
      channel: "Code Dost",
      views: "50k",
      time: "2 months ago",
      verified: false,
    },
    {
      id: 3,
      title: "Java intermediate",
      channel: "Apna collage",
      views: "50k",
      time: "2 months ago",
      verified: true,
    },
  ];
  
    const [video , setVideo] = useState(videoContent)
    function videobtn(){
        setVideo([...video,{ 
            id: video.length+1,
            title: "Java intermediate",
            channel: "Apna collage",
            views: "50k",
            time: "2 months ago",
            verified: true,
          }])
    }
  return (
    <>
      {/* <h1> hello world </h1>
      {video.map((val, index) => 
        <Video
          key={index}
          title={val.title}
          channel={val.channel}
          views={val.views}
          time={val.time}
          id={val.id}
        ></Video>

      )}
       <button onClick={videobtn}>
                Add Videos
            </button> */}
            <Stopwatch></Stopwatch>
    </>
  );
}

export default App;

