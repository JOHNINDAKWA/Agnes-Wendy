const portfolioData = [
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/05/dataquality-480x320.png",
    title: "Data Quality Dashboard",
    description:
      "Developed a comprehensive data quality dashboard for Delta Lloyd, focusing on data engineering and data analysis to ensure high data standards.",
    description2:
      "The project involved creating an ETL pipeline and performing in-depth business data analysis to improve data reliability and insights.",
    link: "https://example.com/data-quality-dashboard",
    technologies: "Python, React, Node.js, MongoDB, D3.js",
    dateCompleted: "March 2024",
  },
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/03/life_expect-480x320.png",
    title: "Life Expectancy Analysis",
    description:
      "Conducted a detailed analysis of life expectancy data, focusing on differences between countries and genders, highlighting the impact of lifestyle and risks.",
    description2:
      "Visualized the data to reveal significant trends, such as the 6-year life expectancy gap between men and women in Japan.",
    link: "https://example.com/life-expectancy-analysis",
    technologies: "Tableau, Vue.js, Express.js, PostgreSQL",
    dateCompleted: "January 2024",
  },
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/06/nomadlist-480x320.png",
    title: "Digital Nomad Cities Map",
    description:
      "Created an interactive map displaying popular cities for digital nomads, including details on safety, WiFi connectivity, weather, and more.",
    description2:
      "Implemented filtering features to help users find cities that meet their specific criteria.",
    link: "https://example.com/digital-nomad-cities-map",
    technologies: "Angular, Leaflet.js, Firebase, Tailwind CSS",
    dateCompleted: "June 2023",
  },
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/06/us_airline_delays-480x320.png",
    title: "Kenya Airline Delays Visualization",
    description:
      "Developed a visualization of airline delay data for major Kenyan carriers, aggregated by year, to identify patterns and causes of delays.",
    description2:
      "Used airline traffic data from 2007-2015 to provide insights for a project in Udacity’s Data Analyst Nanodegree.",
    link: "https://example.com/kenya-airline-delays-visualization",
    technologies: "Django, PostgreSQL, Chart.js, Bootstrap",
    dateCompleted: "September 2023",
  },
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/02/wintergames_wp-480x320.gif",
    title: "Spatial Data Aggregation with Marker Clusters",
    description:
      "Developed an interactive map for a client to display Financial Planners & Accountants, utilizing marker clustering for better data visualization.",
    description2:
      "Implemented clustering to efficiently manage and display a large number of data points on the map.",
    link: "https://example.com/spatial-data-aggregation",
    technologies: "Ruby on Rails, SQLite, Leaflet.js, Materialize CSS",
    dateCompleted: "December 2023",
  },
  {
    img: "https://gerinberg.com/wp-content/uploads/2016/01/openstreetmap_utrecht-480x320.png",
    title: "Kenya Weather Institute Data Portal",
    description:
      "Worked on the data portal for the Kenya Weather Institute, focusing on backend integration with MongoDB and GIS data management.",
    description2:
      "Handled the integration with various web services and ensured data availability in a geographic information system (GIS).",
    link: "https://example.com/kenya-weather-institute",
    technologies: "Next.js, GraphQL, Sass, MongoDB, GIS",
    dateCompleted: "February 2024",
  },
];

const portfolioData2 = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/59ceb7ac49fc2ba6e7779088/1541427898584-Q2288ED8OA2P8NZRTIUO/image-asset.jpeg?format=500w",
    title: "Predicting Comments on Reddit",
    description:
      "Developed a machine learning model to predict the number of comments on Reddit posts based on various features such as post title, subreddit, and time of posting.",
    description2:
      "Utilized data visualization techniques to explore and present insights about comment trends and user engagement on the platform.",
    link: "https://example.com/predicting-comments-reddit",
    technologies: "Python, TensorFlow, scikit-learn, React, Node.js, MongoDB",
    dateCompleted: "March 2024",
  },
  {
    img: "https://i.pcmag.com/imagery/articles/015t2XCInYI4JmscpwIFyrH-1..v1634848953.jpg",
    title: "Deep Learning and Bitcoins",
    description:
      "Created a deep learning model to predict Bitcoin price trends using historical data, news sentiment analysis, and technical indicators.",
    description2:
      "Developed an interactive web application for real-time Bitcoin price prediction and visualization, providing users with actionable insights.",
    link: "https://example.com/deep-learning-bitcoins",
    technologies: "Python, Keras, Vue.js, Express.js, PostgreSQL",
    dateCompleted: "January 2024",
  },
  {
    img: "https://media.licdn.com/dms/image/C4D12AQGQl7-W8_DEWA/article-cover_image-shrink_600_2000/0/1651402325780?e=2147483647&v=beta&t=mZAjZUBat9lta5me8ScxHVXL4M3KU2PGYkXwCQobWTY",
    title: "Interactive SQL Learning Platform",
    description:
      "Developed a comprehensive SQL tutorial platform to teach users SQL basics and advanced query techniques through interactive lessons and exercises.",
    description2:
      "Incorporated real-time code execution and feedback to enhance the learning experience and provide practical knowledge in database management.",
    link: "https://example.com/sql-tutorial",
    technologies: "Angular, Firebase, Tailwind CSS, SQLite",
    dateCompleted: "June 2023",
  },
  
];


export { portfolioData, portfolioData2 };
