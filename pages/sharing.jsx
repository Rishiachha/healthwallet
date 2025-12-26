import Sidebar from "../components/sidebar";

export default function Sharing() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Sharing</h1>
        <p>Manage who can see and access your reports.</p>
      </div>
    </div>
  );
}
