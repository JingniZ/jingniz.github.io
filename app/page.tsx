const research = [
  {
    number: "01",
    status: "Under review at Research Policy",
    title:
      "Driving Innovation: The Policy Tools Powering Electric Vehicle Technological Inventions",
    authors: "with David Popp",
    summary:
      "Examines how fuel-economy standards, consumer incentives, adoption targets, and public R&D shape firm-level EV and battery innovation across 19 countries.",
    detail:
      "Electric vehicles (EVs) are crucial for cutting transportation emissions, yet the policy drivers of EV innovation remain underexplored. This study analyzes firm-level panel data on EV and battery patents, covering more than 4,000 firms across 19 countries from 2010 to 2021, to assess how these policy tools and their interactions in different time horizons influence innovative activity. We test the effects of individual policy instruments that either raise demand for EVs or support the development of EV technologies. Stringent fuel-economy standards, financial incentives, adoption targets, and public R&D investments each significantly increase patenting in EV and battery technologies. Moreover, long-term EV targets amplify the innovative impact of public R&D and standards while diminishing the marginal effect of short-term price signals. The results suggest that governments can accelerate clean automotive innovation by combining long-term adoption commitments with sustained R&D investment or strong performance standards, and by managing these instruments as a coordinated policy portfolio rather than as separate tools. The study contributes cross-country, firm-level evidence that links policy design to the direction of clean technology innovation.",
    links: [
      { label: "NBER Working Paper", href: "https://www.nber.org/papers/w34763" },
      {
        label: "CESifo Working Paper",
        href: "https://www.ifo.de/DocDL/cesifo1_wp12421.pdf",
      },
    ],
  },
  {
    number: "02",
    status: "Working paper",
    title:
      "Electric Vehicle Road-Use Tax Design and the Fiscal Sustainability of Electrification",
    authors: "",
    summary:
      "Develops a state-level benchmark for EV road-use charges that connects recurring road-service expenditure to the inherited role of motor-fuel taxation.",
    detail:
      "Rapid electric-vehicle (EV) adoption weakens the motor-fuel-tax base while state road-service obligations persist. This study asks how governments can adapt a legacy revenue system when technological change erodes its tax base but not the public services it finances. I develop a state-specific service-finance continuity framework that separates recurring road-service costs, historical motor-fuel-tax responsibility, and EV travel as a transition pressure. Using a balanced panel of 50 states from 2016 through 2024, the study calibrates an EV mileage benchmark by multiplying recurring road cost per vehicle-mile by each state's fixed 2016-2018 motor-fuel-tax share of highway receipts. Correlated random-effects models distinguish annual within-state changes from persistent interstate differences in both components. The benchmark averages 0.705 real 2020 cents per mile and ranges from 0.054 to 3.396 cents across state-years. Variation reflects different combinations of service cost and financing responsibility. Federal-aid intensity is negatively associated with the motor-fuel-tax share, while persistent truck concentration and poor bridge condition show the most consistent positive associations with recurring road costs. The central implication is that the technology eroding the tax base need not determine the replacement rate. EV growth intensifies the need for a new payment channel, but service costs and financing portfolios set the benchmark. After accounting for network, infrastructure, and financing conditions, the EV-travel proxy shows no statistically distinguishable independent association with either component. A later responsibility period lowers the mean to 0.645 cents but preserves the broad interstate pattern. The results challenge a uniform response and support state-specific calibration with federal coordination on reporting, privacy, and interstate travel. More broadly, the framework offers a strategy for adapting legacy revenue systems when technological change erodes a tax base before the public obligations it supports disappear.",
    links: [],
  },
  {
    number: "03",
    status: "Working paper",
    title:
      "When Relationships Translate into Outcomes: Relational Governance in Third-Party Implementation",
    authors: "with Yiying Chen",
    summary:
      "Studies when relational governance improves policy achievement in public programs delivered through third-party organizations.",
    detail:
      "How do relationships with market intermediaries shape program delivery when government neither contracts with nor directly controls the organizations responsible for implementation? Existing research largely examines contemporaneous relational conditions within public contracts. We instead theorize accumulated relational experience as an informal governance resource in regulatory and certification-based programs. Repeated agency-intermediary exchange should improve delivery by developing program-specific knowledge, mutual expectations, and communication routines, with greater benefits when formal governance is least able to address implementation demands. We test this argument using an installer-quarter panel of 890 firms participating in New York State solar incentive programs from 2000 to 2025 and a shift-share instrumental-variable design. Accumulated agency-specific experience increases subsequent program-supported capacity; the effect is stronger when projects require more sustained coordination, provider markets are more concentrated, and intermediaries serve more disadvantaged communities. The findings extend relational governance beyond contracting, demonstrate the importance of measuring relationships cumulatively, and identify when accumulated relationships make a larger contribution to third-party implementation.",
    links: [],
  },
];

