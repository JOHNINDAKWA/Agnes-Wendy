import { IoIosColorFilter } from "react-icons/io";
import "./Services.css";
import { AiOutlineBarChart, AiOutlineDatabase, AiOutlinePieChart, AiOutlineTeam, AiOutlineFundProjectionScreen } from "react-icons/ai";

const Services = () => {
  return (
    <section className="service service-container" id="service" >
      <div className="service-header" data-aos="zoom-in">
        <h1 className="service-header-below">SERVICES</h1>
        <p className="service-header-top">What I Do?</p>
      </div>

      <div className="service-details" data-aos="fade-down">
        <div className="service-item">
          <div className="service-icon">
            <AiOutlineBarChart />
          </div>
          <div className="service-content">
            <h2>Statistical Analysis</h2>
            <p>Conducting statistical analyses using R, Python, and SAS.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <AiOutlineDatabase />
          </div>
          <div className="service-content">
            <h2>Data Management</h2>
            <p>Cleaning and managing large datasets for accuracy.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <AiOutlinePieChart />
          </div>
          <div className="service-content">
            <h2>Data Visualization</h2>
            <p>Creating visualizations using Excel, R, and Power BI.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <AiOutlineFundProjectionScreen />
          </div>
          <div className="service-content">
            <h2>Database Management</h2>
            <p>Administering and querying databases with MySQL.</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <IoIosColorFilter />
          </div>
          <div className="service-content">
            <h2>Technovation Program Mentor</h2>
            <p>Guides and Supports nd provides expertise to Teams</p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <AiOutlineTeam />
          </div>
          <div className="service-content">
            <h2>Research Methodology</h2>
            <p>Designing and executing research projects effectively.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
