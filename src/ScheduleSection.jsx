import React from "react";
// import laptopCalendar from "./assets/laptop-calendar.png";

const styles = {
  section: {
    width: "100vw",
    minHeight: "60vh",
    background: "linear-gradient(0deg, #f7fafd 0%, #fff 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 0 64px 0",
  },
  logosRow: {
    display: "flex",
    gap: 64,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 164,
    flexWrap: "wrap",
  },
  logo: {
    fontSize: 40,
    fontWeight: 700,
    color: "#b0b7c3",
    letterSpacing: 2,
    opacity: 0.85,
    padding: "8px 0",
    minWidth: 80,
    textAlign: "center",
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
  },
  heading: {
    fontSize: 32,
    fontWeight: 800,
    color: "#3a4a5e",
    marginBottom: 16,
  },
  desc: {
    fontSize: 16,
    color: "#7a8a9a",
    marginBottom: 24,
  },
  features: {
    listStyle: "none",
    padding: 0,
    marginBottom: 24,
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    color: "#6bb6e6",
    marginBottom: 10,
  },
  featureIcon: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    background: "#e6f7fb",
    color: "#1e90e6",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    marginRight: 10,
    fontSize: 14,
  },
  link: {
    color: "#1e90e6",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 16,
    display: "inline-block",
    marginTop: 8,
  },
  right: {
    flex: "1 1 400px",
    maxWidth: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
  },
  laptop: {
    background: "#222",
    borderRadius: "18px 18px 12px 12px / 18px 18px 24px 24px",
    boxShadow: "0 8px 32px rgba(30,144,230,0.10)",
    width: 340,
    height: 220,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
  },
  screen: {
    background: "#fff",
    borderRadius: 12,
    width: 300,
    height: 170,
    position: "absolute",
    top: 18,
    left: 20,
    boxShadow: "0 2px 8px rgba(30,144,230,0.08)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "16px 12px",
  },
  calendarHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 700,
    color: "#b0b7c3",
    fontSize: 13,
    marginBottom: 8,
  },
  calendarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
    gap: 4,
    height: "100%",
  },
  calendarCell: {
    background: "#f7fafd",
    borderRadius: 6,
    minHeight: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 600,
    color: "#1e90e6",
    overflow: "hidden",
  },
};

const logos = ["slack", "NETFLIX", "Google", "airbnb", "UBER"];

const features = [
  { text: "Best Time to Post", color: "#90a3b4" },
  { text: "Geolocation", color: "#90a3b4" },
  { text: "User Tag", color: "#90a3b4" },
  { text: "Others benefit", color: "#90a3b4" },
];

function CalendarMockup() {
  // Just a stylized grid, not a real calendar
  return (
    <div style={styles.laptop}>
      <div style={styles.screen}>
        <div style={styles.calendarHeader}>
          <span>MO</span>
          <span>TU</span>
          <span>WE</span>
          <span>TH</span>
          <span>FR</span>
        </div>
        <div style={styles.calendarGrid}>
          {/* Example cells with colored backgrounds/images */}
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#e6f7fb" }}>
            Scene
          </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#e6f7fb" }}>+</div>
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#f7fafd" }}> </div>
          <div style={{ ...styles.calendarCell, background: "#ffe5b4" }}> </div>
        </div>
      </div>
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section style={styles.section}>
      <div style={styles.logosRow}>
        {logos.map((logo, i) => (
          <span style={styles.logo} key={logo}>
            {logo}
          </span>
        ))}
      </div>
      <div style={styles.contentRow}>
        <div style={styles.left}>
          <div style={styles.heading}>
            Schedule Your Post
            <br />
            Whenever You Want
          </div>
          <div style={styles.desc}>
            Publish your content automatically to ensure that your content
            reaches the right people. Built-in features such as
          </div>
          <ul style={styles.features}>
            {features.map((f, i) => (
              <li
                style={{
                  ...styles.featureItem,
                  color: f.color ? f.color : styles.featureItem.color,
                }}
                key={f.text || f}
              >
                <span style={styles.featureIcon}>✓</span> {f.text || f}
              </li>
            ))}
          </ul>
          <a style={styles.link} href="#">
            Learn about scheduled post →
          </a>
        </div>
        <div style={styles.right}>
          <img
            src="https://www.shutterstock.com/image-photo/reminder-appointment-calendar-organizer-agenda-600nw-2345612773.jpg"
            alt="Calendar organizer"
            style={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
              borderRadius: 24,
              boxShadow: "0 8px 32px rgba(30,144,230,0.10)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
