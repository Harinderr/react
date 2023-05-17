import { useState } from "react"


 export default function Stopwatch(){
 const [count, setCount] = useState(0)
 const [timeInterval, setTimeInterval] = useState(null);
 function start(){
      const interval =   setInterval(() => {
      
       
          setCount( count => {
              let updatedCount = count+1
              if(updatedCount === 5){
                console.log('ten seconds');
              }
              return updatedCount
            })
         
        
         }, 1000); 
       setTimeInterval(interval)
       
    }
    function stop(){
        clearInterval(timeInterval)
    }
  
return (

    <div className="watch" style={{marginTop : "50px", border : '2px solid black', width : '300px',display:"grid", gridTemplateColumns : "auto auto auto"}}>
        <div  style={{ fontSize: '50px'}} className="hours">00 :</div>
        <div style={{ fontSize: '50px'}}  className="minutes">00 :</div>
        <div  style={{ fontSize: '50px'}} className="seconds">{count}</div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
    </div>
)
}