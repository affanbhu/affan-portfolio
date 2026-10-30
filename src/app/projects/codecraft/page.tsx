
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CodeCraftPage() {
  return (
    <>
      <Navbar />

     <main className="project-detail">
        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>

        <header className="flexup-header">
          <p className="section-label">PROJECT DETAILS</p>
<h1>CodeCraft</h1>

<p className="detail-lead">
  A frontend web development project built with React
  and TypeScript, focused on creating a clean,
  responsive, and user-friendly web experience.
</p>
        </header>

        <section className="detail-panel">
          <h2>Project Overview</h2>
          <p>
            CodeCraft is a frontend development project created
            as part of my web development journey. It gives me
            practical experience building web interfaces,
            organizing components, and applying modern frontend
            development concepts.
          </p>
          <p>
            The project helps me strengthen my programming
            fundamentals and gain hands-on experience by turning
            ideas into a working web application.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Technologies Used</h2>
          <div className="project-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Vite</span>
            <span>CSS</span>
            <span>React Toastify</span>
          </div>
          <p>
            React is used to build the user interface, while
            TypeScript helps structure the code with type
            checking. Vite provides the development and build
            tooling, and React Toastify is available for toast
            notifications.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Challenges Faced</h2>
          <p>
            Working with a component-based frontend structure
            helped me understand how to organize UI elements
            and keep code maintainable. Using TypeScript also
            encouraged me to pay closer attention to types and
            potential errors during development.
          </p>
          <p>
            Building and testing the application provided
            practical experience with the frontend development
            workflow, including running the project and
            preparing a production build.
          </p>
        </section>

        <section className="detail-panel">
          <h2>Future Improvements</h2>
          <ul>
            <li>
              Improve responsiveness across mobile, tablet,
              and desktop screen sizes.
            </li>
            <li>Refine the interface and improve accessibility.</li>
            <li>Improve code organization and maintainability.</li>
            <li>
              Add useful features based on the project's purpose.
            </li>
          </ul>
        </section>

        <div className="detail-actions">
          <a
            className="button button-primary"
            href="https://harmonious-raindrop-bf8e51.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="button button-outline"
            href="https://github.com/affanbhu/CodeCraft"
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
