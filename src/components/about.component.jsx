import Profile from '../assets/profile.jpg'
import Resume from '../assets/resume.pdf'

function About(){
    return(
        <section id="about">
        <div className="container">
          <h2 className="section-title load-hidden">About me</h2>
          <div className="row about-wrapper">
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__image load-hidden">
                <img
                  alt="Profile Image"
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src={Profile}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="about-wrapper__info load-hidden">
                <p className="about-wrapper__info-text">
                  I am an ambitious and dedicated student currently pursuing a degree
                  in Informatics and Computer Engineering at the University of West Attica.
                  I have also enrolled in the ZTM Academy to further enhance my skill set. 
                  With a keen interest in web development, I have acquired comprehensive 
                  knowledge and hands-on experience in various technologies. My proficiency
                  spans across both front-end and back-end development, encompassing HTML, CSS, 
                  JavaScript, Express.js, React, and PostgreSQL. By leveraging these cutting-edge 
                  tools, I have successfully created dynamic and user-friendly web applications.
                </p>
                <p className="about-wrapper__info-text">
                  As far as hobbies go I have multiple interests in many fields, ranging from
                  coding challenges, such as those presented by platforms like Hack the Box 
                  and Over the Wire, to games and books, as well as physical activities like
                  going to the gym and training martial arts.
                </p>
                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href={Resume}
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default About