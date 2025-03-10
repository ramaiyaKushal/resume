import React, { useState } from 'react';
import { User, Briefcase, GraduationCap, Code, Brain, Home, Mail } from 'lucide-react';

const ResumeWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const Navigation = () => (
    <nav className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Kushal Ramaiya</h2>
        <p className="text-sm text-gray-400">Software Development Engineer</p>
      </div>
      
      <div className="space-y-2">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'experience', icon: Briefcase, label: 'Experience' },
          { id: 'education', icon: GraduationCap, label: 'Education' },
          { id: 'projects', icon: Code, label: 'Projects' },
          { id: 'skills', icon: Brain, label: 'Skills' },
          { id: 'contact', icon: Mail, label: 'Contact' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors
              ${currentPage === item.id ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'}`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center space-x-6">
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
            <User size={64} className="text-gray-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Kushal Atul Ramaiya</h1>
            <p className="text-xl text-gray-600">Software Development Engineer</p>
            <p className="text-gray-500 mt-2">Passionate about building scalable systems and exploring AI/ML</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Current Focus</h2>
          <p className="text-gray-600">Pursuing MS in Computer Science at Georgia Tech, specializing in Computing Systems</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Experience Highlight</h2>
          <p className="text-gray-600">Former SDE II at FactSet, working on Market DataFeed systems</p>
        </div>
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
      <div className="space-y-8">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-xl font-bold text-gray-800">Software Development Engineer II</h3>
          <p className="text-gray-600">FactSet | September 2019 - February 2021</p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• Market DataFeed Engineer for Euronext - Largest European Market Datafeed</li>
            <li>• Development of low latency systems for delivering intraday messages in C++</li>
            <li>• Updated infrastructure maintenance across RHEL 7 hosts</li>
            <li>• Coordinated with exchanges, vendors, and internal teams</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const EducationPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800">Georgia Institute of Technology</h3>
        <p className="text-gray-600">MS in Computer Science | 2024 - Present</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Specialization</p>
          <p className="text-gray-600">Computing Systems</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold text-gray-800">University of Southampton</h3>
        <p className="text-gray-600">BSc Computer Science | 2016 - 2019</p>
        <p className="text-gray-600 mt-2">Upper Second Class Honours</p>
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Key Courses</p>
          <p className="text-gray-600">Machine Learning Technology, Computer Vision, Cyber Security, Computational Biology & Advanced Databases</p>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Deep Learning Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Stock Market Forecasting with CNN</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Combined CNN with sentiment analysis for market prediction</li>
              <li>• Utilized Python's NLTK and Google Cloud's NLP</li>
              <li>• Implemented custom CNN architecture</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Deep Learning Specialization</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Completed all 5 courses in Andrew Ng's specialization</li>
              <li>• Mastered PyTorch and FastAI API</li>
              <li>• Studied advanced concepts including GCNs and Transformer Networks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Software Engineering Projects</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Airport Runway Model</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>• Led team of 5 developers for runway redeclaration software</li>
              <li>• Implemented complex mathematical calculations</li>
              <li>• Designed intuitive UI for obstacle visualization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Programming Languages & Tools</h3>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold text-gray-700">Proficient:</p>
              <p className="text-gray-600">JAVA, C++, Python, Shell, Git</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Intermediate:</p>
              <p className="text-gray-600">SQL, Keras/Tensorflow, LaTeX, Redis, Perforce, PyTorch, Haskell</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800">Languages</h3>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• English (Native)</li>
            <li>• Hindi (Native)</li>
            <li>• Gujarati (Native)</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
      <div className="space-y-4 text-gray-600">
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-600" />
          <span>kushalramaiya@gmail.com</span>
        </div>
        <div className="flex items-center space-x-3">
          <p>+91-7021313298</p>
        </div>
        <div className="flex items-center space-x-3">
          <p>Mumbai, India</p>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'experience': return <ExperiencePage />;
      case 'education': return <EducationPage />;
      case 'projects': return <ProjectsPage />;
      case 'skills': return <SkillsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="ml-64 p-8">
        {renderPage()}
      </div>
    </div>
  );
};

export default ResumeWebsite;
