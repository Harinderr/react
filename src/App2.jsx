import './componentscss/app2.css'
import Myimage from './images/reactimg.jpeg'
function App2() {
   
    function MouseEnter(e) {
        e.target.style.width = '90%'
        e.target.style.height = '80%'
      
            }
    function MouseLeave(e){
        
        e.target.style.width = '70%'
        e.target.style.height = '60%'

    }   
    function doubleclick(e){
console.log('double click')
    } 
    function inside(){
        console.log('you are inside textbox')
    }
    function outside(){
        console.log('you are outside textbox')
    }
    function enterDetect(e){
        if(e.key === 'Enter'){
            console.log('enter pressed')
        }
    }
     return (
        <div className="singlePage">
             {/* <img src={Myimage} alt="" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} /> */}
             
                <label htmlFor="input"> Input</label>
                <input type="text"  id='input' onKeyUp={enterDetect} onFocus={inside} onBlur={outside}/>
                <button onDoubleClick={doubleclick}>Submit</button>
            
        </div>
     )
}

export default App2