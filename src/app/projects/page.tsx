export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "bg-gradient-to-br from-blue-400 to-blue-600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      demoUrl: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/johndoe/ecommerce-platform",
      features: ["User authentication", "Payment processing", "Admin dashboard", "Responsive design"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "bg-gradient-to-br from-green-400 to-green-600",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      demoUrl: "https://taskmanager-demo.example.com",
      githubUrl: "https://github.com/johndoe/task-manager",
      features: ["Real-time collaboration", "Project tracking", "Team management", "Analytics dashboard"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application providing detailed forecasts, interactive maps, and location-based weather alerts with a clean, intuitive interface.",
      image: "bg-gradient-to-br from-purple-400 to-purple-600",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Responsive Design"],
      demoUrl: "https://weather-demo.example.com",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      features: ["Location-based forecasts", "Interactive maps", "Weather alerts", "Historical data"]
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform for social media managers to track engagement, analyze trends, and generate detailed reports across multiple platforms.",
      image: "bg-gradient-to-br from-red-400 to-red-600",
      technologies: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
      demoUrl: "https://analytics-demo.example.com",
      githubUrl: "https://github.com/johndoe/social-analytics",
      features: ["Multi-platform integration", "Data visualization", "Automated reports", "Trend analysis"]
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "A community-driven recipe sharing platform where users can upload, share, and discover new recipes with rating system and meal planning features.",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500",
      technologies: ["Next.js", "MongoDB", "Cloudinary", "NextAuth.js", "Tailwind CSS"],
      demoUrl: "https://recipes-demo.example.com",
      githubUrl: "https://github.com/johndoe/recipe-platform",
      features: ["Recipe sharing", "Rating system", "Meal planning", "Search & filters"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimized performance.",
      image: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      demoUrl: "https://portfolio-demo.example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
      features: ["Responsive design", "Smooth animations", "SEO optimized", "Fast loading"]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here&apos;s a showcase of my work, ranging from full-stack applications to creative solutions. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Project Image */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <h3 className="text-white text-xl font-bold text-center px-4">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center px-4 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Open Source Contributions
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            I&apos;m passionate about contributing to the open source community. Here are some of the projects I&apos;ve contributed to:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">React Router</h3>
              <p className="text-gray-600 text-sm mb-4">
                Contributed bug fixes and documentation improvements to the popular React routing library.
              </p>
              <a 
                href="https://github.com/remix-run/react-router" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View on GitHub →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 text-sm mb-4">
                Added utility classes and helped improve the documentation for better developer experience.
              </p>
              <a 
                href="https://github.com/tailwindlabs/tailwindcss" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View on GitHub →
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next.js</h3>
              <p className="text-gray-600 text-sm mb-4">
                Reported and helped fix performance issues in the build process and improved TypeScript support.
              </p>
              <a 
                href="https://github.com/vercel/next.js" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              I&apos;m always excited to work on new challenges and bring ideas to life.
            </p>
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium inline-block"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}