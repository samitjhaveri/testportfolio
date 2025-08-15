export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my background, skills, and what drives my passion for development
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Section */}
          <div>
            <div className="w-48 h-48 bg-gray-300 rounded-lg mx-auto lg:mx-0 mb-8 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">John Doe</h2>
            <p className="text-lg text-blue-600 mb-4">Full Stack Developer</p>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a passionate full stack developer with over 5 years of experience building 
              web applications. I love creating solutions that make a real difference in people&apos;s lives 
              and businesses. When I&apos;m not coding, you can find me exploring new technologies, 
              contributing to open source projects, or hiking in nature.
            </p>
          </div>

          {/* Bio and Journey */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Background</h4>
                <p className="text-gray-600">
                  I started my journey in computer science with a Bachelor&apos;s degree from State University. 
                  What began as curiosity about how websites work turned into a passion for creating 
                  digital experiences that solve real problems.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Current Focus</h4>
                <p className="text-gray-600">
                  Currently, I&apos;m focused on building scalable web applications using modern technologies 
                  like React, Next.js, and Node.js. I&apos;m particularly interested in the intersection of 
                  user experience and performance optimization.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Beyond Code</h4>
                <p className="text-gray-600">
                  I believe in continuous learning and enjoy mentoring junior developers. I&apos;m also 
                  passionate about sustainable technology and how we can build more environmentally 
                  conscious digital products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Frontend</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript ES6+</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Backend</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Tools & Others</h4>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>AWS / Vercel</li>
                <li>Figma</li>
                <li>Jest & Testing</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                <p className="text-blue-600 mb-2">State University • 2017-2021</p>
                <p className="text-gray-600">
                  Focused on software engineering, data structures, and algorithms. 
                  Graduated Magna Cum Laude with a 3.8 GPA.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Full Stack Web Development Bootcamp</h4>
                <p className="text-green-600 mb-2">CodePath • 2020</p>
                <p className="text-gray-600">
                  Intensive 12-week program covering modern web development technologies 
                  and best practices.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Senior Full Stack Developer</h4>
                <p className="text-purple-600 mb-2">TechCorp Inc. • 2022-Present</p>
                <p className="text-gray-600">
                  Leading development of enterprise applications serving 100K+ users. 
                  Architecting scalable solutions and mentoring junior developers.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">Frontend Developer</h4>
                <p className="text-orange-600 mb-2">StartupXYZ • 2021-2022</p>
                <p className="text-gray-600">
                  Built responsive web applications using React and TypeScript. 
                  Collaborated with design team to implement pixel-perfect UIs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">When I&apos;m Not Coding</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Hiking</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Reading</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Music</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}