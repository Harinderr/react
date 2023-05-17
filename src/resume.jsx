import Interest from "./components/interest";
import Skills from "./components/skills";
import Experience from "./components/experience";
// import './components/resume.css'
import Border from "./components/Border";

function Resume() {
  let resume = {
    name: "Harinder",
    interests: [
      "Drawing",
      "Photography",
      "Design",
      "Programming",
      "Computer Science",
    ],
    skills: [
      "Web design with HTML and CSS education",
      "Wilton high school",
      "Silverne high school of Arts",
      "codeacademy",
    ],
    experience: [
      "Student Technology Intern for Wilton School Districtn",
      "Babysitter",
      "Silvermine School of Arts",
      "Codeacademy",
    ],
  };

  return (
    <>
    <div id="header"></div>
<div class="left"></div>
     
      <div class="stuff">
      <h1>Resume</h1>
      <h1>Harinder</h1>
      <button onClick={window.print}>Print</button>
      <br/><br/>
      <hr />
       <Border>
       <Interest value ={resume.interests} > </Interest>
       </Border>
      
      <Skills value = {resume.skills} > </Skills>
      <Experience  value = {resume.experience}> </Experience>
      </div>

      <div class="right"></div>
<div id="footer">
  <h2 id="name">Emily</h2></div>
    </>
  );
}
export default Resume;




  
  
  