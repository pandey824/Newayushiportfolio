import poem from '../imgs/poem.jpg';
import pro from '../imgs/project.jpg';
import video from '../imgs/video.jpeg';

const work = () =>{
    return(
        <>
<section className="leisure" id="leisure pursuit">
    <div className="max-width">
        <h2 className="title">Extra Ciricular</h2>
        <div className="carousel">
            <div className="card">
                <div className="box">
                    <a href={"https://ifwritings.blogspot.com/2021/05/life-should-not-through-but-true.html"}><img src={poem} alt="null"></img></a>
                    <div className="text">Poetess</div>
                    <q>
                        Words are the powerfull tool if they are used wisely
                    </q>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <img src={pro} alt="hello project"></img>
                    <div className="text">My projects</div>
                    <p>Click on my projects to explore more</p>
                    <ul>
                  <li> <i className="fas fa-user">     <a href={"https://pandey824.github.io/portfolioayushi/"}>Porfolio</a></i></li>
                   <li><i className="fas fa-exclamation-triangle">    <a href={"https://pandey824.github.io/covid-tracker/"}>Covid Tracker</a></i></li>
                   <li><i className="fas fa-network-wired">     <a href={"https://pandey824.github.io/saas_BSNL/"}>Bsnl website</a></i></li> 
                </ul>

                 
            </div>
            </div>
            <div className="card">
                <div className="box">
                    <a href={"https://youtu.be/lAD9D2mZLH8"}><img src={video} alt=""></img></a>
                    <div className="text">Dancer</div>
                    <q>
                      When the words stop expressing the real meaning the art form does
                    </q>
                 
            </div>
            </div>
            
                    </div> 
                </div>    
</section>



        </>
    );
}
export default work;