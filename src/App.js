import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const CVWebsite = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (page) => {
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex relative">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white lg:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`
            min-h-screen w-64 bg-slate-900 text-white shrink-0
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0 pt-20'  : '-translate-x-64 lg:translate-x-0'}
            fixed lg:static
          `}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Kushal Atul Ramaiya</h1>
            <p className="text-slate-400 mb-8">Software Development Engineer</p>

            <nav className="space-y-4">
              {[
                { icon: "🏠", label: "Home", id: "home" },
                { icon: "💼", label: "Experience", id: "experience" },
                { icon: "🎓", label: "Education", id: "education" },
                { icon: "💻", label: "Projects", id: "projects" },
                { icon: "🔧", label: "Skills", id: "skills" },
                { icon: "📧", label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`
                    flex items-center space-x-3 p-2 rounded-lg
                    hover:bg-blue-600 transition-colors w-full text-left
                  `}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className={`
          flex-1 p-6 lg:p-8 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'ml-64  pt-20 lg:pt-0' : 'ml-0 pt-20'}
        `}>
          <div className="max-w-3xl mx-auto space-y-16">
            <section id="home" className="space-y-6">
              <div className="flex items-center space-x-4">
                <div>
                  {/* <h1 className="text-2xl font-bold mb-2">⚠️WORK IN PROGRESS</h1> */}
                  <h1 className="text-3xl font-bold">Kushal Atul Ramaiya</h1>
                  <p className="text-xl text-slate-600">Software Development Engineer</p>
                </div>
              </div>
              <p className="text-lg text-slate-600">
              Passionate about designing, refining, and deploying high-impact software solutions.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="font-semibold mb-2">Current Focus</h2>
                <p>
                  Master of Science in Computer Science at Georgia Tech,
                  specialization in Machine Learning.
                </p>
                <hr className="my-2" />
                <p>
                  Artificial Intelligence / Machine Learning Engineer @ Augmont Enterprise.
                </p>
              </div>
            </section>

            <section id="experience" className="space-y-8">
              <h1 className="text-3xl font-bold">Experience</h1>
              {[
                {
                  title: "Machine Learning Engineer",
                  company: "Augmont Enterprise",
                  period: "April 2024 - Currently",
                  language: "Python",
                  responsibilities: [
                    "Designed and scaled enterprise AI/ML platforms leveraging LLMs, Generative AI, and modern MLOps for end-to-end business solutions.",
                    "Built RAG pipelines with LangChain, ChromaDB, FAISS; integrated MLflow, Langfuse, and Open WebUI for orchestration, monitoring, and deployment on AWS",
                    "Developed multi-LLM conversational AI (GPT-4o, Claude 3, Gemini, Mistral, LLaMA 3) via OpenRouter, providing internal teams with online access and OpenAI-compatible APIs for RAG-powered code generation."
                  ]
                },
                {
                  title: "Software Development Engineer 2",
                  company: "FactSet",
                  period: "March 2020 - Feb 2021",
                  language: "C++ | Bash",
                  responsibilities: [
                    <>
                    Market data feed engineer for <strong>Euronext</strong>, managing the largest European market data feed infrastructure to deliver high-performance, low-latency data solutions.
                    </>,
                    "Maintained and improved the market data feed infrastructure by collaborating with cross-functional technology teams to ensure software and hardware adhered to the latest standards, practices, and performance benchmarks.",
                    "Investigated and resolved live issues in the production environment, minimizing downtime and ensuring uninterrupted data delivery for business-critical operations.",
                    "Enhanced infrastructure by contributing to debugging tools, deployment automation, monitoring systems, and configuration management to improve scalability, reliability, and efficiency.",
                    "Led efforts to acquire and integrate new data sources, coordinating with exchanges, third-party vendors, and internal teams to ensure data quality and smooth integration."
                  ]
                },
                {
                  title: "Software Development Engineer 1",
                  company: "FactSet",
                  period: "Aug 2019 - March 2020",
                  language: "C++ | Python | Bash",
                  responsibilities: [
                    "Contributed to the development and deployment of applications on remote RHEL 7 hosts, ensuring system reliability and efficiency.",
                    "Designed and implemented low-latency systems in C++ for delivering intraday messages, adhering to object-oriented programming principles.",
                    "Collaborated with team members to support the maintenance and development of market data solutions for Euronext"
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold">{job.title}</h2>
                  <p className="text-slate-600 mb-4">{job.company} • {job.period} • <span className="text-blue-700 font-bold">{job.language}</span></p>
                  <ul className="list-disc ml-4 space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="text-slate-600">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section id="education" className="space-y-8">
              <h1 className="text-3xl font-bold">Education</h1>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold">Masters in Science in Computer Science</h2>
                <p className="text-slate-600 mb-4">Georgia Tech • 2024 - Present</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Specialization</h3>
                    <p className="text-slate-600">Machine Learning</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Key Courses</h3>
                    <ul className="list-disc ml-4 text-slate-600">
                      <li><a href='https://omscs.gatech.edu/cs-7638-robotics-ai-techniques' className="text-blue-600 hover:underline">CS 7638 : Robotics: AI Techniques</a></li>
                      <li><a href='https://omscs.gatech.edu/cs-7646-machine-learning-trading' className="text-blue-600 hover:underline">CS 7646 : Machine Learning for Trading</a></li>
                      <li><a href='https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202402&subj_code_in=CS&crse_numb_in=6220' className="text-blue-600 hover:underline">CS 6220 : Big Data Systems & Analytics</a></li>
                      <li><a href='https://mahdi-roozbahani.github.io/CS46417641-fall2025/' className="text-blue-600 hover:underline">CS 7641 : Machine Learning</a></li>
                      <li><a href='https://omscs.gatech.edu/cs-7632-game-ai' className="text-blue-600 hover:underline">CS 7632 : Game AI</a></li>
                      <li><a href='https://cocoxu.github.io/CS7650_fall2025/' className="text-blue-600 hover:underline">CS 7650 : Natural Language Processing</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold">Bachelors in Science in Computer Science</h2>
                <p className="text-slate-600">University of Southampton, UK • 2016 - 2019</p>
                <p className="text-slate-600 mb-4">Upper Second Class Honours</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Key Courses</h3>
                    <ul className="list-disc ml-4 text-slate-600">
                      <li>Machine Learning Technology</li>
                      <li>Computer Vision</li>
                      <li>Cyber Security</li>
                      <li>Computational Biology</li>
                      <li>Advance Databases</li>
                      <li>Intelligent Systems</li>
                      <li>Principles of Cyber Security</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="space-y-8">
              <h1 className="text-3xl font-bold">Projects</h1>
              <div className="grid gap-6">
                {/* FSDL Project PDF Link and Viewer */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold">Full Stack Deep Learning Project</h2>
                  <p className="text-slate-600 mb-4">View or download the Full Stack Deep Learning Project PDF:</p>
                  <a
                    href="/resume/FSDL-Project.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mb-4 block"
                  >
                    Open Slides
                  </a>
                  <div style={{ marginTop: '1rem', width: '100%', height: '60vh' }}>
                    <iframe
                      src="https://www.youtube.com/embed/mXEr2pbY0sE?list=PL1T8fO7ArWle-HwX6SkoQ3j_ol19P7tGT"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: '1px solid #ccc', borderRadius: '8px', width: '100%', height: '100%' }}
                    />
                  </div>
                  <div style={{ marginTop: '1rem', width: '100%', height: '60vh' }}>
                    <iframe
                      src="/resume/FSDL-Project.pdf"
                      title="FSDL Project PDF"
                      width="100%"
                      height="100%"
                      style={{ border: '1px solid #ccc', borderRadius: '8px' }}
                    />
                  </div>
                  
                </div>
                {/* Existing projects */}
                {[{
                    title: "SLAM Simulation",
                    description: (
                      <>
                      <strong>Project:</strong> SLAM and Path Planning for Drone Navigation  
                      <br />
                      In this project, I developed a system for a drone to autonomously map a jungle environment filled with unknown obstacles and navigate to extract a hidden treasure.  
                      <br /><br />
                      <strong>Problem:</strong> The drone entered a dense jungle with no prior knowledge of tree locations and had to rely on noisy sensor measurements. It needed to localize itself, map obstacles, and reach the treasure while avoiding collisions.  
                      <br /><br />
                      <strong>Approach:</strong> Implemented a SLAM algorithm to estimate both drone and tree positions from noisy distance and bearing measurements. Designed a path-planning strategy that used SLAM outputs to generate safe movement commands within turning and distance constraints, checking potential collisions with line–circle intersection tests.  
                      <br /><br />
                      <strong>Outcome:</strong> The system achieved accurate localization within 0.25m, successfully mapped obstacles, and navigated the drone to the treasure without collisions, completing the mission efficiently.  
                    </>
                    ),
                    tech: ["SLAM"],
                    video: "/resume/Videos_RAIT/SLAM Video.mov"
                  },
                  {
                    title: "Warehouse Search Planning",
                    description: (
                      <>
                      <strong>Project:</strong> Warehouse Robot Path Planning with Deterministic and Stochastic Policies  
                      <br />
                      In this project, I built algorithms for a warehouse robot to pick up and deliver boxes efficiently under different conditions, including deterministic movement, uneven floor costs, and stochastic motion uncertainty.  
                      <br /><br />
                      <strong>Problem:</strong> The robot had to collect and deliver boxes in the correct order within a grid-based warehouse, navigating around walls and minimizing total delivery costs. Challenges included limited cell access in the deterministic case, additional floor costs in uneven terrains, and uncertain robot movements due to stochastic effects.  
                      <br /><br />
                      <strong>Approach:</strong> Designed efficient search-based algorithms to generate delivery plans under strict viewing constraints. Extended the solution with cost-aware pathfinding (similar to Dijkstra/A*) to handle varying floor costs. For stochastic environments, developed optimal policies that account for motion uncertainty using probability distributions, ensuring reliable pickup and delivery.  
                      <br /><br />
                      <strong>Outcome:</strong> The system produced near-optimal delivery plans with minimal warehouse cell access, adapted to floor cost variations for reduced overall cost, and successfully generated robust stochastic policies that enabled the robot to complete deliveries despite uncertainty.  
                    </>
                    ),
                    tech: ["Search Algorithm", "A Star Search"],
                    video: "/resume/Videos_RAIT/Warehouse Astar Search.mov"
                  },
                  {
                    title: "Solar System Particle Filter",
                    description: (
                      <>
                      <strong>Project:</strong> Particle Filter for Satellite Localization  
                      <br />
                      In this project, I implemented a particle filter to localize a satellite in its home solar system using noisy gravimetric and illumination sensor data, enabling accurate positioning and communication.  
                      <br /><br />
                      <strong>Problem:</strong> The satellite warped back into orbit with unknown position and orientation, limited resources, and only noisy gravitational/illumination measurements available. It needed to determine its location quickly and efficiently to survive and send rescue signals.  
                      <br /><br />
                      <strong>Approach:</strong> Developed a particle filter that initialized candidate satellite positions, updated their weights based on noisy sensor data, resampled iteratively, and modeled orbital motion with Gaussian noise. Combined localization with planetary phase-angle calculations to determine the correct transmission direction.  
                      <br /><br />
                      <strong>Outcome:</strong> The filter localized the satellite within 0.01 AU accuracy, operated under strict CPU time limits, and successfully enabled reliable SOS message transmission to the home planet.  
                    </>
                    ),
                    tech: ["Machine Learning", "Kalman Filter"],
                    video: "/resume/Videos_RAIT/Particle Filter.mov"
                  },
                  {
                    title: "Hopscotch Kalman Filter",
                    description: (
                      <>
                        <strong>Project:</strong> Kalman Filter for Asteroid Navigation
                        <br />
                        In this project, I implemented a navigation system for a spaceship using a Kalman filter to estimate asteroid positions and plan safe jumps through a cosmic field.
                        <br /><br />
                        <strong>Problem:</strong> The spaceship could only jump within a limited radius and relied on noisy sensor measurements of asteroid locations. Invalid moves occurred if the ship tried to jump outside its range or beyond the field boundaries.
                        <br /><br />
                        <strong>Approach:</strong> Built a Kalman filter to predict asteroid trajectories from noisy observations. Designed a traversal algorithm to choose valid asteroids within range and navigate toward the home base.
                        <br /><br />
                        <strong>Outcome:</strong> The algorithm successfully guided the spaceship across moving asteroids, updating its position with true states after each jump while relying only on noisy observations for planning.
                      </>
                    ),
                    tech: ["Machine Learning", "Kalman Filter"],
                    video: "/resume/Videos_RAIT/Hopscotch Kalman Filter.mov"
                  },
                  {
                    title: "PID Controller Project",
                    description: "Implementation and demonstration of a PID (Proportional-Integral-Derivative) controller system with simulation video demonstration.",
                    tech: ["Control Systems", "Engineering"],
                    video: "/resume/Videos_RAIT/PID.mov"
                  },
                  {
                    title: "Stock Market Forecasting with CNN and News Sentiment Analysis",
                    description: (
                      <>
                        <strong>Project:</strong> Stock Market Forecasting with CNN and News Sentiment Analysis 
                        <br /><br />
                        <strong>Overview:</strong> Developed and tuned multiple Convolutional Neural Network (CNN) architectures in Keras to predict Apple (AAPL) stock prices using historical indicators and news sentiment data.
                        <br /><br />
                        <strong>Key Achievements:</strong>
                        <br />
                        • Integrated sentiment scores from financial news (Intrino API + VADER NLP) with stock trading features (volume, open, high, low, change in value) for multivariate time-series forecasting.
                        <br />
                        • Optimized hyperparameters (filters, kernel size, dense units) and trained using Adam optimizer with RMSE as the evaluation metric, achieving ~2 RMSE (≈3% error).
                        <br />
                        • Demonstrated CNN's ability to capture complex temporal patterns, highlighting potential for broader applications in financial forecasting and multivariate time-series prediction.
                      </>
                    ),
                    tech: ["Python", "Keras", "CNN", "NLP", "Time Series"],
                  },
                  {
                    title: "LLM Fine-Tuning for Data Scientists and Software Engineers - Cohort Based Learning",
                    description: "Fine tuning LLM using Axolotl,set up instrumentation and evaluation to incrementally improve your model and deploying models.",
                    tech: ["Python"],
                    link: "https://maven.com/parlance-labs/fine-tuning"
                  },
                  // {
                  //   title: "AI Puzzle Solver",
                  //   description: "Developed an AI model to solve an N×N block. Implemented Stack and Queue from scratch for various search algorithms, such as breadth-first search, depth-first search, and A* search.",
                  //   tech: ["JAVA"],
                  //   // link: "github.com/project1"
                  // },
                  // {
                  //   title: "Hybrid Images",
                  //   description: "Created hybrid images using the OpenIMAJ library, which combines two images into a hybrid where different images are visible depending on the viewing distance and how humans process visual input.",
                  //   tech: ["JAVA"],
                  //   // link: "github.com/project1"
                  // },
                  // {
                  //   title: "SQL compiler",
                  //   description: "Designed and implemented a domain-specific programming language with the expressive power of conjunctive queries. Developed an intuitive and easy-to-use syntax. Understood the fundamentals of an interpreter, then developed a lexer and a parser.",
                  //   tech: ["Haskell"],
                  // }
                ].map((project, index) => (
                  <div key={index} id={project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    
                    {/* Display video if available */}
                    {project.video && (
                      <div className="mb-4">
                        <video 
                          controls 
                          className="w-full max-w-2xl rounded-lg shadow-sm"
                          style={{ maxHeight: '400px' }}
                        >
                          <source src={project.video} type="video/mp4" />
                          <source src={project.video} type="video/quicktime" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    
                    {/* Display link if available */}
                    {project.link && (
                      <div className="mb-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View Project →
                        </a>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="space-y-8">
              <h1 className="text-3xl font-bold">Skills</h1>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    category: "Languages",
                    skills: ["Python", "Java", "SQL","C++"]
                  },
                  {
                    category: "Frameworks",
                    skills: ["Flask", "FastAPI", "JUnit","Jupyter Notebooks"]
                  },
                  {
                    category: "Developer Tools",
                    skills: ["Git", "Docker", "Google Cloud Platform,", "VS Code","Weights & Biases"]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h2 className="text-xl font-bold mb-4">{category.category}</h2>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="space-y-8">
              <h1 className="text-3xl font-bold">Contact</h1>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📧</span>
                    <a
                      href="mailto:kramaiya3@gatech.edu"
                      className="text-blue-600 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:kramaiya3@gatech.edu';
                      }}
                    >
                      kramaiya3@gatech.edu
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">🔗</span>
                    <a href="https://in.linkedin.com/in/kushal-ramaiya-402504179" className="text-blue-600 hover:underline">
                      linkedin.com/in/kushalramaiya
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💻</span>
                    <a href="https://github.com/ramaiyaKushal" className="text-blue-600 hover:underline">
                      github.com/ramaiyaKushal
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVWebsite;