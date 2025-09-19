import React from "react";

const styles = {
  banner: {
    width: "100%",
    background: "linear-gradient(90deg, #1ec6e6 0%, #1e90e6 100%)",
    padding: "48px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  contentRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 900,
    padding: "0 32px",
    color: "#fff",
  },
  left: {
    flex: 1,
  },
  headline: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 12,
  },
  sub: {
    fontSize: 15,
    marginBottom: 18,
    color: "#e6f7fb",
  },
  avatarsRow: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #fff",
  },
  link: {
    color: "#fff",
    textDecoration: "underline",
    fontSize: 15,
    marginLeft: 8,
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  trialBtn: {
    background: "#fff",
    color: "#1e90e6",
    border: "none",
    borderRadius: 8,
    padding: "12px 32px",
    fontWeight: 700,
    fontSize: 16,
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(30,144,230,0.08)",
  },
};

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/46.jpg",
];

export default function TrialBanner() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "70px 100px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={styles.banner}>
        <div style={styles.contentRow}>
          <div style={styles.left}>
            <div style={styles.headline}>
              Grow your brand presence on social media{" "}
              <span role="img" aria-label="love">
                😍
              </span>
            </div>
            <div style={styles.sub}>Join with more 1200+ happy customers</div>
            <div style={styles.avatarsRow}>
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="avatar" style={styles.avatar} />
              ))}
            </div>
            <a style={styles.link} href="#">
              and others
            </a>
          </div>
          <div style={styles.right}>
            <button style={styles.trialBtn}>Get your trial now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
