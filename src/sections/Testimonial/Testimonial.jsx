import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-container">
      <div className="testimonial-header" data-aos="zoom-in">
        <h1 className="testimonial-header-below">Testimonials</h1>
        <p className="testimonial-header-top">What People Say?</p>
      </div>
      <div className="testimonial-items">
        <div className="testimonial-item" data-aos="zoom-in-right">
          <span>“</span>
          <p>
            Agnes’s analytical skills and innovative approach in data science have significantly advanced our research. Her contributions have been invaluable to our projects at the Kenya National Bureau of Statistics.
          </p>
          <h5>— Dr. Samuel Okello</h5>
        </div>

        <div className="testimonial-item" data-aos="zoom-in-left">
          <span>“</span>
          <p>
            “Working with Agnes is always a pleasure. Her meticulous attention to detail and proficiency in statistical analysis make her an asset to any team. Her work on the Finaccess Health Finance Tracker was particularly impressive.”
          </p>
          <h5>— John Mwangi</h5>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
