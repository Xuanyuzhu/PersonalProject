import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [toolchainOpen, setToolchainOpen] = useState(false);

  const toolLinks = [
    { name: "Terraform", url: "https://www.terraform.io/" },
    { name: "Ansible", url: "https://www.ansible.com/" },
    { name: "Docker", url: "https://www.docker.com/" },
    { name: "Kubernetes", url: "https://kubernetes.io/" },
    { name: "Jenkins", url: "https://www.jenkins.io/" },
    { name: "GitHub Actions", url: "https://github.com/features/actions" },
    { name: "Cloud Build", url: "https://cloud.google.com/build" },
  ];

  return (
    <aside
      style={{
        minWidth: "220px",
        maxWidth: "280px",
        width: "auto",
        background: "#1f2a48",
        color: "white",
        padding: "1rem",
        minHeight: "100vh",
      }}
    >
      <div
        className="logo"
        style={{ marginBottom: "2rem", fontWeight: "bold" }}
      >
        Xuanyu's DevOps Project
      </div>

      <nav
        className="nav"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <button onClick={() => navigate("/")} style={btnStyle}>
          Home
        </button>
        <button onClick={() => navigate("/what-is-devops")} style={btnStyle}>
          What Is DevOps?
        </button>

        <div style={btnFlexBtn}>
          <span
            onClick={() => navigate("/toolchain")}
            style={{ cursor: "pointer" }}
          >
            Recommended Toolchain
          </span>
          <span
            onClick={() => setToolchainOpen(!toolchainOpen)}
            style={{ cursor: "pointer" }}
          >
            {toolchainOpen ? "▼" : "▶"}
          </span>
        </div>

        {toolchainOpen && (
          <div
            style={{
              paddingLeft: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {toolLinks.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                {tool.name}
              </a>
            ))}
          </div>
        )}

        <button onClick={() => navigate("/case-studies")} style={btnStyle}>
          Case Studies
        </button>
        <button onClick={() => navigate("/about-me")} style={btnStyle}>
          About Me
        </button>
      </nav>

      <div className="socials" style={{ marginTop: "3rem" }}>
        <img
          src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f426.png"
          alt="Twitter"
          width={24}
        />
        <img
          src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f30d.png"
          alt="Globe"
          width={24}
          style={{ marginLeft: "0.5rem" }}
        />
      </div>
    </aside>
  );
};

// 原始按钮样式
const btnStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "1rem",
  textAlign: "left",
  cursor: "pointer",
};

// 带图标的按钮样式
const btnFlexBtn: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.25rem 0.5rem',
  width: '100%',             
  boxSizing: 'border-box',   
};


// 子项链接样式
const linkStyle: React.CSSProperties = {
  color: "#ccc",
  fontSize: "0.95rem",
  textDecoration: "none",
  marginLeft: "0.5rem",
};

export default Sidebar;
