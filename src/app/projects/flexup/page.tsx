
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function FlexUpProject() {
  return (
    <>
      <Navbar />

      <main className="project-detail flexup-detail">
        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>

        <header className="flexup-header">
          <p className="section-label">PROJECT DETAILS</p>
          <h1>FlexUp</h1>
          <p className="detail-lead">
            A web development project built during my learning
            journey, focused on creating practical and
            user-friendly digital experiences.
          </p>
        </header>

        <section className="detail-panel">
          <h2>Project Overview</h2>
          <p>
            FlexUp is a web development project that helped me
            practice building applications with modern frontend
            technologies. It gave me an opportunity to apply my
            programming knowledge, organize application code,
            and improve my understanding of web development.
          </p>
          <p>
            Visit the live website to explore the project or
            check the GitHub repository to review its source code.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Technologies Used</h2>
          <div className="project-tags">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>DaisyUI</span>
            <span>React Hot Toast</span>
          </div>
          <p>
            The project dependencies include Next.js, React,
            and TypeScript. Tailwind CSS and DaisyUI are available
            for styling, while React Hot Toast can provide toast
            notifications.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Challenges Faced</h2>
          <p>
            One learning goal was understanding how to organize
            a web application using components and modern frontend
            tools. Working with TypeScript also helped me
            understand the importance of types and structured code.
          </p>
          <p>
            This project provided practical experience with a
            modern web development setup and helped me develop
            my problem-solving and debugging skills.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Future Improvements</h2>
          <ul>
            <li>
              Improve the responsive experience on mobile,
              tablet, and desktop screens.
            </li>
            <li>Refine the interface and overall usability.</li>
            <li>Improve code organization and maintainability.</li>
            <li>Add useful features based on the project's purpose.</li>
          </ul>
        </section>

        <div className="detail-actions">
          <a
            className="button button-primary"
            href="https://beamish-axolotl-dfaf81.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="button button-outline"
            href="https://github.com/affanbhu/FlexUp"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository ↗
          </a>

          <Link
            className="button button-outline"
            href="/#projects"
          >
            Back to All Projects
          </Link>
        </div>
      </main>
    </>
  );
}
