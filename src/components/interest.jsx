import './resume.css'
import ListComponent from './layout';
function Interest({value}) {
   if (value.length !== 0){
    return  (  
      <div className="interest">
      <h2 className="head"> Interests</h2>
     <ListComponent layout= 'alphabet' items={value}></ListComponent>
     </div>
   )}
  

}
export default Interest;
