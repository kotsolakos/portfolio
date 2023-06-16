import { Fragment } from "react";

function Project({title, desc, live, source, image}){
    console.log(live);
    return(
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <div className="project-wrapper__text load-hidden">
                    <h3 className="project-wrapper__text-title">{`${title}`}</h3>
                    <div>
                        <p className="mb-4">
                        {`${desc}`}
                        </p>
                    </div>
                    <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href={`${live}`} 
                    >
                        See Live
                    </a>
                    {
                        source?
                            <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-main"
                            href={`${source}`}
                            >
                                Source Code
                            </a>
                            :<Fragment/>
                    }                        
                </div>
            </div>
            <div className="col-lg-8 col-sm-12">
                <div className="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href={`${live}`}  target="_blank">
                        <div
                            data-tilt
                            data-tilt-max="4"
                            data-tilt-glare="true"
                            data-tilt-max-glare="0.5"
                            className="thumbnail rounded js-tilt"
                        >
                            <img
                            alt="Project Image"
                            className="img-fluid"
                            src={image}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;