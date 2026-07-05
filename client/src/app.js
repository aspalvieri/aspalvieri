import portrait from "./assets/home/me.webp";
import dawnholdLogo from "./assets/dawnhold/logo.webp";
import combatImage from "./assets/dawnhold/combat.webp";
import buildingImage from "./assets/dawnhold/building.webp";
import bossImage from "./assets/dawnhold/boss.webp";
import "./styles/styles.scss";

const EMAIL = "alex@aspalvieri.com";
const DAWNHOLD_URL = "https://www.playdawnhold.com";
const STEAM_URL = "https://store.steampowered.com/app/4642990/";

const highlights = [
  {
    title: "Fight",
    description: "Fast top-down action where positioning, abilities, and timing keep the pressure on."
  },
  {
    title: "Build",
    description: "Place towers and walls quickly, then reshape your defenses as each threat develops."
  },
  {
    title: "Progress",
    description: "Use mission rewards to strengthen your hero and base before taking the next path."
  }
];

const gallery = [
  {
    src: combatImage,
    label: "Combat",
    alt: "Dawnhold hero fighting enemies during a dark dungeon mission"
  },
  {
    src: buildingImage,
    label: "Building",
    alt: "Dawnhold tower placement grid beside the Sunstone keep"
  },
  {
    src: bossImage,
    label: "Bosses",
    alt: "Dawnhold hero facing Ocularis the Corrupted in a boss arena"
  }
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Alex Spalvieri, back to top">
            <span className="brand-icon" aria-hidden="true">A</span>
            Alex Spalvieri
          </a>

          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#dawnhold">Dawnhold</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero page-width" id="about" aria-labelledby="intro-heading">
          <p className="margin-note">Portfolio / 2026</p>

          <div className="hero-copy">
            <p className="eyebrow">Game developer &amp; full-stack engineer</p>
            <h1 id="intro-heading">Games, systems, and software—built with intent.</h1>
            <p className="hero-intro">
              I&apos;m Alex Spalvieri, a developer with roots in game development and experience across
              modern web products. I take ideas from early systems and interface work through launch;
              this portfolio highlights Dawnhold, a game I designed and developed.
            </p>
            <div className="text-links">
              <a href="#dawnhold">See the project <span aria-hidden="true">↓</span></a>
              <a href={`mailto:${EMAIL}`}>{EMAIL} <ExternalArrow /></a>
            </div>
          </div>

          <figure className="portrait">
            <div className="portrait-image">
              <img src={portrait} alt="Portrait of Alex Spalvieri" />
            </div>
            <figcaption>Building games and useful software.</figcaption>
          </figure>
        </section>

        <section className="project-band" id="dawnhold" aria-labelledby="dawnhold-heading">
          <div className="page-width project-inner">
            <header className="project-heading">
              <p className="project-number">01 / Selected project</p>
              <div>
                <p className="eyebrow eyebrow-light">Action RPG + tower defense</p>
                <h2 id="dawnhold-heading">Dawnhold</h2>
              </div>
              <p className="project-summary">
                Defend the Sunstone through objective-driven missions, arena gauntlets, and boss fights.
              </p>
            </header>

            <div className="project-art">
              <img
                src="/dawnhold-card.webp"
                alt="Dawnhold logo over a pixel-art battlefield and the Sunstone keep"
              />
              <p>On Steam <span aria-hidden="true">•</span> July 13, 2026</p>
            </div>

            <div className="project-details">
              <div className="project-identity">
                <img src={dawnholdLogo} alt="Dawnhold" />
                <p>Single-player<br />Windows PC<br />Release date: July 13, 2026</p>
              </div>

              <div className="project-description">
                <p className="lead">
                  Dawnhold mixes direct hero combat with the quick decisions of a base-defense game.
                </p>
                <p>
                  Gather resources, build towers and walls, and adapt as enemy waves change. Between
                  missions, invest your rewards into abilities and defenses before choosing where to go next.
                </p>
                <div className="project-actions">
                  <a className="button button-light" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                    View on Steam <ExternalArrow />
                  </a>
                  <a className="button button-outline" href={DAWNHOLD_URL} target="_blank" rel="noopener noreferrer">
                    Official site <ExternalArrow />
                  </a>
                </div>
              </div>
            </div>

            <ol className="feature-list">
              {highlights.map((highlight, index) => (
                <li key={highlight.title}>
                  <span>0{index + 1}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </li>
              ))}
            </ol>

            <div className="gallery-heading">
              <h3>Inside the game</h3>
              <p>A few moments from across Dawnhold.</p>
            </div>

            <div className="gallery" aria-label="Dawnhold gameplay gallery">
              {gallery.map((image, index) => (
                <figure key={image.label}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <figcaption><span>0{index + 1}</span>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="contact page-width" id="contact" aria-labelledby="contact-heading">
          <p className="margin-note">Contact / Say hello</p>
          <div>
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="contact-heading">Let&apos;s talk.</h2>
          </div>
          <div className="contact-details">
            <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL} <ExternalArrow /></a>
            <div className="social-links" aria-label="Social links">
              <a href="https://github.com/aspalvieri" target="_blank" rel="noopener noreferrer">
                GitHub <ExternalArrow />
              </a>
              <a href="https://www.linkedin.com/in/alex-spalvieri/" target="_blank" rel="noopener noreferrer">
                LinkedIn <ExternalArrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <p>© {new Date().getFullYear()} Alex Spalvieri</p>
        <p>Developer of Dawnhold</p>
      </footer>
    </div>
  );
}

export default App;
