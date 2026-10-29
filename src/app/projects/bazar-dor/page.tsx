
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BazarDorProject() {
  return (
    <>
      <Navbar />

      <main className="project-detail">
        <Link className="back-link" href="/#projects">
          ← Back to Projects
        </Link>

        <p className="section-label">PROJECT DETAILS</p>
        <h1>Bazar Dor — বাজার দর</h1>

        <p className="detail-lead">
          A Bengali market-price website designed to help people
          explore the prices of essential products in one place.
        </p>

        <div className="detail-panel">
          <h2>Project Overview</h2>
          <p>
            Bazar Dor is a web application focused on presenting
            essential product prices in Bengali. It provides a
            user-friendly way to browse market information by
            category and explore product details.
          </p>
        </div>

        <div className="detail-panel">
          <h2>Technologies Used</h2>
          <div className="project-tags">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </div>
          
        </div>

        <div className="detail-panel">
          <h2>Challenges</h2>
          <p>
            One development challenge was organizing the application
            into clear pages and components while keeping the
            interface easy to navigate.
          </p>
          
        </div>

        
<div className="detail-panel">
  <h2>Technologies Used</h2>
  <div className="project-tags">
    <span>Next.js</span>
    <span>React</span>
    <span>TypeScript</span>
    <span>Tailwind CSS</span>
    <span>Better Auth</span>
    <span>MongoDB</span>
  </div>
  <p>
    Built with Next.js and React using TypeScript. Tailwind CSS
    is used for styling, while Better Auth and MongoDB support
    the application's authentication functionality.
  </p>
</div>


        <div className="detail-actions">
          <a
            className="button button-primary"
            href="https://bazar-dor-woad-rho.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>

          <a
            className="button button-outline"
            href="https://github.com/affanbhu/BazarDhor"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository ↗
          </a>
        </div>
      </main>
    </>
  );
}
