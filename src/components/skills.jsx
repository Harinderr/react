import './resume.css'
import ListComponent from './layout';
function Skills({value}) {
   if(value.length !== 0){
    return (
      <div>
       
        <h2 className="head"> Skills</h2>
   <ListComponent layout= 'number' items={value}></ListComponent>
   
      </div>
    )
   }
  
}
export default Skills;
