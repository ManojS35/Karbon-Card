import React from "react";

const styles = {
  section: {
    width: "100vw",
    background: "#f7fafd",
    padding: "64px 0 48px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 64,
    width: "100%",
    maxWidth: 1100,
    margin: "0 auto",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 320px",
    maxWidth: 400,
    padding: "0 24px",
    fontSize: 28,
    fontWeight: 800,
    color: "#1e2e50",
    marginBottom: 12,
  },
  leftDesc: {
    fontSize: 16,
    color: "#4a5a6a",
    marginTop: 12,
    marginBottom: 12,
  },
  right: {
    flex: "1 1 400px",
    maxWidth: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
  },
  quoteBox: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(30,144,230,0.08)",
    padding: "32px 24px",
    minWidth: 320,
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
    position: "relative",
  },
  quoteIcon: {
    fontSize: 32,
    color: "#1e90e6",
    marginBottom: 8,
  },
  stars: {
    color: "#ffc36b",
    fontSize: 18,
    marginBottom: 8,
  },
  quoteText: {
    fontSize: 15,
    color: "#4a5a6a",
    fontStyle: "italic",
    marginBottom: 16,
  },
  userRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    objectFit: "cover",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
  },
  userName: {
    fontWeight: 700,
    fontSize: 15,
    color: "#1e2e50",
  },
  userRole: {
    fontSize: 13,
    color: "#4a5a6a",
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#b0b7c3",
    opacity: 0.4,
    margin: "0 2px",
  },
  navDotActive: {
    background: "#1e90e6",
    opacity: 1,
  },
};

export default function TestimonialStats() {
  return (
    <section style={styles.section}>
      <div style={styles.contentRow}>
        <div style={styles.left}>
          Powering the growth of
          <br />
          100+ business & retailers in Indonesia.
          <div style={styles.leftDesc}>
            From single store, startups, to large multi-store brands.
          </div>
        </div>
        <div style={styles.right}>
          <div style={styles.quoteBox}>
            <div style={styles.quoteIcon}>“</div>
            <div style={styles.stars}>★★★★★</div>
            <div style={styles.quoteText}>
              "With Ehya, we're able to easily track our performance in full
              detail. It's become an essential tool for us to grow and engage
              with our audience."
            </div>
            <div style={styles.userRow}>
              <img
                style={styles.avatar}
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Jaquon Hart"
              />
              <div style={styles.userInfo}>
                <span style={styles.userName}>Jaquon Hart</span>
                <span style={styles.userRole}>
                  Digital Marketing Executive, Hypebeast
                </span>
              </div>
            </div>
            <div style={styles.navRow}>
              <span style={{ ...styles.navDot, ...styles.navDotActive }} />
              <span style={styles.navDot} />
              <span style={styles.navDot} />
              <span style={styles.navDot} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
