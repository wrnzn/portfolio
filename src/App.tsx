import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  Maximize2,
  X,
  Server,
} from 'lucide-react';
import { useEffect, useState, type CSSProperties } from 'react';
import { capabilities, contactLinks, featuredProjects, profile, resumeLinks } from './data/portfolioData';
import type { Project } from './data/portfolioData';

const navItems = ['Work', 'Skills', 'About', 'Contact'];
const sectionIds = navItems.map((item) => item.toLowerCase());

const capabilityIcons = [Code2, BrainCircuit, Server, Database];
const marqueeItems = [
  'Software internship candidate',
  'Web apps',
  'REST APIs',
  'Applied AI',
  'Data tools',
  'Open to internships',
];

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function HeroMarquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="hero-marquee" aria-label="Portfolio focus areas">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

type LightboxImage = {
  src: string;
  alt: string;
  projectName: string;
};

type RevealStyle = CSSProperties & {
  '--reveal-delay': string;
};

function ProjectVisual({ project, onImageOpen }: { project: Project; onImageOpen: (image: LightboxImage) => void }) {
  if (project.images.length > 0) {
    return (
      <div className="project-visual project-visual--image" aria-label={`${project.name} screenshots`}>
        <button
          className="image-open-button image-open-button--main"
          type="button"
          onClick={() => onImageOpen({ ...project.images[0], projectName: project.name })}
          aria-label={`Open ${project.images[0].alt} fullscreen`}
        >
          <img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" />
          <span>
            <Maximize2 size={16} aria-hidden="true" />
            View full
          </span>
        </button>
        {project.images.length > 1 ? (
          <div className={`visual-strip visual-strip--count-${project.images.slice(1, 3).length}`}>
            {project.images.slice(1, 3).map((image) => (
              <button
                className="image-open-button"
                key={image.src}
                type="button"
                onClick={() => onImageOpen({ ...image, projectName: project.name })}
                aria-label={`Open ${image.alt} fullscreen`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--mockup" aria-label={`${project.name} interface concept`}>
      <div className="mockup-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="mockup-body">
        <p>{project.mockup?.label}</p>
        <strong>{project.mockup?.title}</strong>
        <div className="mockup-lines">
          {project.mockup?.lines.map((line) => <span key={line}>{line}</span>)}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, onImageOpen }: { project: Project; index: number; onImageOpen: (image: LightboxImage) => void }) {
  return (
    <article
      className={`project-card ${index < 2 ? 'project-card--large' : ''}`}
      style={{ '--reveal-delay': `${Math.min(index * 55, 220)}ms` } as RevealStyle}
    >
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>

      <ProjectVisual project={project} onImageOpen={onImageOpen} />

      <div className="project-footer">
        <div className="tag-list" aria-label={`${project.name} technologies`}>
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {project.links.length > 0 ? (
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.name} ${link.label}`}>
                {link.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ImageLightbox({ image, onClose }: { image: LightboxImage | null; onClose: () => void }) {
  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.classList.add('lightbox-open');
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${image.projectName} screenshot preview`}>
      <button className="image-lightbox__backdrop" type="button" onClick={onClose} aria-label="Close fullscreen preview" />
      <figure className="image-lightbox__panel">
        <button className="image-lightbox__close" type="button" onClick={onClose} aria-label="Close fullscreen preview">
          <X size={20} aria-hidden="true" />
        </button>
        <img src={image.src} alt={image.alt} />
        <figcaption>
          <span className="image-lightbox__title">{image.projectName}</span>
          <span>{image.alt}</span>
        </figcaption>
      </figure>
    </div>
  );
}

function App() {
  const [activeImage, setActiveImage] = useState<LightboxImage | null>(null);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateActiveSection = () => {
      const anchorY = window.scrollY + window.innerHeight * 0.42;
      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return current;
        }

        return section.offsetTop <= anchorY ? sectionId : current;
      }, '');
      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      setActiveSection(isAtPageEnd ? sectionIds[sectionIds.length - 1] : currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Joseph Alejo home">
          <img src="/assets/joseph-retro-mark.webp" alt="" aria-hidden="true" />
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item}
                className={isActive ? 'is-active' : undefined}
                href={`#${sectionId}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {item}
              </a>
            );
          })}
        </nav>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{profile.availability}</p>
            <h1 id="hero-title">{profile.name}</h1>
            <p className="hero-lede">{profile.headline}</p>
            <p className="hero-summary">{profile.summary}</p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#work">
                View Work
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={resumeLinks.pdf} download>
                Download Resume
                <Download size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="proof-grid" aria-label="Portfolio proof points">
              {profile.proofPoints.map((point) => (
                <div key={point.label}>
                  <span>{point.label}</span>
                  <strong>{point.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <aside className="identity-panel">
            <div className="portrait-frame">
              <picture>
                <source media="(max-width: 640px)" srcSet="/assets/joseph-portrait-mobile.webp" />
                <img
                  src="/assets/joseph-portrait.webp"
                  alt="Portrait of Joseph Alejo"
                  width="900"
                  height="900"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="identity-note">
              <span>Based in Tagum, PH</span>
              <p>Building practical student projects across web apps, REST APIs, databases, and applied AI workflows.</p>
            </div>
          </aside>
        </section>

        <HeroMarquee />

        <section id="work" className="content-section work-section" aria-labelledby="work-title">
          <SectionHeader
            eyebrow="Selected work"
            title="Useful web apps and applied AI projects."
            text="Each project focuses on a real workflow: rentals, crop recommendations, safety checks, simulation, sentiment analysis, or data utilities."
          />
          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} onImageOpen={setActiveImage} />
            ))}
          </div>
        </section>

        <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
          <SectionHeader
            eyebrow="Skills"
            title="Capability map, not keyword soup."
            text="A compact view of the tools I use to build, analyze, test, and ship project work."
          />
          <div className="capability-grid">
            {capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index] ?? Code2;
              return (
                <article
                  key={capability.title}
                  className="capability-card"
                  style={{ '--reveal-delay': `${index * 60}ms` } as RevealStyle}
                >
                  <Icon size={22} aria-hidden="true" />
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <div className="tag-list">
                    {capability.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="content-section about-section" aria-labelledby="about-title">
          <div>
            <SectionHeader eyebrow="About" title="Computer science student with practical build habits." />
          </div>
          <div className="about-copy">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Open to software, web, and applied AI internships.</h2>
            <p>
              I’m especially interested in teams building practical tools, data-backed products, or useful AI workflows.
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Email
            </a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden="true" />
              GitHub
            </a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a href={contactLinks.facebook} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Facebook
            </a>
          </div>
        </section>
      </main>
      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </div>
  );
}

export default App;
