import { useState } from "react"



export default function PlayButton(){
    
    const [playing  , setPlaying] =  useState(false)
    function btnclicked(){
        if(playing){
            setPlaying(false)
            console.log('video paused');
        }
        else {
            setPlaying(true)
            console.log('video played');
        }
    }
    return (  
        <div className="button">
            <button onClick={btnclicked} style={{color: "white",backgroundColor :'black', padding : '5px', borderRadius : '5px'}}>
                Play {!playing ? '>' : '||'}
                </button>
        </div>
    )
}
