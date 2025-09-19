import React, { useState } from "react";
import ScheduleSection from "./ScheduleSection";
import HashtagPerformance from "./HashtagPerformance";
import TestimonialStats from "./TestimonialStats";
import TrialBanner from "./TrialBanner";
import Footer from "./Footer";

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #1ec6e6 0%, #1e90e6 100%)",
    fontFamily: "Inter, Arial, sans-serif",
    color: "#fff",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "32px 48px 0 48px",
    width: "100%",
    boxSizing: "border-box",
    position: "relative",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 32,
    cursor: "pointer",
    padding: 8,
    marginLeft: "auto",
    zIndex: 1001,
  },
  mobileNav: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(30,144,230,0.97)",
    zIndex: 1000,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 24,
    right: 32,
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: 40,
    cursor: "pointer",
    zIndex: 1002,
  },
  "@media (max-width: 700px)": {
    navLinks: {
      display: "none",
    },
    hamburger: {
      display: "block",
    },
    mobileNav: {
      display: "flex",
    },
  },
  logo: {
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: 1,
  },
  navLinks: {
    display: "flex",
    gap: 32,
    alignItems: "center",
    fontSize: 16,
  },
  loginBtn: {
    background: "linear-gradient(90deg, #1e90e6 0%, #1ec6e6 100%)",
    border: "none",
    borderRadius: 8,
    color: "#fff",
    padding: "10px 32px",
    fontWeight: 600,
    fontSize: 16,
    cursor: "pointer",
    marginLeft: 16,
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 24px",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: 1200,
    boxSizing: "border-box",
    gap: 32,
  },
  heroText: {
    maxWidth: 480,
  },
  headline: {
    fontSize: 48,
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 32,
    color: "rgba(255,255,255,0.85)",
  },
  ctaRow: {
    display: "flex",
    gap: 16,
  },
  ctaBtn: {
    background: "#fff",
    color: "#1e90e6",
    border: "none",
    borderRadius: 8,
    padding: "12px 28px",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
  },
  demoBtn: {
    background: "none",
    color: "#fff",
    border: "none",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "underline",
    cursor: "pointer",
  },
  dashboard: {
    position: "relative",
    background: "#fff",
    borderRadius: 24,
    boxShadow: "0 8px 32px rgba(30,144,230,0.12)",
    padding: 48,
    minWidth: 320,
    minHeight: 340,
    color: "#222",
    display: "flex",
    flexDirection: "column",
    gap: 24,
    flex: "1 1 400px",
    maxWidth: 600,
    boxSizing: "border-box",
  },
  card: {
    background: "#f7fafd",
    borderRadius: 16,
    padding: 24,
    boxShadow: "0 2px 8px rgba(30,144,230,0.08)",
    marginBottom: 16,
    minWidth: 180,
    minHeight: 100,
  },
  stat: {
    fontWeight: 700,
    fontSize: 28,
    color: "#1e90e6",
    marginBottom: 8,
  },
  statusRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 8,
  },
  statusTag: {
    background: "#e6f7fb",
    color: "#1e90e6",
    borderRadius: 12,
    padding: "4px 12px",
    fontWeight: 600,
    fontSize: 14,
  },
  chartBar: {
    height: 60,
    display: "flex",
    alignItems: "flex-end",
    gap: 8,
  },
  bar: {
    width: 12,
    background: "linear-gradient(90deg, #1e90e6 0%, #1ec6e6 100%)",
    borderRadius: 4,
  },
};

function DashboardMockup() {
  return (
    <div style={styles.dashboard}>
      <div style={styles.card}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>Overview</div>
        <div style={styles.chartBar}>
          <div style={{ ...styles.bar, height: 30 }} />
          <div style={{ ...styles.bar, height: 50 }} />
          <div style={{ ...styles.bar, height: 40 }} />
          <div style={{ ...styles.bar, height: 60 }} />
          <div style={{ ...styles.bar, height: 35 }} />
        </div>
      </div>
      <div style={styles.card}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>Ads Statuses</div>
        <div style={styles.statusRow}>
          <span style={styles.statusTag}>Active</span>
          <span style={styles.statusTag}>Need action</span>
          <span style={styles.statusTag}>Allocated</span>
          <span style={styles.statusTag}>Inactive</span>
          <span style={styles.statusTag}>Suspended</span>
        </div>
      </div>
      <div style={styles.card}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>20 Days</div>
        <div style={{ color: "#1e90e6", fontWeight: 600, fontSize: 14 }}>
          Average likes gained
        </div>
        <div style={{ fontSize: 12, color: "#1ec6e6", marginBottom: 8 }}>
          ↑ 10.5%
        </div>
        <div style={styles.chartBar}>
          <div style={{ ...styles.bar, height: 15 }} />
          <div style={{ ...styles.bar, height: 25 }} />
          <div style={{ ...styles.bar, height: 20 }} />
          <div style={{ ...styles.bar, height: 10 }} />
        </div>
      </div>
      <div style={styles.card}>
        <div style={styles.stat}>398K</div>
        <div style={{ color: "#888", fontWeight: 600 }}>Total Likes</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = (
    <>
      <span>Home</span>
      <span>Landings ▾</span>
      <span>Pages ▾</span>
      <span>Docs</span>
      <span>Help</span>
      <button style={styles.loginBtn}>Login</button>
    </>
  );

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={{ ...styles.logo, flex: "0 0 auto", textAlign: "left" }}>
          ehya
        </div>
        {/* Hamburger for mobile */}
        <button
          style={styles.hamburger}
          aria-label="Open menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
        {/* Desktop nav links */}
        <div
          style={{
            ...styles.navLinks,
            flex: "1 1 auto",
            justifyContent: "flex-end",
          }}
        >
          {navLinks}
        </div>
      </nav>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div style={styles.mobileNav}>
          <button
            style={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              fontSize: 28,
              color: "#fff",
              fontWeight: 700,
            }}
          >
            {navLinks}
          </div>
        </div>
      )}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <div style={styles.headline}>
            We help you
            <br />
            grow your bus
            <br />
            faster
          </div>
          <div style={styles.description}>
            Ehya is the Instagram analytics platform focused on the goals, track
            engagement, and grow your business.
          </div>
          <div style={styles.ctaRow}>
            <button style={styles.ctaBtn}>See how it works</button>
            <button style={styles.demoBtn}>Get a free demo →</button>
          </div>
        </div>
        <DashboardMockup />
      </section>
      <ScheduleSection />
      <HashtagPerformance />
      <TestimonialStats />
      <TrialBanner />
      <Footer />
    </div>
  );
}
