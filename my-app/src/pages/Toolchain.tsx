import React from 'react';
import BackHomeButton from '../components/BackHomeButton';

const tools = [
  {
    name: 'Terraform',
    description:
      'Used for Infrastructure as Code (IaC). Helps automate provisioning of cloud resources like VMs, VPCs, etc.',
    url: 'https://www.terraform.io/',
  },
  {
    name: 'Ansible',
    description:
      'Agentless configuration management tool. Often used after Terraform to configure provisioned infrastructure.',
    url: 'https://www.ansible.com/',
  },
  {
    name: 'Docker',
    description:
      'Containerization platform. Enables packaging apps and dependencies together into portable containers.',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Kubernetes',
    description:
      'Container orchestration system. Manages deployment, scaling, and networking of containers.',
    url: 'https://kubernetes.io/',
  },
  {
    name: 'GitHub Actions',
    description:
      'CI/CD tool integrated with GitHub. Enables automation for testing, building, and deploying code.',
    url: 'https://github.com/features/actions',
  },
  {
    name: 'Cloud Build',
    description:
      'Google Cloud’s CI/CD service. Executes builds on GCP infrastructure triggered by commits or events.',
    url: 'https://cloud.google.com/build',
  },
];

const Toolchain: React.FC = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <BackHomeButton />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>DevOps Toolchain Overview</h1>
      <p style={{ marginBottom: '2rem' }}>
        This toolchain represents the lifecycle of cloud-native DevOps, from infrastructure provisioning to configuration management, CI/CD, and monitoring.
      </p>

      {}
      <img
        src="/cloud1.drawio.png"
        alt="DevOps Flow"
        style={{ width: '100%', maxWidth: '600px', marginBottom: '2rem', border: '1px solid #ccc' }}
      />

      {/* 工具卡片列表 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {tools.map((tool) => (
          <div
            key={tool.name}
            style={{
              backgroundColor: '#f9f9f9',
              padding: '1rem 1.5rem',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            }}
          >
            <h2 style={{ marginBottom: '0.5rem' }}>{tool.name}</h2>
            <p style={{ marginBottom: '0.8rem', lineHeight: 1.6 }}>{tool.description}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                backgroundColor: '#1f2a48',
                padding: '0.4rem 0.8rem',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '0.9rem',
              }}
            >
              Visit Official Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolchain;
