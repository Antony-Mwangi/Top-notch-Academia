"use client";

export default function HomePage() {
  return (
    <main style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Academic Writing & Research Services
          </h1>

          <p style={styles.subtitle}>
            Dear esteemed client, we are happy to inform you that we have
            expanded our team of Academic Writing and Research / Technical Experts.
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
    </main>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
  },

  hero: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f5132, #198754)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    color: "#fff",
    textAlign: "center",
  },

  heroContent: {
    maxWidth: "900px",
  },

  title: {
    fontSize: "3rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    lineHeight: "1.6",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  whatsappBtn: {
    background: "#25D366",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  emailBtn: {
    background: "#fff",
    color: "#198754",
    padding: "14px 26px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
