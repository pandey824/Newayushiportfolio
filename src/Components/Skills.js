import data from '../imgs/data.jpg';
import ML from '../imgs/ml.png';
import deep from '../imgs/dl.jpg';
import htm from '../imgs/html.png';
import cs from '../imgs/CSSS.jpg';
import JS from '../imgs/js.png';
import nj from '../imgs/node.png';
const skill = ()=>{
    return(
     
           <section className="skills " id="skills">
    <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content ">
                <p>I have acquired knowledge of Machine learning and Web development with the help of my mentors and constantly updating myself with new and improved ways of doing things.
                I have a knowledge of mySQL  and I have experience in Database Handling through MongoDB additionally i have designed various machine learning models.
                </p>
                
               
            </div>
<div className="hexagon-gallery" >
    <div className="hex"><img src={data} alt="some"></img></div>
    <div className="hex"><img src={ML} alt="some"></img></div>
    <div className="hex"><img src={deep} alt="some"></img></div>
    <div className="hex"><img src={htm} alt="some"></img></div>
    <div className="hex"><img src={cs} alt="some"></img></div>
    <div className="hex"><img src={JS} alt="some"></img></div>
    <div className="hex"><img src={nj} alt="some"></img></div>
    
</div>


</div>
<div className="button">
    <a href={"https://www.linkedin.com/in/ayushi-pandey-a2b14b18a"}>Go to my LinkedIn</a>
</div>
</section>





       
    );
}
export default skill;