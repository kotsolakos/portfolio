function Hero(){
    return(
        <section id="hero" className="jumbotron">
            <div className="container">
                <h1 className="hero-title load-hidden">
                    Hi, my name is <span className="text-color-main">Kostas Kotsolakos</span>
                    <br />
                    I'm a Full-Stack Web Developer.
                </h1>
                <p className="hero-cta load-hidden">
                    <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about"
                    >Know more</a>
                </p>
            </div>
        </section>
    );
}

export default Hero