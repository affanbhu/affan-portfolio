
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-greeting">HELLO, I'M</p>
            <h1>
              Affan <span>Bhuiyan</span>
            </h1>
            <h2>Frontend Developer</h2>
            <p className="hero-description">
              I'm a Computer Science and Engineering student at
              North South University, passionate about building
              modern, responsive, and user-friendly web experiences.
            </p>

            <div className="hero-buttons">
              <a className="button button-primary" href="#projects">
                Explore My Projects
              </a>
              <a
                className="button button-outline"
                href="/resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/affanbhu"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/affan-bhuiyan/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-image-placeholder">
            <Image
              src="/profile.jpg"
              alt="Affan Bhuiyan - Frontend Developer"
              width={360}
              height={360}
              priority
              className="profile-photo"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="content-section about-section">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>

          <div className="about-content">
            
<div className="about-text">
  <p>
    Hello! I'm Affan Bhuiyan, a Computer Science and Engineering
    student at North South University with a strong interest in
    frontend web development and modern technologies.
  </p>

  <p>
    My programming journey began with learning HTML, CSS, and
    JavaScript. I'm now developing my skills in React, Next.js,
    and TypeScript by building projects, practicing problem-solving,
    and exploring new technologies. I believe consistent practice
    and curiosity are essential for becoming a better developer.
  </p>

  <p>
    I enjoy creating clean, responsive, and user-friendly websites
    that solve real-world problems. I like turning ideas into
    functional web applications, learning how things work behind
    the scenes, and improving my code through hands-on experience.
  </p>

  <p>
    Outside programming, I enjoy playing sports such as football
    and cricket, reading books, traveling and exploring new places,
    and staying active through fitness and gym workouts. I'm also
    interested in learning about new technologies and discovering
    how they can make everyday life better.
  </p>

  <p>
    My goal is to become a professional software developer,
    strengthen my programming fundamentals, and contribute to
    building useful, reliable, and meaningful digital products.
  </p>
</div>


            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                Learn the fundamentals. Build projects. Solve problems.
                Improve consistently.
              </p>
              <div className="about-tags">
                <span>Curious Learner</span>
                <span>Problem Solver</span>
                <span>Project Builder</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="content-section skills-section">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>My Technical Skills</h2>
          <p className="skills-intro">
            Technologies and tools I'm learning and using to build web projects.
          </p>

          <div className="skills-grid">
            <div className="skills-card">
              <h3>Frontend Development</h3>

              {[
                { name: "HTML", className: "skill-html" },
                { name: "CSS", className: "skill-css" },
                { name: "JavaScript", className: "skill-js" },
                { name: "React.js", className: "skill-react" },
                { name: "Next.js", className: "skill-next" },
              ].map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>Learning</span>
                  </div>
                  <div className="skill-track">
                    <div className={`skill-fill ${skill.className}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-card tools-card">
              <h3>Tools & Technologies</h3>
              <p className="tools-description">
                Tools I use or am exploring in my development workflow.
              </p>
              <div className="technology-tags">
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express.js</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="content-section education-section">
          <p className="section-label">MY ACADEMIC BACKGROUND</p>
          <h2>Education</h2>

          <div className="education-card">
            <div className="education-marker">
              <span />
            </div>
            <div className="education-details">
              <p className="education-period">Currently Studying</p>
              <h3>Bachelor of Science in Computer Science & Engineering</h3>
              <h4>North South University</h4>
              <p>
                Building a foundation in computer science, programming,
                problem-solving, and software development while developing
                practical web development skills through projects.
              </p>
              <span className="education-status">Undergraduate Student</span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="content-section experience-section"
        >
          <p className="section-label">MY DEVELOPMENT JOURNEY</p>
          <h2>Experience</h2>

          <div className="experience-card">
            <h3>Frontend Development</h3>
            <p className="experience-company">
              Personal Projects & Continuous Learning
            </p>
            <p className="experience-description">
              I am developing my web development skills by building
              projects, learning modern frontend technologies, and
              improving my understanding of responsive design and
              user-friendly interfaces.
            </p>
            <div className="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="content-section projects-section">
          <p className="section-label">WHAT I'VE BUILT</p>
          <h2>My Projects</h2>
          <p className="projects-intro">
            A selection of projects I've developed while learning
            and practicing web development.
          </p>

          <div className="projects-grid">
            
{/* Bazar Dor */}
<article className="project-card">
  <div className="project-visual project-visual-bazar">
    <span>বাজার দর</span>
  </div>

  <div className="project-info">
    <p className="project-type">Web Application</p>
    <h3>Bazar Dor</h3>
    <p>
      A Bengali market-price application designed to help
      users explore the prices of essential products.
    </p>

    <div className="project-tags">
      <span>Next.js</span>
      <span>TypeScript</span>
      <span>MongoDB</span>
    </div>

    <div className="project-links">
      <a className="project-link" href="/projects/bazar-dor">
        View Project Details →
      </a>

      <a
        className="project-link"
        href="https://github.com/affanbhu/BazarDhor"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Repository ↗
      </a>
    </div>
  </div>
</article>

            {/* FlexUp */}
            <article className="project-card">
              <div className="project-visual project-visual-exercise">
                <span>FlexUp</span>
              </div>

              <div className="project-info">
                <p className="project-type">Web Application</p>
                <h3>FlexUp</h3>
                <p>
                  Explore FlexUp, one of my web development projects,
                  and visit its repository to learn more about the code.
                </p>
                <div className="project-tags">
                  <span>Next.js</span>
                  <span>TypeScript</span>
                  <span>CSS</span>
                </div>
                <a className="project-link" href="/projects/flexup">
                  View Project Details →
                </a>
                <a
                  className="project-link"
                  href="https://github.com/affanbhu/FlexUp"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </article>

            {/* CodeCraft */}
            <article className="project-card">
              <div className="project-visual project-visual-codecraft">
                <span>CodeCraft</span>
              </div>

              <div className="project-info">
                <p className="project-type">Development Project</p>
                <h3>CodeCraft</h3>
                <p>
                  Explore CodeCraft and its source code on GitHub.
                  This project is part of my ongoing web development journey.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Vite</span>
                </div>
                <a className="project-link" href="/projects/codecraft">
                  View Project Details →
                </a>
                <a
                  className="project-link"
                  href="https://github.com/affanbhu/CodeCraft"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        
{/* Contact */}
<section id="contact" className="content-section">
  <p className="section-label">GET IN TOUCH</p>
  <h2>Contact Me</h2>

  <p>
    Interested in connecting? Feel free to reach out to me
    through email or phone.
  </p>

  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:affanbhuiya.project@gmail.com">
      affanbhuiya.project@gmail.com
    </a>
  </p>

  <p>
    <strong>Phone:</strong>{" "}
    <a href="tel:+8801971384830">
      +880 1971-384830
    </a>
  </p>

  <p>
    <strong>WhatsApp:</strong>{" "}
    <a
      href="https://wa.me/8801971384830"
      target="_blank"
      rel="noreferrer"
    >
      Message me on WhatsApp ↗
    </a>
  </p>
</section>
</main>
</>
);
}
