import React from 'react'

export default function header(props) {
  return (
    <div>
      {/* <!------------------------- Modal -----------------------------> */}
      <div className="modal" id="myModal">
        <div className="modal-dialog ">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Tuition Enquiry Form</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <form action="skillupdatabase.php" method="POST">
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
          </div>
        </div>
      </div>
      {/* <!-------------xx---------- Modal -----------------XX-------------> */}
      {/* <!-------------------------- Fixed Social links ---------------------> */}
      <div className="social-links">
        <div className="social-link bg-primary">
          <a href="https://www.facebook.com/skillupclasses7" target="_empty"><i className="fa fa-facebook"></i></a>
        </div>
        <div className="social-link bg-danger">
          <a href="https://www.instagram.com/skillup.classes" target="_empty"><i className="fa fa-instagram"></i></a>
        </div>
        <div className="social-link bg-success">
          <a href="https://bit.ly/3luVf0E"><i className="fa fa-whatsapp"></i></a>
        </div>
        <div className="social-link">
          <a href="tel:+91 8826134197"><i className="fa fa-phone-alt"></i></a>
        </div>
      </div>
      {/* <!----------------XX---------- Fixed Social links ---------XX------------> */}

      {/* <!------------------------ Navigation Bar ------------------------> */}
      <header className="navigation-bar">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a href="" className="navbar-brand">
              <img src="./images/logo350.png" alt="" className="navbar-brand" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
              <i className="fa fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="collapsible-navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="index.php" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="about-us.php" className="nav-link">About us</a>
                </li>
                <li className="nav-item">
                  <a href="features.php" className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a href="classes.php" className="nav-link">Classes</a>
                </li>
                <li className="nav-item">
                  <a href="students.php" className="nav-link">Students</a>
                </li>
                <li className="nav-item">
                  <a href="faq.php" className="nav-link">Faq</a>
                </li>
                <li className="nav-item">
                  <a href="contact-us.php" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
