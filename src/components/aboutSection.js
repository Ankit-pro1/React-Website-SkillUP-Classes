import React from 'react'

export default function about() {
    // let useState[text, setText] = ("Know More");
  return (
    <div>
      <div className="about-us padding">
        <div className="container">
            <h1 className="heading">About Us</h1>
            <div className="row">
                <div className="col-lg-5 about-img">
                    <img src="./images/profile.jpg" alt="profile"/>
                    <div className="img-content text-center">
                        <h3>Ankit Kumar</h3>
                        <h5>Founder of SkillUP Classes</h5>
                        <div className="about-socials">
                            <a href="https://www.linkedin.com/in/ankit-kumar-a496b4205" target="_empty"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.twitter.com/@Ankitku87072453" target="_empty"><i className="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/ankit_0506" target="_empty"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-content">
                        <h3>Who We Are</h3>
                        <p>SkillUP Classes is a perfect coaching platform to guide your child's future in a right direction. We are here to provide a quality education that enhance your child's potential and makes them confident. Currently we are provinding tuitions from <strong>Vth to Xth Class (CBSE, ICSE and UP Board). SkillUP Classes also provide home tuition anywhere in Ghaziabad.</strong> Skillup classes follow a proper strategy to bring good marks in academics of their students. At the same time SkillUP faculty doesn't stop to impart only theoritical knowledge but here we taught how and where this knowledge be applied in real world by creating a joyful and meaningful experimental environment which makes the child curious towards learning and helps in igniting interest in subjects. <strong>Mr. Ankit Kumar</strong> who is the.. <span className="collapse" id="know-more">founder of SkillUP Classes believes that if we provide the education to children in such a way that makes them curious and build interest towards learning so it becomes easier for them to got the concepts clearly. Mr. Ankit Kumar is passionate about coding and at the same time he loves to teach the children by experimential learning he is doing this since 2017 with full dedication. </span></p>
                        <a href="#know-more" data-toggle="collapse" className="d-btn p-btn about-btn" id="know-btn">Know more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
