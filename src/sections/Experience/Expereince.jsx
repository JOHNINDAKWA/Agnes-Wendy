import React from "./Experience.css";

const Experience = () => {
  return (
    <section className="experience experience-container" id="experience">
      <div className="experience-header" data-aos="zoom-in">
        <h1 className="experience-header-below">Resume</h1>
        <p className="experience-header-top">Work Experiences</p>
      </div>

      <div className="timeline">
        <div className="timeline-divider">
          <ol className="timeline-list" data-aos="fade-right">
            <li className="timeline-item">
              <h4 className="timeline-item-title">Underwriting Intern, Incourage</h4>
              <span>April 2024</span>
              <p className="timeline-text">
                Handled policy cancellations, new issues, and cover extensions.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="timeline-item-title">Research Assistant, Kenya National Bureau of Statistics</h4>
              <span>March 2024</span>
              <p className="timeline-text">
                Conducted interviews and ensured accurate data entry.
              </p>
            </li>
          </ol>

          <ol className="timeline-list" data-aos="fade-left">
            <li className="timeline-item">
              <h4 className="timeline-item-title">Attachee, Kenya National Bureau of Statistics</h4>
              <span>January 2023 - April 2023</span>
              <p className="timeline-text">
                Analyzed data with R and Excel, supported Economic Survey follow-up.
              </p>
            </li>
            <li className="timeline-item">
              <h4 className="timeline-item-title">General Clerk, Ministry of Education</h4>
              <span>January 2021 - February 2021</span>
              <p className="timeline-text">
                Managed mail, filing, and prepared reports.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
