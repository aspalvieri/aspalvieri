import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import selfPortrait from "../../assets/home/me.webp";
import { projects } from "../../data/projects";
import { config } from "../../utils/config";

const ROTATING_WORDS = ["Dedication", "Curiosity", "Discipline", "Ambition"];

function Home() {
  const recaptcha = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const [contact, setContact] = useState({
    sending: false,
    sentForm: false,
    name: "",
    nameValid: true,
    email: "",
    emailValid: true,
    message: "",
    messageValid: true
  });

  const featuredProjects = useMemo(() => projects.slice(0, 3), []);
  const projectCount = projects.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const intervalId = window.setInterval(() => {
      setTextIndex((current) => (current + 1) % ROTATING_WORDS.length);
    }, 3200);
    return () => window.clearInterval(intervalId);
  }, []);

  const updateValid = (field, value) => {
    setContact((prev) => ({
      ...prev,
      [`${field}Valid`]: value
    }));
  };

  const onChange = (event) => {
    const { id, value } = event.target;
    setContact((prev) => ({
      ...prev,
      [id]: value,
      [`${id}Valid`]: true
    }));
  };

  const onResolved = async () => {
    const recaptchaRef = recaptcha.current;
    if (!recaptchaRef) {
      setContact((prev) => ({ ...prev, sending: false }));
      return;
    }

    try {
      const token = await recaptchaRef.executeAsync();
      recaptchaRef.reset();
      const { name, email, message } = contact;
      const response = await axios.post(`${config.SERVER_URI}/api/mail/send`, {
        token,
        name,
        email,
        message
      });

      if (response.status === 200) {
        setContact((prev) => ({
          ...prev,
          sending: false,
          sentForm: true
        }));
        return;
      }
    } catch (error) {
      // Form remains on page and can be retried if request fails.
    }

    setContact((prev) => ({ ...prev, sending: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setContact((prev) => ({ ...prev, sending: true }));

    const { name, email, message } = contact;
    let invalid = false;

    if (name === "" || name.length > 32) {
      updateValid("name", false);
      invalid = true;
    }
    if (email === "" || email.length > 128 || !email.includes("@") || !email.includes(".")) {
      updateValid("email", false);
      invalid = true;
    }
    if (message === "" || message.length > 1000) {
      updateValid("message", false);
      invalid = true;
    }

    if (invalid) {
      setContact((prev) => ({ ...prev, sending: false }));
      return;
    }

    await onResolved();
  };

  return (
    <div className="page-shell home-shell">
      <section className="hero landing-card">
        <div className="landing-card-grid">
          <div className="landing-main">
            <p className="eyebrow">Alex Spalvieri</p>
            <h1>
              Programmer with{" "}
              <Link to="/projects" className="hero-highlight">
                <span key={ROTATING_WORDS[textIndex]} className="hero-rotating-word">
                  {ROTATING_WORDS[textIndex]}
                </span>
              </Link>
            </h1>
            <p className="subtitle">
              I build dependable web applications and interactive software with a product-focused,
              end-to-end engineering approach.
            </p>
            <ul className="landing-pill-list" aria-label="Core strengths">
              <li>Full-stack delivery</li>
              <li>Game + web engineering</li>
              <li>Product-minded execution</li>
            </ul>
            <div className="hero-actions">
              <Link to="/projects" className="btn-primary-solid">
                View Projects
              </Link>
              <a
                href="#contact-section"
                className="btn-secondary-outline"
                onClick={(event) => {
                  event.preventDefault();
                  const section = document.getElementById("contact-section");
                  if (section) {
                    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    section.scrollIntoView({
                      behavior: reduceMotion ? "auto" : "smooth",
                      block: "start"
                    });
                  }
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          <aside className="landing-panel" aria-label="Profile summary">
            <p className="landing-panel-kicker">At A Glance</p>
            <h2>Shipping practical products from concept through launch.</h2>
            <div className="landing-metric-grid">
              <article>
                <p className="metric-value">{projectCount}+</p>
                <p className="metric-label">Portfolio projects</p>
              </article>
              <article>
                <p className="metric-value">Node + React</p>
                <p className="metric-label">Primary stack</p>
              </article>
              <article>
                <p className="metric-value">End-to-end</p>
                <p className="metric-label">Build ownership</p>
              </article>
            </div>
            <Link to="/apis" className="btn-secondary-outline landing-panel-cta">
              Explore API Playground
            </Link>
          </aside>
        </div>
        <div className="landing-glow" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="home-about">
        <div className="portrait-wrap">
          <img src={selfPortrait} alt="Portrait of Alex Spalvieri" />
        </div>
        <div>
          <p className="eyebrow">About Me</p>
          <h2>Building software from game systems to full-stack web products</h2>
          <p>
            I have been programming for most of my life. I started in game development, from text
            adventures to 2D and 3D projects, and later expanded into front-end and back-end web
            development.
          </p>
          <p>
            I studied Interactive Media Design at Georgian College, working across both foundational and
            modern stacks. The program began with HTML, CSS, PHP, and MySQL, then expanded into Node.js,
            Express, React, and MongoDB. I enjoy building practical products from concept through launch.
          </p>
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-header">
          <p className="eyebrow">Featured Work</p>
          <h2>Selected projects</h2>
        </div>
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="project-card compact-card">
              <img src={project.image} alt={`Screenshot from ${project.title}`} />
              <div className="project-card-body">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.headline}</p>
                <Link to={`/projects/${project.slug}`} className="text-link">
                  View details <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact-section">
        <div className="section-header">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect</h2>
          <p className="subtitle">If my work aligns with your goals, I&apos;d be glad to connect.</p>
        </div>

        {!contact.sentForm ? (
          <form noValidate onSubmit={handleSubmit} className="contact-form">
            <div className="contact-grid">
              <div>
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  maxLength={32}
                  onChange={onChange}
                  value={contact.name}
                  className={classNames("form-control", { "is-invalid": !contact.nameValid })}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  maxLength={128}
                  onChange={onChange}
                  value={contact.email}
                  className={classNames("form-control", { "is-invalid": !contact.emailValid })}
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                onChange={onChange}
                value={contact.message}
                className={classNames("form-control", { "is-invalid": !contact.messageValid })}
              />
            </div>
            <p className="recaptcha-note">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
              <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </p>
            <button
              type="submit"
              className={classNames("btn-primary-solid contact-submit", { disabled: contact.sending })}
              disabled={contact.sending}
            >
              {contact.sending ? "Sending..." : "Submit Message"}
            </button>
            <ReCAPTCHA ref={recaptcha} sitekey={config.RECAPTCHA_SITE_KEY} size="invisible" />
          </form>
        ) : (
          <div className="contact-success" role="status" aria-live="polite">
            <h3>Message sent successfully.</h3>
            <p>Thanks for reaching out. I&apos;ll respond as soon as possible.</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
