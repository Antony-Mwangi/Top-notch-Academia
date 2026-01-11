"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={styles.page}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <Image src="/LOGO.webp" alt="TopNotch Academia Logo" width={150} height={50} />
          </div>

          {isMobile ? (
            <>
              <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
                <div style={styles.bar}></div>
              </div>

              {menuOpen && (
                <nav style={styles.navMobile}>
                  <a href="#services" style={styles.navLink} onClick={() => setMenuOpen(false)}>Services</a>
                  <a href="#about" style={styles.navLink} onClick={() => setMenuOpen(false)}>About Us</a>
                  <a href="#howitworks" style={styles.navLink} onClick={() => setMenuOpen(false)}>How It Works</a>
                  <a href="#contact" style={styles.navLink} onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
              )}
            </>
          ) : (
            <nav style={styles.nav}>
              <a href="#services" style={styles.navLink}>Services</a>
              <a href="#about" style={styles.navLink}>About Us</a>
              <a href="#howitworks" style={styles.navLink}>How It Works</a>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Academic Writing & Research Services</h1>
          <p style={styles.subtitle}>
            We are pleased to inform you that we have expanded our team of
            Academic Writing and Research / Technical Experts to serve you better.
          </p>
          <div style={styles.buttons}>
            <a href="https://wa.me/254799890080" target="_blank" style={styles.heroBtnGreen}>WhatsApp Us</a>
            <a href="mailto:Topnotchacademia057@gmail.com" style={styles.heroBtnWhite}>Email Us</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.services}>
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.servicesGrid}>
          {/* NON-TECHNICAL */}
          <div style={styles.serviceCard}>
            <h3 style={styles.cardTitle}>Non-Technical Services</h3>
            <ul style={styles.list}>
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

          {/* TECHNICAL */}
          <div style={styles.serviceCard}>
            <h3 style={styles.cardTitle}>Technical Services</h3>
            <ul style={styles.list}>
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
        <p style={styles.note}>
          ✔ We provide authentic and original papers that are free from plagiarism
          of any kind (including AI), delivered at affordable rates and within
          intended timelines.
        </p>
      </section>

      {/* ABOUT US */}
      <section id="about" style={styles.about}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.aboutText}>
          TopNotch Academia is a team of dedicated academic writers and technical experts committed to delivering high-quality, plagiarism-free work. Our goal is to provide timely, affordable, and professional assistance tailored to your academic and technical needs.
        </p>
        <div style={styles.aboutPoints}>
          <div style={styles.point}>🎯 Expertise in multiple subjects</div>
          <div style={styles.point}>⏱️ On-time delivery</div>
          <div style={styles.point}>💡 Original and creative solutions</div>
          <div style={styles.point}>🤝 Client-focused approach</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howitworks" style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          <div style={styles.step}>1️⃣ Contact Us via WhatsApp or Email</div>
          <div style={styles.step}>2️⃣ Discuss Your Requirements</div>
          <div style={styles.step}>3️⃣ Receive Your Customized Work</div>
          <div style={styles.step}>4️⃣ Review & Feedback</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={styles.footer}>
        <p>© 2026 TopNotch Academia. All Rights Reserved.</p>
        <div style={styles.footerLinks}>
          <a href="https://wa.me/254799890080" target="_blank" style={styles.footerLink}>WhatsApp</a>
          <a href="mailto:Topnotchacademia057@gmail.com" style={styles.footerLink}>Email</a>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: { fontFamily: "Arial, Helvetica, sans-serif", margin: 0, padding: 0, backgroundColor: "#fff", color: "#212529" },

  /* HEADER */
  header: { position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 100, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" },
  navContainer: { maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 20px" },
  logo: { display: "flex", alignItems: "center" },
  nav: { display: "flex", gap: "20px" },
  navMobile: { display: "flex", flexDirection: "column", gap: "15px", position: "absolute", top: "70px", right: "20px", backgroundColor: "#ffffff", padding: "15px 25px", borderRadius: "8px", boxShadow: "0 5px 20px rgba(0,0,0,0.15)" },
  navLink: { textDecoration: "none", color: "#0f5132", fontWeight: "700", fontSize: "1rem", padding: "10px 18px", borderRadius: "8px", transition: "all 0.3s ease" },
  hamburger: { display: "flex", flexDirection: "column", justifyContent: "space-between", width: "25px", height: "20px", cursor: "pointer" },
  bar: { height: "3px", width: "100%", backgroundColor: "#0f5132", borderRadius: "3px" },

  /* HERO */
  hero: { minHeight: "100vh", backgroundColor: "#0f5132", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px", color: "#fff", textAlign: "center" },
  heroContent: { maxWidth: "950px" },
  title: { fontSize: "clamp(2.2rem, 5vw, 3.2rem)", fontWeight: "800", marginBottom: "25px", lineHeight: "1.2" },
  subtitle: { fontSize: "clamp(1.1rem, 2.8vw, 1.35rem)", lineHeight: "1.7", marginBottom: "40px", color: "#e6f4ea" },
  buttons: { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" },
  heroBtnGreen: { backgroundColor: "#25D366", color: "#fff", padding: "16px 36px", borderRadius: "40px", fontWeight: "700", fontSize: "1rem", textDecoration: "none", transition: "all 0.3s ease" },
  heroBtnWhite: { backgroundColor: "#fff", color: "#0f5132", padding: "16px 36px", borderRadius: "40px", fontWeight: "700", fontSize: "1rem", textDecoration: "none", transition: "all 0.3s ease" },

  /* SERVICES */
  services: { padding: "80px 20px", backgroundColor: "#f1f3f5" },
  sectionTitle: { textAlign: "center", fontSize: "clamp(2rem, 4.5vw, 2.6rem)", marginBottom: "50px", color: "#0f5132", fontWeight: "800" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", maxWidth: "1200px", margin: "0 auto" },
  serviceCard: { backgroundColor: "#ffffff", padding: "35px", borderRadius: "18px", boxShadow: "0 10px 28px rgba(0,0,0,0.1)" },
  cardTitle: { fontSize: "1.5rem", marginBottom: "20px", color: "#198754", fontWeight: "700" },
  list: { paddingLeft: "20px", fontSize: "1.05rem", lineHeight: "1.9" },
  note: { marginTop: "50px", maxWidth: "950px", marginInline: "auto", textAlign: "center", fontSize: "1.1rem", lineHeight: "1.7", color: "#212529", fontWeight: "500" },

  /* ABOUT */
  about: { padding: "80px 20px", backgroundColor: "#e6f4ea", textAlign: "center" },
  aboutText: { maxWidth: "900px", margin: "0 auto 40px", fontSize: "1.1rem", lineHeight: "1.8", color: "#212529" },
  aboutPoints: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto", fontSize: "1rem", fontWeight: "600" },
  point: { backgroundColor: "#ffffff", padding: "20px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" },

  /* HOW IT WORKS */
  howItWorks: { padding: "80px 20px", backgroundColor: "#f1f3f5", textAlign: "center" },
  steps: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem", fontWeight: "500" },
  step: { backgroundColor: "#ffffff", padding: "25px", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.08)" },

  /* FOOTER */
  footer: { padding: "40px 20px", backgroundColor: "#0f5132", color: "#ffffff", textAlign: "center" },
  footerLinks: { marginTop: "15px", display: "flex", justifyContent: "center", gap: "25px" },
  footerLink: { color: "#ffffff", textDecoration: "none", fontWeight: "600" },
};
