// Solutions.tsx
import toolIcon from '../assets/toolIcon.png';
import caseStudyIcon from '../assets/caseStudyIcon.png';
import resourceIcon from '../assets/resourceIcon.png';

export const Solutions: React.FC = () => {
  const cards = [
    {
      title: 'Toolchain',
      icon: toolIcon,
      description: 'Explore our recommended DevOps tools and pipelines for modern development workflows.'
    },
    {
      title: 'Case Studies',
      icon: caseStudyIcon,
      description: 'Learn from real-world DevOps transformations across industries and teams.'
    },
    {
      title: 'Resources',
      icon: resourceIcon,
      description: 'Access whitepapers, webinars, and articles to deepen your DevOps knowledge.'
    }
  ];

  return (
    <section style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
      {cards.map((card, index) => (
        <div key={index} style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', flex: '1 1 250px' }}>
          <img src={card.icon} alt={card.title} style={{ width: '50px', marginBottom: '1rem' }} />
          <h4 style={{ marginBottom: '0.5rem' }}>{card.title}</h4>
          <p style={{ fontSize: '14px', color: '#555' }}>{card.description}</p>
        </div>
      ))}
    </section>
  );
};
