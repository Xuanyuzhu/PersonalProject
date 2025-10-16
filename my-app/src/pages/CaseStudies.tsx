import BackHomeButton from "@/components/BackHomeButton";
import React, { useState } from "react";

const reports = [
  {
    title: "Cloud Migration for Retail E-Commerce",
    keywords: ["AWS", "IAM", "GuardDuty"],
    file: "/files/Cloud_Migration_for_Retail_E-Commerce.pdf",
    summary:
      "Migrated a traditional e-commerce architecture to AWS. Included IAM least privilege, GuardDuty, and auto-scaling design.",
  },
  {
    title: "DevOps & SRE at Standard Chartered Bank",
    keywords: ["SRE", "Pilot Teams", "Observability"],
    file: "/files/DevOps_And_SRE_at_Standard_Chartered_Bank.pdf",
    summary:
      "A case study on SCB's successful transformation using SRE practices including pilot deployment, leadership guidance, and community building.",
  },
  {
    title: "Cloud Migration Security Report for ATLAS",
    keywords: ["Azure", "Zero Trust", "Encryption"],
    file: "/files/Cloud%20Migration%20Security%20Report%20for%20ATLAS.pdf",
    summary:
      "Security architecture for cloud migration using Azure-native tools. Recommendations on identity, network, and compliance hardening.",
  },
  {
    title: "DR Strategy – Jurassic University",
    keywords: ["DRP", "Ransomware", "Moodle"],
    file: "/files/Group6-FinalReport-DRstrategy.pdf",
    summary:
      "Full-scale disaster recovery plan for Jurassic University, using BIA, DRaaS, immutable backups, and a 3-phase recovery timeline.",
  },
  {
    title: "Cloud DR Reflection Paper",
    keywords: ["GCP", "Failover", "Cloud Backup"],
    file: "/files/261_ZhuXuanyu_ReflectionPaper.pdf",
    summary:
      "Personal reflection on DRaaS choices among AWS, Azure, and GCP. Argues for a GCP-first DR architecture.",
  },
  {
    title: "Final Reflection Paper",
    keywords: ["Leadership", "DevOps Culture", "Continuous Learning"],
    file: "/files/Final%20Report.pdf",
    summary:
      "Reflections on leadership, SRE benefits, and communication practices based on real-world DevOps experience.",
  },
];

const posters = [
  {
    title: "Poster 1: BIA BCP DRP",
    image: "/files/BCP_Poster.png",
  },
  {
    title: "Poster 2: DR Strategy Overview",
    image: "/files/Disaster_Poster.png",
  },
];

const CaseStudies: React.FC = () => {
  const [openReport, setOpenReport] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* title */}
        <BackHomeButton />
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            📚 Case Studies Showcase
          </h1>
        </div>

        {/* Individual Reports*/}
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            📄 Individual Reports
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => setOpenReport(index)}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {report.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {report.keywords.map((keyword, i) => (
                    <span
                      key={i}
                      className="inline-block text-xs sm:text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {report.summary}
                </p>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
                  🔍 View More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Dialog */}
        {openReport !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {reports[openReport].title}
                </h2>
                <button
                  onClick={() => setOpenReport(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-700 mb-6">
                {reports[openReport].summary}
              </p>

              <a
                href={reports[openReport].file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition duration-200"
              >
                📥 Open Full Report (PDF)
              </a>
            </div>
          </div>
        )}

        {/* Capstone Posters 部分 */}
        <section className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            🎨 Capstone Posters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posters.map((poster, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col"
              >
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold text-gray-900">
                    {poster.title}
                  </h4>
                </div>
                <div className="flex-1 overflow-auto bg-gray-50 flex items-center justify-center">
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-auto object-contain p-2"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;