const teaching = [
  {
    term: "Summer 2026 · Summer 2024",
    course: "Public Administration and Democracy",
    role: "Discussion-section instructor",
    description:
      "Led daily sections using simulations and structured activities to support inclusive participation and applied understanding.",
  },
  {
    term: "Fall 2026 · Fall 2024",
    course: "Economics for Public Decisions",
    role: "Teaching assistant · Guest lecturer",
    description:
      "Supporting course instruction and student learning in public-sector economic analysis, including an independent guest lecture on environmental externalities.",
  },
  {
    term: "Spring 2026",
    course: "Economics for Policy Analysis",
    level: "Undergraduate",
    role: "Teaching assistant · Guest lecturer",
    description:
      "Delivered undergraduate lectures on price floors and price ceilings and supported student learning in applied microeconomics.",
  },
  {
    term: "Spring 2025",
    course: "Environmental Economics",
    role: "Teaching assistant · Guest lecturer",
    description:
      "Designed and delivered an independent guest lecture on command-and-control environmental policies.",
  },
  {
    term: "Fall 2024",
    course: "Fundamentals of Policy Analysis",
    role: "Teaching assistant · Guest lecturer",
    description:
      "Delivered an independent guest lecture on environmental externalities in policy analysis.",
  },
  {
    term: "Fall 2023",
    course: "International Management and Leadership",
    role: "Teaching assistant · Guest lecturer",
    description:
      "Designed and delivered an independent guest lecture on organizational budgeting.",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jingni Zhang, home">
          <img
            className="wordmark-photo"
            src="/jingni-zhang-portrait.jpg"
            alt=""
            aria-hidden="true"
          />
          <span>Jingni Zhang</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#teaching">Teaching</a>
          <a className="nav-cv" href="/jingni-zhang-cv.pdf" download>
            CV
          </a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Public policy · clean technology · financial management</p>
            <h1>
              Policy shapes technology.
              <span>Technology reshapes institutions.</span>
            </h1>
            <p className="hero-intro">
              I am a Ph.D. candidate at Syracuse University studying how
              governments encourage clean-technology innovation and redesign
              fiscal institutions as electric vehicles transform transportation.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">
                Explore my research
              </a>
              <a
                className="button button-secondary"
                href="mailto:jzhan354@syr.edu"
                aria-label="Email Jingni Zhang"
              >
                jzhan354@syr.edu
              </a>

              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/jingnizhang/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Jingni Zhang on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Research profile">
            <img
              className="hero-portrait"
              src="/jingni-zhang-portrait.jpg"
              alt="Portrait of Jingni Zhang"
            />
            <div className="hero-card-caption">
              <div className="hero-card-copy">
                <p>Ph.D. in Public Administration &amp; International Affairs</p>
                <strong>Maxwell School, Syracuse University</strong>
              </div>
              <div className="hero-card-meta">
                <span>Syracuse, New York</span>
                <span>2026–27 Job Market</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="about section-shell" id="about">
          <div className="section-kicker">About</div>
          <div className="about-grid">
            <h2>I study the policy architecture behind technological change.</h2>
            <div className="about-copy">
              <p>
                My research sits at the intersection of environmental policy,
                technological innovation, public finance, and the policy process.
                Electric vehicles provide a central case: governments must support
                innovation and adoption while also updating tax systems built around
                gasoline consumption.
              </p>
              <p>
                Across my projects, I combine policy theory with quantitative analysis
                to study how policy portfolios shape invention, how knowledge moves
                across innovation networks, and how public institutions respond when
                emerging technologies unsettle established fiscal arrangements.
              </p>
              <div className="interest-list" aria-label="Research interests">
                <span>Energy policy</span>
                <span>Technology &amp; innovation</span>
                <span>Electric vehicles</span>
                <span>Tax design</span>
                <span>Financial management</span>
                <span>Policy diffusion</span>
              </div>
            </div>
          </div>
        </section>

        <section className="research section-shell" id="research">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Selected research</div>
              <h2>Work on innovation, institutions, and implementation</h2>
            </div>
            <a
              className="text-link"
              href="https://scholar.google.com/citations?hl=en&user=c15b4VgAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar ↗
            </a>
          </div>

          <div className="research-list">
            {research.map((paper) => (
              <article className="paper" key={paper.number}>
                <div className="paper-number">{paper.number}</div>
                <div className="paper-body">
                  <p className="paper-status">{paper.status}</p>
                  <h3>{paper.title}</h3>
                  {paper.authors ? <p className="paper-authors">{paper.authors}</p> : null}
                  <p className="paper-summary">{paper.summary}</p>
                  <details>
                    <summary>Abstract</summary>
                    <p>{paper.detail}</p>
                  </details>
                  {paper.links.length ? (
                    <div className="paper-links">
                      {paper.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-band" aria-labelledby="projects-title">
          <div className="section-shell projects-inner">
            <div>
              <div className="section-kicker light-kicker">Research pipeline</div>
              <h2 id="projects-title">Works in progress</h2>
            </div>
            <div className="project-cards">
              <article>
                <span>Fiscal adaptation</span>
                <h3>Electric Vehicle and State Gasoline Tax Revenue in the United States</h3>
                <p>with Pengju Zhang</p>
              </article>
              <article>
                <span>Knowledge networks</span>
                <h3>Who Drives Electric Vehicle Knowledge? Government Support, Spillovers, and Innovation Networks</h3>
                <p>Dissertation project</p>
              </article>
            </div>
          </div>
        </section>

        <section className="teaching section-shell" id="teaching">
          <div className="section-heading teaching-heading">
            <div>
              <div className="section-kicker">Teaching</div>
              <h2>Active, applied learning for public affairs</h2>
            </div>
            <p>
              I build inclusive classrooms where students draw on their varied backgrounds
              and experiences to apply policy concepts, examine competing values, and test
              ideas through structured activities.
            </p>
          </div>
          <div className="teaching-grid">
            {teaching.map((item) => (
              <article className="teaching-card" key={`${item.term}-${item.course}`}>
                <div className="teaching-card-topline">
                  <p className="teaching-term">{item.term}</p>
                  {item.level ? <span className="teaching-level">{item.level}</span> : null}
                </div>
                <h3>{item.course}</h3>
                <p className="teaching-role">{item.role}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="recognition" aria-label="Selected recognition">
          <div className="recognition-number">2025</div>
          <div>
            <p>Selected recognition</p>
            <h2>Best Poster Award</h2>
            <span>Association for Budgeting &amp; Financial Management Annual Conference</span>
          </div>
        </section>

        <footer className="footer">
          <div>
            <p className="section-kicker light-kicker">Let&apos;s connect</p>
            <h2>Interested in clean-technology policy and public finance?</h2>
          </div>
          <div className="footer-links">
            <a href="mailto:jzhan354@syr.edu">jzhan354@syr.edu</a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=c15b4VgAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar ↗
            </a>
            <a href="/jingni-zhang-cv.pdf" download>
              Download CV ↓
            </a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Jingni Zhang</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
