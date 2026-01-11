"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const theme = darkMode
    ? {
        bg: "#0B1F3F",
        text: "#D0E6FF",
        secondary: "#123963",
        accent: "#1E90FF",
        card: "#142D5A",
      }
    : {
        bg: "#DCEEFB",
        text: "#0B1F3F",
        secondary: "#A3C9FF",
        accent: "#1E90FF",
        card: "#FFFFFF",
      };

  return (
    <main style={{ ...styles.page, backgroundColor: theme.bg, color: theme.text }}>
      {/* HEADER */}
      <header style={{ ...styles.header, backgroundColor: theme.bg, color: theme.text }}>
        <div style={styles.navContainer}>
          {/* LOGO */}
          <div style={styles.logoContainer}>
            <div style={styles.logoCircle}>
              <Image src="/LOGO.webp" alt="Logo" width={40} height={40} style={{ borderRadius: "50%" }} />
            </div>
            <div style={styles.logoText}>
              <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "700" }}>TOP NOTCH</h2>
              <small style={{ fontSize: "0.8rem", color: theme.text }}>Academic Excellence</small>
            </div>
          </div>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDarkMode}
            style={{
              marginRight: "15px",
              padding: "8px 12px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: theme.secondary,
              color: theme.text,
              fontWeight: "600",
            }}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {/* NAVIGATION */}
          {isMobile ? (
            <>
              <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                <div style={{ ...styles.bar, backgroundColor: theme.text }}></div>
                <div style={{ ...styles.bar, backgroundColor: theme.text }}></div>
                <div style={{ ...styles.bar, backgroundColor: theme.text }}></div>
              </div>

              {menuOpen && (
                <nav style={{ ...styles.navMobile, backgroundColor: theme.secondary }}>
                  <a href="#services" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>Services</a>
                  <a href="#about" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>About Us</a>
                  <a href="#howitworks" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>How It Works</a>
                  <a href="#testimonials" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>Testimonials</a>
                  <a href="#faq" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>FAQs</a>
                  <a href="#contact" style={{ ...styles.navLink, color: theme.text }} onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
              )}
            </>
          ) : (
            <nav style={styles.nav}>
              <a href="#services" style={{ ...styles.navLink, color: theme.text }}>Services</a>
              <a href="#about" style={{ ...styles.navLink, color: theme.text }}>About Us</a>
              <a href="#howitworks" style={{ ...styles.navLink, color: theme.text }}>How It Works</a>
              <a href="#testimonials" style={{ ...styles.navLink, color: theme.text }}>Testimonials</a>
              <a href="#faq" style={{ ...styles.navLink, color: theme.text }}>FAQs</a>
              <a href="#contact" style={{ ...styles.navLink, color: theme.text }}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section style={{ ...styles.hero, backgroundColor: theme.accent, color: "#fff" }}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Academic Writing & Research Services</h1>
          <p style={styles.subtitle}>
            At TopNotch Academia, we transform complex ideas into perfectly crafted academic and research papers tailored just for you.
            Our seasoned experts ensure originality, precision, and timely delivery. Join hundreds of students achieving top grades and academic success.
          </p>
          <div style={styles.buttons}>
            <a href="https://wa.me/254799890080" target="_blank" style={styles.heroBtnWhite}>WhatsApp Us</a>
            <a href="mailto:Topnotchacademia057@gmail.com" style={styles.heroBtnWhite}>Email Us</a>
          </div>
          <div style={styles.heroImages}>
            <Image src="/happystudents.PNG" alt="Happy student" width={250} height={150} style={{ borderRadius: "12px" }} />
            <Image src="/Graduation.avif" alt="Students celebrating" width={250} height={150} style={{ borderRadius: "12px" }} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ ...styles.services, backgroundColor: theme.secondary }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Our Services</h2>
        <div style={styles.servicesGrid}>
          <div style={{ ...styles.serviceCard, backgroundColor: theme.card }}>
            <h3 style={{ ...styles.cardTitle, color: theme.accent }}>Non-Technical Services</h3>
            <ul style={{ ...styles.list, color: theme.text }}>
              <li>Mathematics & Calculus</li>
              <li>Economics</li>
              <li>Accounting & Finance</li>
              <li>English & Literature</li>
              <li>Biology</li>
              <li>History & Arts</li>
              <li>Business Related Tasks</li>
              <li>Education Related Tasks</li>
              <li>Coursework & Assignments</li>
            </ul>
          </div>
          <div style={{ ...styles.serviceCard, backgroundColor: theme.card }}>
            <h3 style={{ ...styles.cardTitle, color: theme.accent }}>Technical Services</h3>
            <ul style={{ ...styles.list, color: theme.text }}>
              <li>Database Management</li>
              <li>IT & Networking</li>
              <li>Web Development & Administration</li>
              <li>Programming Essentials</li>
              <li>Machine Learning</li>
              <li>Data Analysis</li>
              <li>Research & Journal Papers</li>
              <li>Plagiarism Detection & Removal</li>
              <li>Technical Documentation</li>
            </ul>
          </div>
        </div>
        <p style={{ ...styles.note, color: theme.text }}>
          ✔ We provide authentic, original, plagiarism-free papers delivered on time at affordable rates.
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ ...styles.about, backgroundColor: theme.bg }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.accent }}>About Us</h2>
        <div style={styles.aboutContent}>
          <p style={{ ...styles.aboutText, color: theme.text }}>
            TopNotch Academia is a team of dedicated academic writers and technical experts committed to delivering high-quality, plagiarism-free work.
            We help students achieve academic excellence and boost confidence, offering timely, affordable, and professional assistance tailored to your needs.
          </p>
          <Image src="/WhatsApp Image 2026-01-10 at 10.55.36 PM.jpeg" alt="Instructor" width={300} height={200} style={{ borderRadius: "12px" }} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" style={{ ...styles.howItWorks, backgroundColor: theme.secondary }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>How It Works</h2>
        <div style={styles.steps}>
          <div style={{ ...styles.step, backgroundColor: theme.card, color: theme.text }}>1️⃣ Contact Us via WhatsApp or Email</div>
          <div style={{ ...styles.step, backgroundColor: theme.card, color: theme.text }}>2️⃣ Discuss Your Requirements</div>
          <div style={{ ...styles.step, backgroundColor: theme.card, color: theme.text }}>3️⃣ Receive Your Customized Work</div>
          <div style={{ ...styles.step, backgroundColor: theme.card, color: theme.text }}>4️⃣ Review & Feedback</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" style={{ ...styles.testimonials, backgroundColor: theme.bg }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.accent }}>Testimonials</h2>
        <div style={styles.testimonialGrid}>
          <div style={{ ...styles.testimonialCard, backgroundColor: theme.secondary, color: theme.text }}>
            <p>"TopNotch Academia helped me ace my assignments! Highly recommended."</p>
            <span>- Oliver Smith, @ Bethune Cookman University</span>
          </div>
          <div style={{ ...styles.testimonialCard, backgroundColor: theme.secondary, color: theme.text }}>
            <p>"Professional, timely, and reliable service. Excellent research support."</p>
            <span>- Emma Johnson, @ Harvard University</span>
          </div>
          <div style={{ ...styles.testimonialCard, backgroundColor: theme.secondary, color: theme.text }}>
            <p>"Affordable and original work. I will definitely use their services again."</p>
            <span>- Liam Brown, @ Stanford University</span>
          </div>
          <div style={{ ...styles.testimonialCard, backgroundColor: theme.secondary, color: theme.text }}>
            <p>"Thanks to TopNotch Academia, I scored the highest grade in my research paper! The team was professional, quick, and supportive every step of the way."</p>
            <span>- Peter Parker, @ University of Texas at Arlington</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ ...styles.faq, backgroundColor: theme.secondary }}>
        <h2 style={{ ...styles.sectionTitle, color: theme.text }}>Frequently Asked Questions</h2>
        <div style={styles.faqGrid}>
          <div style={{ ...styles.faqCard, backgroundColor: theme.card, color: theme.text }}>
            <strong>Q:</strong> Are your papers plagiarism-free?<br />
            <strong>A:</strong> Yes! All papers are original and checked for plagiarism.
          </div>
          <div style={{ ...styles.faqCard, backgroundColor: theme.card, color: theme.text }}>
            <strong>Q:</strong> How fast can I get my assignment?<br />
            <strong>A:</strong> Depending on complexity, we deliver from 24 hours.
          </div>
          <div style={{ ...styles.faqCard, backgroundColor: theme.card, color: theme.text }}>
            <strong>Q:</strong> Can I request revisions?<br />
            <strong>A:</strong> Absolutely, unlimited revisions until you are satisfied.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ ...styles.footer, backgroundColor: theme.accent }}>
        <p>© 2026 TopNotch Academia. All Rights Reserved.</p>
        <div style={styles.footerLinks}>
          <a href="https://wa.me/254799890080" target="_blank" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/1723724887_whatsapp-hero.jpg" alt="WhatsApp" width={20} height={20} />WhatsApp
          </a>
          <a href="mailto:Topnotchacademia057@gmail.com" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/mail2.png" alt="Email" width={20} height={20} />Email
           </a>
          <a href="https://instagram.com/dummy" target="_blank" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/Instagram_logo_2022.svg" alt="Instagram" width={20} height={20} />Instagram
          </a>
          <a href="https://facebook.com/dummy" target="_blank" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/Facebook-Logosu.png" alt="Facebook" width={20} height={20} />Facebook
          </a>
          <a href="https://tiktok.com/dummy" target="_blank" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/tiktok-app-icon-social-media-logo_277909-647.avif" alt="TikTok" width={20} height={20} />TikTok
          </a>
          <a href="https://x.com/dummy" target="_blank" style={{ ...styles.footerLink, color: "#fff", display: "flex", alignItems: "center", gap: "5px" }}>
            <Image src="/X_(formerly_Twitter)_logo_late_2025.svg" alt="X" width={20} height={20} />X
          </a>
        </div>
      </footer>
    </main>
  );
}

