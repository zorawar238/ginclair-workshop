import { useEffect } from 'react';
import { ArrowRight, Brain, CodeBlock, Database, LinkedinLogo, InstagramLogo, YoutubeLogo, EnvelopeSimple } from '@phosphor-icons/react';
import './App.css';

function App() {
  // Add scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container grid-bg">
      
      {/* 0. Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <span className="announcement-highlight">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--coral-primary)" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '8px', verticalAlign: 'middle'}}>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Join Our Exclusive Community
            </span>
          </div>
          <div className="announcement-middle">
            <span>• Early bird offers</span>
            <span>• Access to workshops</span>
            <span>• Community perks & more</span>
          </div>
          <div className="announcement-right">
            <button className="btn-primary small-btn">Join Ginhouse &rarr;</button>
            <a href="#" className="learn-more-link">Learn More <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>

      {/* 1. Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="brand-logo">
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-30 50 50)">
                <rect x="15" y="25" width="60" height="22" rx="8" fill="var(--coral-primary)" />
                <rect x="25" y="53" width="60" height="22" rx="8" fill="var(--coral-primary)" />
              </g>
            </svg>
            Ginclair
          </div>
          <div className="nav-links">
            <a href="#" style={{display: 'flex', alignItems: 'center'}}>About Us</a>
            <a href="#" style={{display: 'flex', alignItems: 'center'}}>Explore Paths</a>
            <a href="#" style={{display: 'flex', alignItems: 'center'}}>Campus</a>
            <a href="#" style={{display: 'flex', alignItems: 'center'}}>Careers</a>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Hero Section */}
        <section className="hero container">
          <div className="radial-glow hero-glow"></div>
          <div className="hero-split reveal">
            <div className="hero-content">
              <div className="eyebrow-container">
                <span className="eyebrow dark line-before-after">NOVEMBER 14-15, 2026 &bull; GINHOUSE CAMPUS &amp; VIRTUAL</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', marginBottom: '32px' }}>
                Build Fluency<br />in AI, in Public
              </h1>
              <p className="hero-subtext" style={{ fontSize: '18px', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
                AI DISTILLED is an intensive, 2-day hybrid workshop for non-technical builders. Stop reading think-pieces and spend one weekend building real AI workflows that save you 10+ hours a week.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" style={{ textTransform: 'none', letterSpacing: 'normal' }}>Register for Nov 14</button>
                <button className="btn-secondary" style={{ textTransform: 'none', letterSpacing: 'normal' }}>View Full Curriculum</button>
              </div>
              <div className="hero-social-proof">
                <div className="avatar-stack">
                  <img src="https://i.pravatar.cc/150?img=11" alt="Alumni" />
                  <img src="https://i.pravatar.cc/150?img=12" alt="Alumni" />
                  <img src="https://i.pravatar.cc/150?img=13" alt="Alumni" />
                  <img src="https://i.pravatar.cc/150?img=14" alt="Alumni" />
                </div>
                <p style={{ fontSize: '16px', color: 'var(--ink)' }}>Join 500+ builders from Notion, Canva, and Vercel.</p>
              </div>
            </div>
            <div className="hero-visual reveal delay-200">
              <img src="/ginhouse-logo.png" alt="Ginhouse Logo" className="hero-image" />
            </div>
          </div>
        </section>

        {/* 2.5 Marquee */}
        <div className="marquee-container reveal delay-200">
          <div className="marquee-content">
            <span>AI Distilled</span>
            <span>&bull;</span>
            <span>Ginhouse</span>
            <span>&bull;</span>
            <span>No Coding Required</span>
            <span>&bull;</span>
            <span>Build Workflows</span>
            <span>&bull;</span>
            <span>Save 10+ Hours</span>
            <span>&bull;</span>
            {/* Duplicated for seamless loop */}
            <span>AI Distilled</span>
            <span>&bull;</span>
            <span>Ginhouse</span>
            <span>&bull;</span>
            <span>No Coding Required</span>
            <span>&bull;</span>
            <span>Build Workflows</span>
            <span>&bull;</span>
            <span>Save 10+ Hours</span>
            <span>&bull;</span>
          </div>
        </div>

        {/* 3. Workshop Logistics (New) */}
        <section className="logistics-section container reveal delay-100">
          <div className="logistics-grid">
            <div className="logistics-col">
              <h3>When</h3>
              <p>Nov 14-15, 2026<br/>10:00 AM - 4:00 PM EST</p>
            </div>
            <div className="logistics-col">
              <h3>Where</h3>
              <p>Hybrid: Live at Ginhouse HQ<br/>&amp; Streamed via Zoom</p>
            </div>
            <div className="logistics-col">
              <h3>Who is this for?</h3>
              <p>Designers, Marketers, PMs, and Founders. No coding required.</p>
            </div>
          </div>
        </section>



        {/* 4. Is This For You? */}
        <section className="is-this-for-you container">
          <div className="section-header reveal">
            <span className="eyebrow dark">Curriculum Overview</span>
            <h2 className="section-title">Stop reading. Start building.</h2>
          </div>
          
          <div className="card-grid">
            <div className="flat-card card-dark reveal">
              <img src="/automation_dashboard.jpg" alt="Automation Dashboard UI" className="card-image" />
              <div className="icon-wrapper"><Brain size={32} weight="bold" color="var(--ink)" /></div>
              <h3>Automate Grunt Work</h3>
              <p style={{fontSize: '18px', flex: 1, marginBottom: '24px'}}>Stop losing hours to data entry and reporting. We'll build deterministic pipelines that handle the busywork so you can focus on strategy.</p>
              <a href="#" className="card-link">Read the module &rarr;</a>
            </div>
            
            <div className="flat-card card-cream reveal delay-100">
              <img src="/agent_node_graph.jpg" alt="Custom Agent Node Graph" className="card-image" />
              <div className="icon-wrapper"><Database size={32} weight="bold" color="var(--ink)" /></div>
              <h3>Build Custom AI Agents</h3>
              <p style={{fontSize: '18px', flex: 1, marginBottom: '24px'}}>Deploy task-specific AI agents that act as your virtual interns. Give them tools, API access, and logic to execute complex multi-step workflows.</p>
              <a href="#" className="card-link">Read the module &rarr;</a>
            </div>
            
            <div className="flat-card card-pink reveal delay-200">
              <img src="/llm_prompt_visual.jpg" alt="Abstract LLM Prompting Visual" className="card-image" />
              <div className="icon-wrapper"><CodeBlock size={32} weight="bold" color="var(--ink)" /></div>
              <h3>Master Advanced Prompting</h3>
              <p style={{fontSize: '18px', flex: 1, marginBottom: '24px'}}>Move beyond ChatGPT basics. Learn chain-of-thought, zero-shot framing, and how to reliably constrain outputs for production environments.</p>
              <a href="#" className="card-link">Read the module &rarr;</a>
            </div>
          </div>
        </section>

        {/* 5. Meet The Instructor (Split panel) */}
        <section className="instructor-section">
          <div className="container instructor-split">
            <div className="instructor-info reveal">
              <span className="eyebrow light">The Instructor</span>
              <h2 className="section-title">Guided by builders.</h2>
              <p>
                We don't do pure theory. David Chen, Head of AI at Ginclair, will walk you through the exact production architecture used to scale ML systems to millions of users. 
              </p>
              <button className="btn-ghost">Read Full Bio</button>
            </div>
            <div className="reveal delay-200">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60" 
                alt="David Chen" 
                className="instructor-image"
              />
            </div>
          </div>
        </section>

        {/* 6. Agenda Transition */}
        <section className="agenda-section">
          <div className="container">
            <div className="section-header reveal" style={{textAlign: 'center', margin: '0 auto 64px'}}>
              <h2 className="section-title">What You Will Learn</h2>
            </div>
            
            <div className="agenda-grid-sym">
              <div className="agenda-card-vertical reveal">
                <div className="agenda-content">
                  <h3>Module 01: Prompt Engineering &amp; LLM Foundations</h3>
                  <p>Master the syntax of AI. Learn zero-shot, few-shot, and chain-of-thought prompting to consistently generate high-quality outputs instead of generic fluff.</p>
                </div>
                <div className="pill-row">
                  <span className="pill-tag">2 HOURS</span>
                  <span className="pill-tag">LIVE</span>
                </div>
                <div className="agenda-outcome">
                  <span className="outcome-label">Outcome:</span>
                  <span className="outcome-text">Build a library of 10+ reliable prompts for your specific role.</span>
                </div>
              </div>
              
              <div className="agenda-card-vertical reveal delay-100">
                <div className="agenda-content">
                  <h3>Module 02: RAG &amp; Local Knowledge Bases</h3>
                  <p>Stop relying on generic internet knowledge. We'll show you how to connect an LLM to your own PDFs, notion docs, and internal wikis securely.</p>
                </div>
                <div className="pill-row">
                  <span className="pill-tag">3 HOURS</span>
                  <span className="pill-tag">HANDS-ON</span>
                </div>
                <div className="agenda-outcome">
                  <span className="outcome-label">Outcome:</span>
                  <span className="outcome-text">Deploy a private AI assistant trained on your own proprietary data.</span>
                </div>
              </div>
              
              <div className="agenda-card-vertical reveal delay-200">
                <div className="agenda-content">
                  <h3>Module 03: Autonomous Pipelines &amp; Agents</h3>
                  <p>Connect tools together. You'll use platforms like Zapier, Make, and Claude to build systems that trigger actions, write drafts, and send emails automatically.</p>
                </div>
                <div className="pill-row">
                  <span className="pill-tag">2 HOURS</span>
                  <span className="pill-tag">AUTOMATION</span>
                </div>
                <div className="agenda-outcome">
                  <span className="outcome-label">Outcome:</span>
                  <span className="outcome-text">Publish 2 fully automated workflows that run without human intervention.</span>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '64px' }}>
              <button className="btn-secondary">See Full Curriculum</button>
            </div>
          </div>
        </section>

        {/* 7. The Peak (Hands-on) */}
        <section className="the-peak">
          <div className="container">
            <h2 className="section-title light reveal" style={{textAlign: 'center', marginBottom: '64px'}}>By Sunday evening.</h2>
            <div className="peak-grid">
              <div className="stat-callout reveal">
                <div className="stat-num">3</div>
                <div className="stat-label">Deployed AI Agents</div>
              </div>
              <div className="stat-callout reveal delay-100">
                <div className="stat-num">1</div>
                <div className="stat-label">Custom RAG Pipeline</div>
              </div>
              <div className="stat-callout reveal delay-200">
                <div className="stat-num">15+</div>
                <div className="stat-label">Hours Saved Weekly</div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pricing Spotlight */}
        <section className="pricing-section">
          <div className="radial-glow pricing-glow"></div>
          <div className="container reveal">
            <div className="pricing-card">
              <div className="pricing-badge" style={{color: 'var(--coral-muted)', fontWeight: 'bold', fontSize: '14px', letterSpacing: '0.05em', marginBottom: '24px'}}>COHORT STARTS NOV 14 &bull; 12 SEATS REMAINING</div>
              <h2 className="section-title" style={{color: 'var(--ink)'}}>One weekend.<br/>Complete fluency.</h2>
              
              <div className="price-container">
                <span className="price-strike">$499</span>
                <span className="price-real" style={{color: 'var(--ink)'}}>$249</span>
              </div>
              
              <button className="btn-primary" style={{width: '100%', maxWidth: '380px', fontSize: '1.1rem', padding: '18px 24px', marginTop: '16px'}}>Secure Your Seat <ArrowRight weight="bold" /></button>
            </div>
          </div>
        </section>

        {/* 8.5 Newsletter Section */}
        <section className="newsletter-section">
          <div className="container reveal">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <h2>Stay With The Fl<span className="text-coral">ow</span></h2>
                <p>Subscribe to Ginclair Flow and get practical insights, industry trends, and hands-on tools that make learning a habit - not a hassle.</p>
                <form className="newsletter-form">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Enter Email" />
                  <button type="submit" className="btn-gradient">Subscribe Now</button>
                </form>
              </div>
              <div className="newsletter-visual">
                <img src="/newsletter-envelope.jpg" alt="Newsletter Envelope" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer complex-footer">
        <div className="container">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-brand-social">
              <div className="ginclair-logo-full">
                <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g transform="rotate(-30 50 50)">
                    <rect x="15" y="25" width="60" height="22" rx="8" fill="var(--coral-primary)" />
                    <rect x="25" y="53" width="60" height="22" rx="8" fill="var(--coral-primary)" />
                  </g>
                </svg>
                <span>Ginclair</span>
              </div>
              <div className="social-icons">
                <a href="#" className="social-btn"><LinkedinLogo weight="fill" size={20} /></a>
                <a href="#" className="social-btn"><InstagramLogo size={20} /></a>
                <a href="#" className="social-btn"><YoutubeLogo weight="fill" size={20} /></a>
                <a href="#" className="social-btn"><EnvelopeSimple size={20} /></a>
              </div>
            </div>
            <div className="footer-newsletter-inline">
              <h3>Stay With The Flow</h3>
              <p>Subscribe to Ginclair Flow and get practical insights, industry trends, and hands-on tools that make learning a habit - not a hassle.</p>
              <form className="newsletter-form-inline">
                <input type="email" placeholder="Enter Email" required />
                <button type="submit" className="btn-gradient" style={{marginTop: 0}}>Subscribe Now</button>
              </form>
            </div>
          </div>

          <div className="footer-divider"></div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-col">
              <p className="copyright-text">© 2026 Ginclair Pvt. Ltd. All Rights Reserved</p>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Refund Policy</a>
            </div>
            <div className="footer-col">
              <h4>Products</h4>
              <a href="#">Ginspace</a>
              <a href="#">Ginlearn</a>
              <a href="#">Ginhouse</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
              <a href="#">Help</a>
            </div>
            <div className="footer-col">
              <h4>Reach Out</h4>
              <a href="#">Upskill Your Team</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 10. Sticky Mobile CTA Bar */}
      <div className="sticky-cta-bar">
        <div className="seats-left">12 seats left</div>
        <button className="btn-primary">Register</button>
      </div>

    </div>
  );
}

export default App;
