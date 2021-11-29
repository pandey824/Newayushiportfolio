const Interest = ()=>{
    return(
<section className="interests" id="interests">
    <div className="max-width">
        <h2 className="title">My interests</h2>
        <div className="serv-content">
            <div className="card">
                <div className="box">
                    <i className="fas fa-paint-brush"></i>
                    <div className="text">Web Designing</div>
                    <p>
                        I love designing websites and upgrading myself by learning new skills and implementing them.
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <i className="fas fas fa-robot"></i>
                    <div className="text"> Machine Learning </div>
                    <p>
                     Machines has reduced human efforts to nill ,i really enjoy implementing machine learning models which help us to predict results .
                    </p>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <i className="fas fa-code"></i>
                    <div className="text"> Coding</div>
                    <p>
                     I like to   solve real world e problem  using computer science approaches and apply it via code.
                    </p>
                </div>
            </div>
            
           </div>
        </div>
</section>
    );
}
export default Interest;