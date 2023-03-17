import React from 'react'

export default function contactSection() {
  return (
    <div>
       <div className="contact">
        <div className="container padding">
            <h1 className="heading">Contact Us</h1>
            <div className="row">
                <div className="col-md-6 contact-form order-md-2">
                    <form action="" method="">
                        <div className="form-group">
                            <input type="text" name="username" className="form-control" placeholder="Name*" id="username" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="usermail" className="form-control" id="usermail" placeholder="Email Id" />
                        </div>
                        <div className="form-group">
                            <input type="tel" name="usernumber" className="form-control" placeholder="Mobile Number*" id="usernumber" required />
                        </div>
                        <div className="form-group">
                            <textarea name="usermessage" cols="30" rows="2" className="form-control" placeholder="Message" id="usermessage"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="d-btn p-btn submit-button">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 contact-address order-md-1">
                    <div className="contact-address-box">
                        <h5><i className="fa fa-map-marker-alt"></i> Address:</h5>
                        <div className="box">
                            Street No. 14, Maharana Vihar, Ghaziabad, U.P. 201009 <br /> <strong>Landmark:</strong> Near Shiv Mandir on Kamla Hall Road.
                        </div>
                    </div>
                    <div className="contact-address-box">
                        <h5><i className="fa fa-mobile-alt"></i> Phone Number</h5>
                        <div className="box">
                            +91 8826134197
                        </div>
                    </div>
                    <div className="contact-address-box">
                        <h5><i className="fa fa-envelope"></i>Email Id</h5>
                        <div className="box">
                            skillupclasses7@gmail.com
                        </div>
                    </div>
                    <div className="contact-address-box">
                        <h5><i className="fa fa-clock"></i>Working Hours</h5>
                        <div className="box">
                            Mon - Sat (3pm - 8pm)
                        </div>
                    </div>
                </div>
                <div className="col-md-12 order-md-3 mt-5 map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.86163388940014!2d77.42387991375662!3d28.636170955238935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzEwLjUiTiA3N8KwMjUnMjYuNSJF!5e0!3m2!1sen!2sin!4v1617562987842!5m2!1sen!2sin" width="100%" height="200" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
