"use client";

export default function HomePage() {
  return (
    <main style={styles.page}>
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Academic Writing & Research Services
          </h1>

          <p style={styles.subtitle}>
            We are pleased to inform you that we have expanded our team of
            Academic Writing and Research / Technical Experts to serve you better.
          </p>

          <div style={styles.buttons}>
            <a
              href="https://wa.me/254799890080"
              target="_blank"
              style={styles.whatsappBtn}
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:Topnotchacademia057@gmail.com"
              style={styles.emailBtn}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.services}>
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
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, Helvetica, sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff",
    color: "#212529",
  },

  /* HERO */
  hero: {
    minHeight: "100vh",
    backgroundColor: "#0f5132",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    color: "#ffffff",
  },

  heroContent: {
    maxWidth: "950px",
    textAlign: "center",
  },

  title: {
    fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
    fontWeight: "800",
    marginBottom: "25px",
    lineHeight: "1.2",
  },

  subtitle: {
    fontSize: "clamp(1.1rem, 2.8vw, 1.35rem)",
    lineHeight: "1.7",
    marginBottom: "40px",
    color: "#e6f4ea",
  },

  buttons: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  whatsappBtn: {
    backgroundColor: "#25D366",
    color: "#ffffff",
    padding: "16px 34px",
    borderRadius: "40px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
  },

  emailBtn: {
    backgroundColor: "#ffffff",
    color: "#0f5132",
    padding: "16px 34px",
    borderRadius: "40px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1rem",
  },

  /* SERVICES */
  services: {
    padding: "80px 20px",
    backgroundColor: "#f1f3f5",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(2rem, 4.5vw, 2.6rem)",
    marginBottom: "50px",
    color: "#0f5132",
    fontWeight: "800",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  serviceCard: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "18px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.1)",
  },

  cardTitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#198754",
    fontWeight: "700",
  },

  list: {
    paddingLeft: "20px",
    fontSize: "1.05rem",
    lineHeight: "1.9",
  },

  note: {
    marginTop: "50px",
    maxWidth: "950px",
    marginInline: "auto",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    color: "#212529",
    fontWeight: "500",
  },
};
