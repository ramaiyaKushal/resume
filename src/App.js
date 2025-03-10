import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Simulating React Router functionality with a simple state-based router
const CVWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  // Page Components
  const HomePage = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20 bg-slate-200 rounded-full"></div>
        <div>
          <h1 className="text-3xl font-bold">Kushal Atul Ramaiya</h1>
          <p className="text-xl text-slate-600">Software Development Engineer</p>
        </div>
      </div>
      <p className="text-lg text-slate-600">
        Passionate about building scalable systems and exploring AI/ML. 
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Current Focus</h2>
        <p >
          Master of Science in Computer Science at Georgia Tech, 
          specializing in Machine Learning.
        </p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg">
        <p>
          Building Generative UI and Data Science at Augmont.
        </p>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Experience</h1>
      {[
        {
          title: "Machine Learning Engineer",
          company: "Augmont Enterprise",
          period: "April 2024 - Currently",
          language: "Python",
          responsibilities: [
            "Build "
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
    </div>
  );

  const EducationPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Education</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-bold">MS in Computer Science</h2>
        <p className="text-slate-600 mb-4">Georgia Tech • 2023 - Present</p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Specialization</h3>
            <p className="text-slate-600">Computing Systems and Machine Learning</p>
          </div>
          <div>
            <h3 className="font-semibold">Key Courses</h3>
            <ul className="list-disc ml-4 text-slate-600">
              <li>Advanced Operating Systems</li>
              <li>Machine Learning</li>
              <li>Distributed Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid gap-6">
        {[
          {
            title: "E-commerce Platform",
            description: "Built scalable marketplace system",
            tech: ["React", "Node.js", "MongoDB"],
            link: "github.com/project1"
          },
          {
            title: "ML Pipeline",
            description: "Automated data processing pipeline",
            tech: ["Python", "TensorFlow", "AWS"],
            link: "github.com/project2"
          }
        ].map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-slate-600 mb-4">{project.description}</p>
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
    </div>
  );

  const SkillsPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            category: "Languages",
            skills: ["Python", "JavaScript", "Java", "SQL"]
          },
          {
            category: "Frontend",
            skills: ["React", "Vue.js", "HTML/CSS", "Tailwind"]
          },
          {
            category: "Backend",
            skills: ["Node.js", "Django", "Express", "FastAPI"]
          },
          {
            category: "DevOps",
            skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
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
    </div>
  );

  const ContactPage = () => (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl">📧</span>
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">🔗</span>
            <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 hover:underline">
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xl">💻</span>
            <a href="https://github.com/yourusername" className="text-blue-600 hover:underline">
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'experience':
        return <ExperiencePage />;
      case 'education':
        return <EducationPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex relative">
        {/* Sidebar Toggle Button */}
        <button 
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600 text-white lg:hidden"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Sidebar */}
        <aside 
          className={`
            min-h-screen w-64 bg-slate-900 text-white shrink-0
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0 pt-20'  : '-translate-x-64 lg:translate-x-0'}
            fixed lg:static
          `}
        >
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">Your Name</h1>
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
                    ${currentPage === item.id ? 'bg-blue-600' : ''}
                  `}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`
          flex-1 p-6 lg:p-8 transition-all duration-300 ease-in-out
          ${isSidebarOpen ? 'ml-64  pt-20 lg:pt-0' : 'ml-0 pt-20'}
        `}>
          <div className="max-w-3xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CVWebsite;