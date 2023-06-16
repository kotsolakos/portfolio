function Contact(){
    return(
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-wrapper load-hidden">
                    <p className="contact-wrapper__text">Let's Build Something Amazing Together!</p>
                    <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href="mailto:kotsolakos.k@protonmail.com"
                    >Get in touch</a>
                </div>
            </div>
        </section>
    );
}

export default Contact