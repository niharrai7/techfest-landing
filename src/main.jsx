import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ChevronDown, Menu, X, Sparkles, Trophy,
  Cpu, Wrench, Users, MapPin, CalendarDays, Play
} from "lucide-react";
import "./styles.css";

const events = [
  { icon: Trophy, title: "Competitions", text: "AI, robotics, coding, engineering and high-stakes challenges.", tag: "01" },
  { icon: Wrench, title: "Workshops", text: "Hands-on learning across 25+ emerging and industry-ready domains.", tag: "02" },
  { icon: Cpu, title: "Exhibitions", text: "Step into robotics, space, mobility, AI and frontier technology.", tag: "03" },
  { icon: Users, title: "Lectures", text: "Ideas and journeys from people shaping the world of tomorrow.", tag: "04" }
];

function App() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <nav className="nav">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">TF</span>
          <span>TECHFEST <small>IIT BOMBAY</small></span>
        </a>
        <div className={`nav-links ${open ? "show" : ""}`}>
          <a href="#experience" onClick={close}>Experience</a>
          <a href="#events" onClick={close}>Events</a>
          <a href="#why" onClick={close}>Why Techfest</a>
          <a href="#visit" onClick={close}>Visit</a>
          <a className="nav-cta" href="https://techfest.org" target="_blank" rel="noreferrer">Register <ArrowUpRight size={15}/></a>
        </div>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-content">
            <div className="eyebrow"><span className="pulse"/> 30TH EDITION · 16—18 DEC 2026</div>
            <h1>AN<br/><em>AETHERIAL</em><br/>RENAISSANCE<span className="dot">.</span></h1>
            <p className="hero-copy">
              Where curiosity becomes capability. Three days of science,
              technology, competition and ideas at IIT Bombay.
            </p>
            <div className="hero-actions">
              <a className="primary" href="https://techfest.org" target="_blank" rel="noreferrer">
                Enter Techfest <ArrowUpRight size={18}/>
              </a>
              <a className="secondary" href="#experience"><Play size={16}/> Explore the experience</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15}/> IIT Bombay · Mumbai</span>
              <span><CalendarDays size={15}/> 16—18 December 2026</span>
            </div>
          </div>
          <div className="hero-side">SCIENCE / TECHNOLOGY / HUMANITY</div>
          <div className="scroll-cue"><ChevronDown size={18}/> SCROLL TO DISCOVER</div>
        </section>

        <section className="ticker" aria-label="Techfest highlights">
          <div>₹1 CRORE+ PRIZE POOL</div><span>✦</span><div>25+ WORKSHOP DOMAINS</div><span>✦</span>
          <div>AI · ROBOTICS · SPACE · ENGINEERING</div><span>✦</span><div>FREE COMPETITION REGISTRATION</div>
        </section>

        <section className="intro section" id="experience">
          <div className="section-kicker">01 / THE EXPERIENCE</div>
          <div>
            <h2>Don't just watch<br/><span>the future.</span><br/>Build it.</h2>
            <p className="lead">
              Techfest is a meeting point for students, builders, researchers,
              creators and the technologies shaping tomorrow. Come to compete.
              Stay to discover. Leave with something you built.
            </p>
          </div>
        </section>

        <section className="event-grid section" id="events">
          <div className="section-kicker">02 / WHAT AWAITS</div>
          <div className="cards">
            {events.map(({icon: Icon, title, text, tag}) => (
              <article className="event-card" key={title}>
                <div className="card-top"><span>{tag}</span><Icon size={25}/></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow"><ArrowUpRight size={17}/></span>
              </article>
            ))}
          </div>
        </section>

        <section className="manifesto section" id="why">
          <div className="manifesto-number">03</div>
          <div className="manifesto-copy">
            <div className="section-kicker">THE MANIFESTO</div>
            <h2>Curiosity is<br/><em>our currency.</em></h2>
            <p>
              Every breakthrough starts with a question. Every question needs
              someone willing to chase it. Techfest brings that energy together
              — across disciplines, campuses and countries.
            </p>
            <div className="stats">
              <div><strong>30</strong><span>EDITIONS</span></div>
              <div><strong>1L+</strong><span>REACH</span></div>
              <div><strong>25+</strong><span>DOMAINS</span></div>
            </div>
          </div>
        </section>

        <section className="cta section" id="visit">
          <div className="cta-glow"/>
          <div className="section-kicker">04 / YOUR TURN</div>
          <h2>Make your<br/><em>mark.</em></h2>
          <p>16—18 December 2026 · IIT Bombay</p>
          <a className="primary large" href="https://techfest.org" target="_blank" rel="noreferrer">
            Register for Techfest <ArrowUpRight size={20}/>
          </a>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">TF</span><span>TECHFEST <small>IIT BOMBAY</small></span></div>
        <p>30th Edition · An Aetherial Renaissance</p>
        <a href="https://techfest.org" target="_blank" rel="noreferrer">techfest.org <ArrowUpRight size={14}/></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
