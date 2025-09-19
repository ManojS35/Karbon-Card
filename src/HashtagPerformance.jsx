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
  heading: {
    fontSize: 28,
    fontWeight: 800,
    color: "#1e2e50",
    marginBottom: 12,
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
    color: "#4a5a6a",
    marginBottom: 32,
    textAlign: "center",
    lineHeight: 1.6,
  },
  cardsRow: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 16,
  },
  card: {
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(30,144,230,0.08)",
    padding: "32px 24px",
    minWidth: 200,
    maxWidth: 220,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 18,
  },
  cardTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#1e2e50",
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: "#4a5a6a",
  },
};

const features = [
  {
    title: "Hashtag Growth",
    desc: "Follow a hashtag growth total posts, videos and images.",
    color: "#ff6b6b",
    icon: "📈",
  },
  {
    title: "Influencers by Hashtag",
    desc: "Identify the most influential people posting with your hashtag.",
    color: "#4a90e2",
    icon: "👑",
  },
  {
    title: "Most Influential Post",
    desc: "See the most influential posts on hashtag you are following on.",
    color: "#ffc36b",
    icon: "⭐",
  },
  {
    title: "Hashtag Location",
    desc: "Visualize where people are posting using your hashtag made.",
    color: "#2ed8c3",
    icon: "📍",
  },
];

export default function HashtagPerformance() {
  return (
    <section style={styles.section}>
      <div style={styles.heading}>Track any hashtag(s) Performance</div>
      <div style={styles.desc}>
        Don’t waste time on search manual tasks. Let Automation do it for you.
        <br />
        Simplify workflows, reduce errors, and save time.
      </div>
      <div style={styles.cardsRow}>
        {features.map((f, i) => (
          <div style={styles.card} key={f.title}>
            <div
              style={{
                ...styles.icon,
                background: f.color + "22",
                color: f.color,
              }}
            >
              {f.icon}
            </div>
            <div style={styles.cardTitle}>{f.title}</div>
            <div style={styles.cardDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
