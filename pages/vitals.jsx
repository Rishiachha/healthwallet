import Sidebar from "../components/sidebar";

export default function Vitals() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Vitals</h1>
        <p>Track and manage your health vitals here.</p>
      </div>
    </div>
  );
}
