import RobotImg from '../assets/robot_technicians.jpg'
import MonarchImg from '../assets/fashion_monarchy.jpg'
import FaceRecImg from '../assets/face_recognition.jpg'
import WordPress_img from '../assets/WordPress.jpg'
import Project from './project.component';

const RobotDesc =  'Introducing "Robot Technicians" – a dynamic React-based website that showcases a collection of users generated from the robust API, ' +
                   'https://jsonplaceholder.typicode.com/users. Each user is creatively depicted with a unique image, powered by the expressive ' + 
                   'https://robohash.org API. The website boasts an intuitive search box, enabling users to effortlessly filter and locate specific individuals ' + 
                   'by typing in their name. Discover and interact with an array of fascinating users through this engaging and user-friendly platform.';

const MonarchDesc = 'Introducing "Fashion Monarchy" – a captivating React-based website that replicates the experience of a virtual clothing shop.' + 
                    ' Explore the shop page, where users can easily access various clothing categories, each adorned with enticing stock images of trendy garments.' + 
                    ' Seamlessly integrating functionality, Fashion Monarchy incorporates a user-friendly shopping cart feature, allowing effortless addition of desired' + 
                    ' products before redirecting to the streamlined checkout page. To enhance user experience and security, sign in/sign up processes are efficiently' + 
                    ' handled through Firebase, ensuring a seamless and reliable authentication system.';

const FaceRecDesc = 'Introducing "Face Recognition" – an impressive React-based website that uses AI technology to identify human faces. Powered by a custom-built' + 
                    ' server using Express.js, user data from the sign up page is securely sent and stored in a PostgreSQL database, facilitating smooth user registration' + 
                    ' and validation processes. Once authenticated, users gain access to the website\'s key feature – the ability to find a face in an image.' + 
                    ' Leveraging the powerful Clarifai API, Face Recognition performs advanced image recognition, accurately drawing a bounding box around the detected' + 
                    ' face and incrementing the number of times the user has utilized the functionality of the website.';

const WordPressDesc = 'Introducing "Literary Haven" – an engaging website built on the WordPress platform. With its intuitive interface and user-friendly design, Literary Haven' + 
                      ' offers a seamless browsing experience for book enthusiasts. The site features three main pages, the Homepage where a selection of popular books are' + 
                      ' displayed using a slideshow for each book category, the Genre page where all the available books are displayed, sorted in their specific categories' + 
                      ' and the About page where a description of the website is offered. Also each book has an individual post dedicated to it that can be accessed through' + 
                      " the entry it has in the Genre page, which has inside a description of the book as well as a link to the book's entry in gutenberg.org so that it" +
                      ' can be read online.';

function Projects(){
    return(
        <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title dark-blue-text">Projects</h2>
            { /* Start Project */ }
            <Project title="Literary Haven" desc={WordPressDesc} live="http://literary-haven.000.pe/" 
            source="" image={WordPress_img}/>
            { /* END Project */ }

            { /* Start Project */ }
            <Project title="Robot Technicians" desc={RobotDesc} live="https://kotsolakos.github.io/robot_technicians/" 
            source="https://github.com/kotsolakos/robot_technicians" image={RobotImg}/>
            { /* END Project */ }

            { /* Start Project */ }
            <Project title="Fashion Monarchy" desc={MonarchDesc} live="https://resonant-lokum-774734.netlify.app/" 
            source="https://github.com/kotsolakos/fashion_monarchy" image={MonarchImg}/>
            { /* END Project */ }

            { /* Start Project */ }
            <Project title="Face Recognition" desc={FaceRecDesc} live="https://cool-pixie-8e2407.netlify.app" 
            source="https://github.com/kotsolakos/face_recognition" image={FaceRecImg}/>
            { /* END Project */ }
          </div>
        </div>
      </section>
    );
}

export default Projects;