// STYLES
const styles = {
  page: { fontFamily: "Arial, Helvetica, sans-serif", margin: 0, padding: 0, transition: "all 0.3s ease" },
  header: { position: "sticky", top: 0, zIndex: 100, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" },
  navContainer: { maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px" },
  logoContainer: { display: "flex", alignItems: "center", gap: "10px" },
  logoCircle: { width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#fff" },
  logoText: { display: "flex", flexDirection: "column", lineHeight: "1" },
  nav: { display: "flex", gap: "20px" },
  navMobile: { display: "flex", flexDirection: "column", gap: "15px", position: "absolute", top: "70px", right: "20px", padding: "15px 25px", borderRadius: "8px", boxShadow: "0 5px 20px rgba(0,0,0,0.15)" },
  navLink: { textDecoration: "none", fontWeight: "700", fontSize: "1rem", padding: "10px 18px", borderRadius: "8px", transition: "all 0.3s ease" },
  hamburger: { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "25px", height: "20px", cursor: "pointer" },
  bar: { height: "3px", width: "100%", borderRadius: "3px" },

  hero: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", textAlign: "center" },
  heroContent: { maxWidth: "950px" },
  heroImages: { display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap" },
  title: { fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: "800", marginBottom: "25px", lineHeight: "1.2" },
  subtitle: { fontSize: "clamp(1.1rem, 2.8vw, 1.35rem)", lineHeight: "1.7", marginBottom: "40px" },
  buttons: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
  heroBtnWhite: { backgroundColor: "#fff", color: "#1E90FF", padding: "16px 36px", borderRadius: "40px", fontWeight: "700", fontSize: "1rem", textDecoration: "none", transition: "all 0.3s ease" },

  services: { padding: "80px 20px" },
  sectionTitle: { textAlign: "center", fontSize: "clamp(2rem, 4.5vw, 2.6rem)", marginBottom: "50px", fontWeight: "800" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" },
  serviceCard: { padding: "35px", borderRadius: "18px", boxShadow: "0 10px 28px rgba(0,0,0,0.1)" },
  cardTitle: { fontSize: "1.5rem", marginBottom: "20px", fontWeight: "700" },
  list: { paddingLeft: "20px", fontSize: "1.05rem", lineHeight: "1.9" },
  note: { marginTop: "50px", maxWidth: "950px", marginInline: "auto", textAlign: "center", fontSize: "1.1rem", lineHeight: "1.7", fontWeight: "500" },

  about: { padding: "80px 20px", textAlign: "center" },
  aboutContent: { display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" },
  aboutText: { maxWidth: "900px", fontSize: "1.1rem", lineHeight: "1.8" },

  howItWorks: { padding: "80px 20px", textAlign: "center" },
  steps: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem", fontWeight: "500" },
  step: { padding: "25px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" },

  testimonials: { padding: "80px 20px", textAlign: "center" },
  testimonialGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto" },
  testimonialCard: { padding: "25px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" },

  faq: { padding: "80px 20px", textAlign: "center" },
  faqGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto" },
  faqCard: { padding: "25px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)", lineHeight: "1.6" },

  footer: { padding: "40px 20px", textAlign: "center" },
  footerLinks: { marginTop: "15px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" },
  footerLink: { textDecoration: "none", fontWeight: "600" },
};
