const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 85, icon: '⚛️' },
        { name: 'JavaScript', level: 80, icon: '📜' },
        { name: 'HTML5 & CSS3', level: 95, icon: '🎨' },
        { name: 'TailwindCSS', level: 90, icon: '💨' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚂' },
        { name: 'MongoDB', level: 70, icon: '🍃' },
        { name: 'REST APIs', level: 80, icon: '🔌' },
      ]
    }
  ]

  const tools = [
    { name: 'Git & GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎭' },
    { name: 'Postman', icon: '📮' },
    { name: 'Vite', icon: '⚡' },
    { name: 'npm/yarn', icon: '📦' },
  ]

  return (
    <section id="skills" className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Skills</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="card">
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="card">
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 
                         hover:bg-primary/10 transition-all duration-300 cursor-pointer text-center"
              >
                <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Problem Solving',
              description: 'Strong analytical skills to debug and solve complex issues',
              icon: '🧩'
            },
            {
              title: 'Responsive Design',
              description: 'Creating mobile-first, responsive layouts for all devices',
              icon: '📱'
            },
            {
              title: 'Continuous Learning',
              description: 'Always exploring new technologies and best practices',
              icon: '📚'
            }
          ].map((item, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
