import './resume.css'
import ListComponent from './layout';
function Experience({value}) {
  return (
    <>
      <h2 className="head"> Experience</h2>
      <ListComponent layout= 'bullet' items={value}></ListComponent>
    </>
  );
}
export default Experience;
