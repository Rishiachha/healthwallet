import Sidebar from "../components/sidebar";

export default function Settings() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "30px" }}>
        <h1>Settings</h1>
        <p>Update your profile and app preferences.</p>
      </div>
    </div>
  );
}
