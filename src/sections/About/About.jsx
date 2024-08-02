import "./About.css";

const About = () => {
  return (
    <section className="about about-container" id="about">
      <div className="about-header" data-aos="zoom-in">
        <h1 className="about-header-below">ABOUT ME</h1>
        <p className="about-header-top">Know Me More</p>
      </div>

      <div className="about-content">
        <div className="about-content-left" div data-aos="fade-right">
          <h3>
            I'm <span className="color-orange">Agnes Wendi,</span> <span className="md-none">a Graduate Statistician with Expertise in Data Management, Visualization, and Database Administration</span>
          </h3>
          <p>
            I leverage my strong background in statistics and data management to conduct comprehensive analyses and drive meaningful insights. My proficiency in tools such as R, Python, and SAS allows me to deliver high-quality results tailored to your needs.
          </p>
          <p>
            As a professional committed to excellence, I ensure meticulous attention to detail and integrity in all data-related projects. My goal is to provide reliable and actionable insights that support data-driven decision-making and enhance organizational performance.
          </p>
        </div>

        <div className="about-content-right" data-aos="fade-left">
          <div className="detailed-details">
            <p>
              <b>Name: </b> Agnes Wendi 
            </p>
            <p>
              <b>Email: </b>{" "}
              <span className="color-orange">agnesswendi@gmail.com</span>
            </p>
            <p>
              <b>Contact:</b> +254 745 605040
            </p>
            <p>
              <b>From:</b> Nairobi, Kenya
            </p>
          </div>
          <button className="btn">Download CV</button>
        </div>
      </div>

      <div className="about-bottom" data-aos="fade-up">
        <ul>
          <li>
            <h1>5+</h1>
            <p>Years of Experience</p>
          </li>

          <li>
            <h1>20+</h1>
            <p>Happy Clients</p>
          </li>

          <li>
            <h1>30+</h1>
            <p>Completed Projects</p>
          </li>

          <li>
            <h1>3</h1>
            <p>Awards</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
