import React from "react";

const styles = {
  footer: {
    width: "100vw",
    background: "#18222c",
    color: "#fff",
    padding: "48px 0 24px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  topRow: {
    display: "flex",
    justifyContent: "center",
    gap: 64,
    width: "100%",
    maxWidth: 1100,
    marginBottom: 32,
    flexWrap: "wrap",
    boxSizing: "border-box",
  },
  col: {
    minWidth: 120,
    marginBottom: 16,
    boxSizing: "border-box",
  },
  colTitle: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 12,
  },
  colItem: {
    fontSize: 14,
    color: "#b0b7c3",
    marginBottom: 8,
    cursor: "pointer",
  },
  logoCol: {
    minWidth: 180,
    marginBottom: 16,
    boxSizing: "border-box",
  },
  logo: {
    fontWeight: 700,
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 12,
  },
  socialRow: {
    display: "flex",
    gap: 12,
    marginBottom: 16,
    flexWrap: "wrap",
  },
  socialIcon: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "#222b36",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    cursor: "pointer",
    marginBottom: 8,
  },
  heart: {
    color: "#1ec6e6",
    fontSize: 28,
    margin: "24px 0 8px 0",
    textAlign: "center",
  },
  copyright: {
    color: "#b0b7c3",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 0,
  },
  // Responsive overrides
  "@media (max-width: 700px)": {
    topRow: {
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      maxWidth: "100%",
      padding: "0 12px",
    },
    col: {
      minWidth: "auto",
      width: "100%",
      marginBottom: 24,
      alignItems: "center",
      textAlign: "center",
    },
    logoCol: {
      minWidth: "auto",
      width: "100%",
      marginBottom: 24,
      alignItems: "center",
      textAlign: "center",
    },
    socialRow: {
      justifyContent: "center",
      gap: 16,
      marginBottom: 16,
    },
    socialIcon: {
      width: 32,
      height: 32,
      fontSize: 20,
      marginBottom: 12,
    },
    logo: {
      fontSize: 28,
    },
  },
};

const product = [
  "Landingspage",
  "Features",
  "Documentation",
  "Referral Program",
  "Pricing",
];
const services = [
  "Documentation",
  "Design",
  "Themes",
  "Illustrations",
  "UI Kit",
];
const company = ["About", "Terms", "Privacy Policy", "Careers"];
const more = ["Documentation", "License", "Changelog"];

export default function Footer() {
  const socialSvgs = [
    // Google
    <svg
      width="20"
      height="20"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M44.5 20H24V28.5H35.7C34.3 32.6 30.6 35.5 26 35.5C20.2 35.5 15.5 30.8 15.5 25C15.5 19.2 20.2 14.5 26 14.5C28.3 14.5 30.4 15.3 32.1 16.7L37.2 11.6C34.1 8.9 30.3 7.5 26 7.5C15.8 7.5 7.5 15.8 7.5 26C7.5 36.2 15.8 44.5 26 44.5C36.2 44.5 44.5 36.2 44.5 26C44.5 24.7 44.4 22.9 44.5 20Z"
          fill="#4285F4"
        />
        <path
          d="M24 44.5C30.3 44.5 35.7 41.2 38.7 36.3L31.1 30.2C29.6 31.1 27.9 31.5 26 31.5C20.2 31.5 15.5 26.8 15.5 21C15.5 15.2 20.2 10.5 26 10.5C28.3 10.5 30.4 11.3 32.1 12.7L37.2 7.6C34.1 4.9 30.3 3.5 26 3.5C15.8 3.5 7.5 11.8 7.5 22C7.5 32.2 15.8 40.5 26 40.5Z"
          fill="#34A853"
        />
        <path
          d="M44.5 20H24V28.5H35.7C34.3 32.6 30.6 35.5 26 35.5C20.2 35.5 15.5 30.8 15.5 25C15.5 19.2 20.2 14.5 26 14.5C28.3 14.5 30.4 15.3 32.1 16.7L37.2 11.6C34.1 8.9 30.3 7.5 26 7.5C15.8 7.5 7.5 15.8 7.5 26C7.5 36.2 15.8 44.5 26 44.5C36.2 44.5 44.5 36.2 44.5 26C44.5 24.7 44.4 22.9 44.5 20Z"
          fill="#FBBC05"
        />
        <path
          d="M44.5 20H24V28.5H35.7C34.3 32.6 30.6 35.5 26 35.5C20.2 35.5 15.5 30.8 15.5 25C15.5 19.2 20.2 14.5 26 14.5C28.3 14.5 30.4 15.3 32.1 16.7L37.2 11.6C34.1 8.9 30.3 7.5 26 7.5C15.8 7.5 7.5 15.8 7.5 26C7.5 36.2 15.8 44.5 26 44.5C36.2 44.5 44.5 36.2 44.5 26C44.5 24.7 44.4 22.9 44.5 20Z"
          fill="#EA4335"
        />
      </g>
    </svg>,
    // Twitter
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 12 8.5c0 .34.04.67.1.99C8.09 9.36 4.8 7.7 2.67 5.13c-.37.64-.58 1.38-.58 2.17 0 1.5.77 2.82 1.94 3.59-.72-.02-1.4-.22-1.99-.55v.06c0 2.1 1.49 3.85 3.47 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.11 2.94 3.97 2.97A8.6 8.6 0 0 1 2 19.54c-.34 0-.67-.02-1-.06A12.13 12.13 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"
        fill="#1DA1F2"
      />
    </svg>,
    // Instagram
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#E1306C" />
      <circle cx="12" cy="12" r="5" fill="#fff" />
      <circle cx="12" cy="12" r="3" fill="#E1306C" />
      <circle cx="17" cy="7" r="1" fill="#fff" />
    </svg>,
    // LinkedIn
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#0077B5" />
      <rect x="6" y="9" width="2" height="7" fill="#fff" />
      <rect x="11" y="9" width="2" height="7" fill="#fff" />
      <circle cx="7" cy="7" r="1" fill="#fff" />
      <rect x="16" y="13" width="2" height="3" fill="#fff" />
    </svg>,
  ];
  return (
    <footer style={styles.footer}>
      <div style={styles.topRow}>
        <div style={styles.logoCol}>
          <div style={styles.logo}>ehya</div>
          <div>Build a modern and creative website with crealand</div>
          <div style={styles.socialRow}>
            {socialSvgs.map((icon, i) => (
              <span key={i} style={styles.socialIcon}>
                {icon}
              </span>
            ))}
          </div>
        </div>
        <div style={styles.col}>
          <div style={styles.colTitle}>Product</div>
          {product.map((item) => (
            <div key={item} style={styles.colItem}>
              {item}
            </div>
          ))}
        </div>
        <div style={styles.col}>
          <div style={styles.colTitle}>Services</div>
          {services.map((item) => (
            <div key={item} style={styles.colItem}>
              {item}
            </div>
          ))}
        </div>
        <div style={styles.col}>
          <div style={styles.colTitle}>Company</div>
          {company.map((item) => (
            <div key={item} style={styles.colItem}>
              {item}
            </div>
          ))}
        </div>
        <div style={styles.col}>
          <div style={styles.colTitle}>More</div>
          {more.map((item) => (
            <div key={item} style={styles.colItem}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.heart}>♥</div>
      <div style={styles.copyright}>Copyright © 2021. Crafted with love.</div>
    </footer>
  );
}
