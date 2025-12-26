import Sidebar from "../components/sidebar";

const Reports = () => {
  const reports = [
    {
      id: 1,
      title: "Annual Blood Work",
      type: "Blood Test",
      date: "Dec 15, 2024",
      tags: ["Blood Sugar", "Cholesterol", "Hemoglobin"],
    },
    {
      id: 2,
      title: "ECG Heart Report",
      type: "Cardiology",
      date: "Nov 5, 2024",
      tags: ["Heart Rate", "Rhythm", "Stress"],
    },
  ];

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <h2 className="page-title">Recent Reports</h2>

        <div className="reports-grid">
          {/* Report 1 */}
          <div className="report-card">
            <h3>Annual Blood Work</h3>
            <p className="type">Blood Test</p>
            <p className="date">Dec 15, 2024</p>

            <div className="tags">
              <span>Blood Sugar</span>
              <span>Cholesterol</span>
              <span>Hemoglobin</span>
            </div>

            <div className="actions">
              <button className="view-btn">👁 View</button>
              <button className="download-btn">⬇ Download</button>
            </div>
          </div>

          {/* Report 2 */}
          <div className="report-card">
            <h3>ECG Heart Report</h3>
            <p className="type">Cardiology</p>
            <p className="date">Nov 5, 2024</p>

            <div className="tags">
              <span>Heart Rate</span>
              <span>Rhythm</span>
              <span>Stress</span>
            </div>

            <div className="actions">
              <button className="view-btn">👁 View</button>
              <button className="download-btn">⬇ Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
