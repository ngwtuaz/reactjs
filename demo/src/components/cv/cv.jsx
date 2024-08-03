import '../../styles/index.scss'

function Cv() {
    return (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <div className="resume-wrapper">
                <section className="profile section-padding">
                    <div className="container">
                        <div className="picture-resume-wrapper">
                            <div className="picture-resume">
                                <span>
                                    <img
                                        src="data:image/jpeg;base64,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"
                                        alt=""
                                    />
                                </span>
                                <svg version="1.1" viewBox="0 0 350 350">
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation={8} result="blur" />
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                                        </filter>
                                    </defs>
                                    <g filter="url(#goo)">
                                        <circle id="main_circle" className="st0" cx="171.5" cy="175.6" r={130} />
                                        <circle id="circle" className="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                                        <circle id="circle" className="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
                                    </g>
                                </svg>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="name-wrapper">
                            <h1>
                                Nguyen <br />
                                Anh Tuan
                            </h1>
                            {/* YOUR NAME AND LAST NAME  */}
                        </div>
                        <div className="clearfix" />
                        <div className="contact-info clearfix">
                            <ul className="list-titles">
                                <li>Call</li>
                                <li>Mail</li>
                                <li>Web</li>
                                <li>Home</li>
                            </ul>
                            <ul className="list-content ">
                                <li>+34 123 456 789</li> {/* YOUR PHONE NUMBER  */}
                                <li>j.anderson@gmail.com</li> {/* YOUR EMAIL */}
                                <li>
                                    <a href="#">janderson.com</a>
                                </li>{" "}
                                {/* YOUR WEBSITE  */}
                                <li>Los Angeles, CA</li> {/* YOUR STATE AND COUNTRY  */}
                            </ul>
                        </div>
                        <div className="contact-presentation">
                            {" "}
                            {/* YOUR PRESENTATION RESUME  */}
                            <p>
                                <span className="bold">Lorem</span> ipsum dolor sit amet,
                                consectetur adipiscing elit. Vivamus euismod congue nisi, nec
                                consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec
                                imperdiet purus.{" "}
                            </p>
                        </div>
                        <div className="contact-social clearfix">
                            <ul className="list-titles">
                                <li>Twitter</li>
                                <li>Dribbble</li>
                                <li>Codepen</li>
                            </ul>
                            <ul className="list-content">
                                {" "}
                                {/* REMEMBER TO PUT THE URL ON THE HREF TAG  */}
                                <li>
                                    <a href="">@janderson</a>
                                </li>{" "}
                                {/* YOUR TWITTER USER  */}
                                <li>
                                    <a href="">janderson</a>
                                </li>{" "}
                                {/* YOUR DRIBBBLE USER  */}
                                <li>
                                    <a href="">janderson</a>
                                </li>{" "}
                                {/* YOUR BEHANCE USER  */}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="experience section-padding">
                    <div className="container">
                        <h3 className="experience-title">Experience</h3>
                        <div className="experience-wrapper">
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>{" "}
                                {/* NAME OF THE COMPANY YOUWORK WITH  */}
                                <div className="time">Nov 2012 - Present</div>{" "}
                                {/* THE TIME YOU WORK WITH THE COMPANY  */}
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Front End Developer </div>{" "}
                                {/* JOB TITLE  */}
                                <div className="company-description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                        elit facilisis, adipiscing leo in, dignissim magna.
                                    </p>{" "}
                                    {/* JOB DESCRIPTION  */}
                                </div>
                            </div>
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>{" "}
                                {/* NAME OF THE COMPANY YOUWORK WITH  */}
                                <div className="time">Nov 2010 - Present</div>{" "}
                                {/* THE TIME YOU WORK WITH THE COMPANY  */}
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">
                                    Freelance, Web Designer / Web Developer
                                </div>{" "}
                                {/* JOB TITLE  */}
                                <div className="company-description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                        elit facilisis, adipiscing leo in, dignissim magna.
                                    </p>{" "}
                                    {/* JOB DESCRIPTION  */}
                                </div>
                            </div>
                            <div className="company-wrapper clearfix">
                                <div className="experience-title">Company name</div>{" "}
                                {/* NAME OF THE COMPANY YOUWORK WITH  */}
                                <div className="time">Nov 2009 - Nov 2010</div>{" "}
                                {/* THE TIME YOU WORK WITH THE COMPANY  */}
                            </div>
                            <div className="job-wrapper clearfix">
                                <div className="experience-title">Web Designer </div>{" "}
                                {/* JOB TITLE  */}
                                <div className="company-description">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                        elit facilisis, adipiscing leo in, dignissim magna.
                                    </p>{" "}
                                    {/* JOB DESCRIPTION  */}
                                </div>
                            </div>
                        </div>
                        {/*Skill experience*/}
                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Skills</h3> {/* YOUR SET OF SKILLS  */}
                            <ul>
                                <li className="skill-percentage">HTML / HTML5</li>
                                <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                                <li className="skill-percentage">Javascript</li>
                                <li className="skill-percentage">Jquery</li>
                                <li className="skill-percentage">Wordpress</li>
                                <li className="skill-percentage">Photoshop</li>
                            </ul>
                        </div>
                        <div className="section-wrapper clearfix">
                            <h3 className="section-title">Hobbies</h3>{" "}
                            {/* DESCRIPTION OF YOUR HOBBIES */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                elit facilisis, adipiscing leo in, dignissim magna.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                                elit facilisis, adipiscing leo in, dignissim magna.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="clearfix" />
            </div>
        </>
    );
}

export default Cv;