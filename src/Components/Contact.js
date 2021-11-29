const contact = () =>{
    return(
<section className="contact" id="contact">
    <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="text">
            <p>
            contact ,for any querries!!
            </p>
        </div>
        <div className="contact-content">   
            <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Ayushi Pandey</div>
                </div>
            </div>
            <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Moradabad, Uttar Pradesh</div>
                </div>
            </div>
            <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">gayushipandey@gmail.com</div>
                </div>
            </div>
        </div>
    </div>        
</section>
    );
}
export default contact;