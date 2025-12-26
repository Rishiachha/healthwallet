import { useState } from "react";
import Layout from "../layout";
import "../styles/dashboard.css";

export default function Dashboard() {

  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // form values
  const [title, setTitle] = useState("");
  const [reportType, setReportType] = useState("");
  const [date, setDate] = useState("");

  // ⬇⬇⬇ UPLOAD HANDLER
  const handleUpload = async () => {

    if (!file) return alert("Select a file first");
    if (!title) return alert("Enter report title");
    if (!reportType) return alert("Select report type");
    if (!date) return alert("Select date");

    const form = new FormData();
    form.append("file", file);
    form.append("title", title);
    form.append("type", reportType);
    form.append("date", date);

    try {
      const res = await fetch("http://localhost:5000/api/reports", {
        method: "POST",
        body: form
      });

      if (!res.ok) throw new Error("Upload failed");

      alert("Report uploaded successfully 🎉");

      setShowUpload(false);
      setFile(null);
      setTitle("");
      setReportType("");
      setDate("");

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <Layout>

      <div className="dashboard-wrapper">

        {/* HEADER */}
        <div className="dashboard-header">
          <div>
            <h1>Good morning, John! 👋</h1>
            <p>Here’s an overview of your health status</p>
          </div>

          <button className="upload-btn" onClick={() => setShowUpload(true)}>
            + Upload Report
          </button>
        </div>

        {/* VITALS */}
        <h2 className="section-title">Your Vitals</h2>

        <div className="vitals-grid">

          <div className="vital-card">
            <p className="vital-label">Heart Rate</p>
            <p className="vital-value">72 <span>bpm</span></p>
          </div>

          <div className="vital-card">
            <p className="vital-label">Blood Pressure</p>
            <p className="vital-value">120/80 <span>mmHg</span></p>
          </div>

          <div className="vital-card">
            <p className="vital-label">Blood Sugar</p>
            <p className="vital-value">98 <span>mg/dL</span></p>
          </div>

          <div className="vital-card">
            <p className="vital-label">Oxygen Level</p>
            <p className="vital-value">98 <span>%</span></p>
          </div>

          <div className="vital-card">
            <p className="vital-label">Weight</p>
            <p className="vital-value">70 <span>kg</span></p>
          </div>

          <div className="vital-card">
            <p className="vital-label">Temperature</p>
            <p className="vital-value">98.6 <span>°F</span></p>
          </div>

        </div>

        {/* REPORT CARDS */}
        <h2 className="section-title">Recent Reports</h2>

        <div className="reports-grid">
          <div className="report-card">
            <h3>Annual Blood Work</h3>
            <p className="report-meta">Blood Test • Dec 15, 2024</p>

            <div className="tags">
              <span className="tag">Blood Sugar</span>
              <span className="tag">Cholesterol</span>
              <span className="tag">Hemoglobin</span>
            </div>

            <div className="report-actions">
              <button>👁 View</button>
              <button>⬇ Download</button>
            </div>
          </div>
        </div>

        {/* UPLOAD MODAL */}
        {showUpload && (
          <div className="modal-overlay">
            <div className="upload-modal">

              <div className="upload-header">
                <h3>Upload Health Report</h3>
                <button onClick={() => setShowUpload(false)}>×</button>
              </div>

              <p className="upload-sub">
                Upload securely — PDF, PNG, JPG up to 10MB.
              </p>

              {/* DROP ZONE */}
              <div
                className={`upload-drop ${dragActive ? "dragging" : ""}`}
                onClick={() => document.getElementById("fileInput").click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragActive(true);
                }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragActive(false);
                  if (e.dataTransfer.files?.[0]) setFile(e.dataTransfer.files[0]);
                }}
              >
                {!file && <p>Drag & drop your file here, or click to browse</p>}
                {file && <p><strong>{file.name}</strong> selected</p>}

                <small>PDF, PNG, JPG</small>

                <input
                  id="fileInput"
                  type="file"
                  hidden
                  accept=".pdf,.png,.jpg,.jpeg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              {/* TITLE */}
              <input
                className="modal-input"
                placeholder="Report Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              {/* TYPE */}
              <select
                className="modal-input"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">Select type</option>
                <option>Blood Test</option>
                <option>X-Ray</option>
                <option>ECG</option>
                <option>MRI</option>
                <option>CT Scan</option>
                <option>Prescription</option>
              </select>

              {/* DATE */}
              <input
                type="date"
                className="modal-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <div className="modal-actions">
                <button className="btn-cancel" onClick={() => setShowUpload(false)}>
                  Cancel
                </button>

                {/* IMPORTANT BUTTON */}
                <button
                  type="button"
                  className="btn-upload"
                  onClick={handleUpload}
                >
                  Upload Report
                </button>
              </div>

            </div>
          </div>
        )}

      </div>

    </Layout>
  );
}
