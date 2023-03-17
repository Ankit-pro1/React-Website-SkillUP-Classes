import React from 'react';

export default function homeSection() {
  return (
    <div>
      {/* <!----------------------- Header Section ----------------------------> */}
      <header className="header">
        <div className="header-overlay  header-padding">
          <div className="container-fluid">
            <div className="free-tagline">
              <p>One month coaching free. <a href="tel:+91 8826134197">Call Now</a></p>
            </div>
          </div>
          <div className="container">
            <div className="row mr-0">
              <div className="col-md-12">
                <div className="header-text text-center">
                  <h1>Welcome To <span> Skil<span>l</span>UP Classes</span></h1>
                  <p>Ab hogi baat gyaan ki<span>...</span></p>
                  <h4>Providing A Best Quality Coaching Classes</h4>
                  <div className="header-btn">
                    <a href="about-us.php" className="d-btn p-btn">Know More</a>
                    <a href="tel:+918826134197" className="d-btn s-btn">Call Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-------------XX---------- Header Section ----------------XX------------> */}
    </div>
  )
}
