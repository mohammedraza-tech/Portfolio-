import ScrollReveal from "@/components/ScrollReveal";
import RotatingRole from "@/components/RotatingRole";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="header-contact" href="#contact">Let&apos;s Talk</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <h1 className="hero-name" aria-label="Mohammed Raza">Mohammed Ra<span aria-hidden="true" className="name-joined">za</span></h1>
          <RotatingRole />
          <p className="intro">I build digital experiences with sharp design, fluid motion, and purposeful code.</p>
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#work">Portfolio</a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <ScrollReveal>
          <p className="eyebrow" data-reveal>01 / About</p>
          <div className="about-layout">
            <h2 data-reveal>Built fast.<br /><em>Crafted with care.</em></h2>
            <div className="about-copy">
              <p className="section-copy" data-reveal>I&apos;m a full-stack developer and AI automation builder who moves fast without cutting corners. I lean into AI tools to work across stacks and sectors, turning ideas into working software quickly rather than sitting in planning forever.</p>
              <p className="section-copy" data-reveal>I care about the details that make something feel considered — motion, interaction, and the small moments that separate &apos;built&apos; from &apos;crafted.&apos;</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section work" id="work">
        <ScrollReveal>
          <p className="eyebrow work-eyebrow" data-reveal>02 / Selected Work</p>
          <div className="work-heading">
            <div>
              <h2 data-reveal>Featured <em>projects</em></h2>
              <p className="work-intro" data-reveal>Each project is shaped with intention,<br className="work-intro-break" /> from first concept to final interaction.</p>
            </div>
            <a className="work-view-all" href="#projects" data-reveal>View All</a>
          </div>
          <div className="project-grid" id="projects">
            <article className="project-card" data-reveal><span>01</span><h3>Project One</h3><p>Brand experience · 2026</p></article>
            <article className="project-card" data-reveal><span>02</span><h3>Project Two</h3><p>Interactive website · 2026</p></article>
            <article className="project-card" data-reveal><span>03</span><h3>Project Three</h3><p>Digital product · 2026</p></article>
            <article className="project-card" data-reveal><span>04</span><h3>Project Four</h3><p>Creative development · 2026</p></article>
          </div>
        </ScrollReveal>
      </section>

      <section className="section disciplines" id="disciplines">
        <ScrollReveal>
          <h2 className="disciplines-heading" data-reveal>03 / Our Core Disciplines</h2>
          <div className="discipline-grid">
            <details className="discipline-card" data-reveal>
              <summary className="discipline-summary">
                <span className="discipline-card-top"><span>01</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m11 7-9 9 9 9M21 7l9 9-9 9M19 4l-6 24" /></svg></span>
                <span className="discipline-card-copy"><span className="discipline-title">Full-Stack Development</span><span className="discipline-subtitle">Complete web products, from polished interfaces to dependable systems.</span><span className="discipline-hint"><span className="hint-closed">Read more +</span><span className="hint-open">Show less −</span></span></span>
              </summary>
              <p className="discipline-details">I turn ideas into complete web products, shaping both the interface people use and the systems behind it. From responsive experiences to APIs and integrations, I focus on clarity, performance, and a polished finish.</p>
            </details>
            <details className="discipline-card" data-reveal>
              <summary className="discipline-summary">
                <span className="discipline-card-top"><span>02</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M16 2l3.4 10.6L30 16l-10.6 3.4L16 30l-3.4-10.6L2 16l10.6-3.4L16 2Z" /><path d="m25 2 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" /></svg></span>
                <span className="discipline-card-copy"><span className="discipline-title">AI Automation</span><span className="discipline-subtitle">Practical AI workflows that simplify work and help teams move faster.</span><span className="discipline-hint"><span className="hint-closed">Read more +</span><span className="hint-open">Show less −</span></span></span>
              </summary>
              <p className="discipline-details">I build practical AI-powered workflows that remove repetitive steps and help teams move faster. By connecting tools, data, and human decisions, I turn promising ideas into useful systems that fit real work.</p>
            </details>
            <details className="discipline-card" data-reveal>
              <summary className="discipline-summary">
                <span className="discipline-card-top"><span>03</span><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M3 16c4-7 8-10 13-10s9 3 13 10c-4 7-8 10-13 10S7 23 3 16Z" /><circle cx="16" cy="16" r="4" /></svg></span>
                <span className="discipline-card-copy"><span className="discipline-title">Motion &amp; Interaction</span><span className="discipline-subtitle">Purposeful movement and details that make digital experiences feel considered.</span><span className="discipline-hint"><span className="hint-closed">Read more +</span><span className="hint-open">Show less −</span></span></span>
              </summary>
              <p className="discipline-details">I use motion to guide attention, explain change, and make products feel responsive. Every transition, hover, and scroll moment is considered so the experience feels engaging without getting in the way.</p>
            </details>
          </div>
        </ScrollReveal>
      </section>

      <section className="section faq" id="faq">
        <ScrollReveal>
          <div className="faq-layout">
            <div className="faq-intro">
              <p className="eyebrow" data-reveal>04 / FAQs</p>
              <h2 data-reveal>Good questions.<br /><em>Clear answers.</em></h2>
            </div>
            <div className="faq-list" data-reveal>
              <details className="faq-item">
                <summary><span className="faq-number">01</span><span className="faq-question">What kind of projects can you help with?</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>I build websites and web applications, AI automations, and thoughtful motion and interaction. We can start with a clear brief or shape the right solution together from an early idea.</p>
              </details>
              <details className="faq-item">
                <summary><span className="faq-number">02</span><span className="faq-question">How do pricing and payments work?</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>After we define the scope, I share a proposal with the deliverables, price, milestones, and payment schedule. Any additional work is discussed and agreed before it is billed.</p>
              </details>
              <details className="faq-item">
                <summary><span className="faq-number">03</span><span className="faq-question">When will my project be delivered?</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>Delivery depends on the project&apos;s complexity and what is ready at kickoff. Before work begins, I set out a realistic timeline with review points and keep you updated as each milestone is reached.</p>
              </details>
              <details className="faq-item">
                <summary><span className="faq-number">04</span><span className="faq-question">Can the scope change during the project?</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>Yes. If priorities change, we review the effect on the work, cost, and timeline, then agree on the next step before I move forward.</p>
              </details>
              <details className="faq-item">
                <summary><span className="faq-number">05</span><span className="faq-question">What happens after launch?</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>I hand over the agreed deliverables and access needed to use them. Launch support, documentation, and ongoing improvements can be planned as part of the project.</p>
              </details>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <footer className="section footer" id="contact">
        <p className="eyebrow">05 / Get in touch</p>
        <div className="footer-main">
          <h2>Have a project<br /><em>in mind?</em></h2>
          <a className="footer-talk" href="mailto:mohammedraza.tech@gmail.com">Let&apos;s Talk</a>
        </div>
        <div className="footer-email-row"><a className="footer-email" href="mailto:mohammedraza.tech@gmail.com">mohammedraza.tech@gmail.com<span aria-hidden="true">↗</span></a></div>
        <div className="footer-socials" aria-label="Connect with Mohammed Raza">
          <a className="footer-social-link" href="https://github.com/mohammedraza-tech" target="_blank" rel="noopener noreferrer" aria-label="Mohammed Raza on GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.08.67-3.73-1.31-3.73-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .17 1.75-.18 2.18-.56.1-.72.39-1.2.71-1.48-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.11-.28-.49-1.4.11-2.91 0 0 .93-.3 3.05 1.14a10.55 10.55 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.6 1.51.22 2.63.11 2.91.71.78 1.14 1.77 1.14 2.98 0 4.26-2.59 5.2-5.06 5.47.4.35.75 1.02.75 2.06v3.06c0 .3.21.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
            <span>GitHub</span>
          </a>
          <span className="footer-social-link footer-social-pending" aria-label="LinkedIn profile link pending">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.12 18.75H4.99V9h3.13v9.75ZM6.55 7.67a1.82 1.82 0 1 1 0-3.64 1.82 1.82 0 0 1 0 3.64Zm12.2 11.08h-3.12V14c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.51v4.83H9.11V9h3v1.33h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.64 2.08 3.64 4.78v5.26Z" /></svg>
            <span>LinkedIn</span>
          </span>
          <span className="footer-social-link footer-social-pending" aria-label="Vercel profile link pending">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2 24 22H0L12 2Z" /></svg>
            <span>Vercel</span>
          </span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mohammed Raza</span>
          <nav aria-label="Footer policies">
            <a href="/privacy">Privacy Policy</a>
            <a href="/payment-policy">Payment Terms</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

