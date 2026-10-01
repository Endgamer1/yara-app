import React from "react";
import { supabase } from "./supabase";

export default function App() {
  const [connected, setConnected] = React.useState(null);

  React.useEffect(() => {
    supabase.from("products").select("id", { count: "exact", head: true })
      .then(({ error }) => setConnected(!error));
  }, []);

  return (
    <div style={{ height: "100vh", position: "relative", background: "#101827" }}>
      <iframe
        title="Yara App"
        src="/yara-mobile.html"
        style={{ width: "100%", height: "100%", border: 0 }}
      />
      <div style={{ position: "fixed", bottom: 12, left: 12, zIndex: 5, padding: "7px 12px", borderRadius: 8, background: "#172033", color: "#d7e1f2", font: "12px Arial" }}>
        {connected === null ? "Connecting..." : connected ? "Connected to Supabase" : "Supabase connection error"}
      </div>
    </div>
  );
}
