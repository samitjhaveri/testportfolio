import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              {/* Profile Photo Placeholder */}
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{' '}
              <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-medium"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I&apos;m a passionate developer with experience in modern web technologies. 
              I love building applications that solve real-world problems and provide great user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Figma, Adobe XD, Responsive Design</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/about"
              className="text-blue-600 hover:text-blue-800 font-medium text-lg"
            >
              Learn More About Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Here are some of my recent projects I&apos;m proud of
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">E-commerce Platform</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">A full-stack e-commerce solution with React and Node.js</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">MongoDB</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Task Manager</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">A productivity app with real-time collaboration features</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Next.js</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-medium">Weather App</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Weather Dashboard</h3>
                <p className="text-gray-600 mb-4">A beautiful weather app with location-based forecasts</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">API Integration</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Responsive</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">Code</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
