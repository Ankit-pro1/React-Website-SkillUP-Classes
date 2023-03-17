import React from 'react'

export default function faqSection() {
  return (
    <div>
      <div className="faq">
        <div className="container padding">
            <h1 className="heading">FAQ</h1>
            <div className="row">
                <div className="col-md-6">
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                    How can I contact for tuition enquiry?
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    For tuition enquiry you can :
                                    <p className="mailid"><strong>Mail us on: </strong><a href="mailto:skillupclasses7@gmail.com">skillupclasses7@gmail.com</a></p>
                                    <p className="phoneno"><strong>Call on: </strong><a href="tel:+918826134197">+91 8826134197</a></p>
                                    <p className="contact-form"><strong> By filling contact form: </strong><a href="">Contact Form</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                    Is the SkillUP Classes provide home tution also?
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Yes, SkillUP Classes provide home tuition also in which our SkillUP tutor come to your home and teach your child.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                    Is one month free coaching provided by SkillUP Classes?
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    Yes, the SkillUP Classes providing one month coaching absolutely free.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div id="accordion">
                        <div className="card">
                            <div className="card-header">
                                <a className="card-link" data-toggle="collapse" href="#collapseFour">
                                    What is the duration of Demo Classes?
                                </a>
                            </div>
                            <div id="collapseFour" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    The duration of demo classes is 3 to 5 days. After this duration when you are fully-satisfied with us then you can only register.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFive">
                                    What is the Fee Structure of each class?
                                </a>
                            </div>
                            <div id="collapseFive" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    SkillUP Classes have minimum fee Structure. To know
                                    <p><strong>Call on:</strong><a href="tel:+918826134197">+91 8826134197</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseSix">
                                    What are precautions taken due to COVID-19?
                                </a>
                            </div>
                            <div id="collapseSix" className="collapse" data-parent="#accordion">
                                <div className="card-body">
                                    SkillUP Classes take care all precautions such as hand sanitization, wearing mask etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
