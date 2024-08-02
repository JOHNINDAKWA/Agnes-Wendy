import "./Resume.css";
import Award1 from "../../images/a1.png"; 
import Award2 from "../../images/a2.png"; 
import Award3 from "../../images/a3.png"; 

const Resume = () => {
  return (
    <section className="resume resume-container" id="resume">
      <div className="resume-header" data-aos="zoom-in">
        <h1 className="resume-header-below">Awards</h1>
        <p className="resume-header-top">Certifications</p>
      </div>

      <div className="awards" data-aos="fade-up">
        <div className="award-item">
          <img src={Award1} alt="Award" />
          <div className="award-text">
            <h3>Certified Data Scientist</h3>
            <p>Recognized for advanced skills in data analysis and machine learning.</p>
          </div>
        </div>

        <div className="award-item">
          <img src={Award2} alt="Award" />
          <div className="award-text">
            <h3>Bootcamp Training in Data Analysis</h3>
            <p>Certification from Women Techsters Initiative, December 8, 2023.</p>
          </div>
        </div>

        <div className="award-item">
          <img src={Award3} alt="Award" />
          <div className="award-text">
            <h3>Excellence in Statistical Analysis</h3>
            <p>Recognized for outstanding performance in statistical research and analysis.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
