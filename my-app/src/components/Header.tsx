// Header.tsx
export const Header: React.FC = () => {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Discover the World of DevOps From Today
      </h1>
      <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
        DevOps is a culture, set of practices, and toolchain that unites
        Development and Operations to enable continuous delivery, streamlined
        collaboration, and rapid innovation.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
  <a
    href="https://www.linkedin.com/in/xuanyu-z-0259521a9"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        padding: "0.5rem 1.2rem",
        marginRight: "1rem",
        background: "#3478f6",
        color: "white",
        border: "none",
        borderRadius: "5px",
      }}
    >
      WORK WITH ME
    </button>
  </a>

  <a
    href="https://continue.yorku.ca/programs/devops/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        padding: "0.5rem 1.2rem",
        border: "1px solid #3478f6",
        color: "#3478f6",
        borderRadius: "5px",
      }}
    >
      LEARN MORE
    </button>
  </a>
</div>
    </section>
  );
};
