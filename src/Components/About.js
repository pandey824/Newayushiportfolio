import profile from '../imgs/porofile.jpg';
import cv from '../files/opencv.pdf';
const About =()=>{
    return(
        <section className="about" id="about" style={{backgroundColor:"lavender-blush"}}>
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
               
              
                <div className="column-left">
                    <div className="text">This is  <span className="typing-2">Ayushi Pandey</span></div>
                    <p>One who is consistent with her work ,keenly interested in experimenting things with high aspirations of achieving goals .Additionally very much enthusiatic towards technology and computer science.</p>
                    <a href={cv}>Open CV</a>
                </div>
                <div className="frame column-right">
                    <img src={profile} alt="oops"></img>
                
            </div>
            </div>


        </div>
    </section>

    );
}
export default About;