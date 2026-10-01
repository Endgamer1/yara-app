import React from "react";
import { supabase } from "./supabase";

export default function App() {
  const [status, setStatus] = React.useState("Loading Yara app...");
  React.useEffect(() => {
    supabase.from("products").select("id", { count: "exact", head: true })
      .then(({ error }) => setStatus(error ? "Supabase connection error" : "Connected to Supabase"));
  }, []);
  return <div style={{height:"100vh",position:"relative"}}>
    <iframe title="Yara App" src="/yara-mobile.html" style={{width:"100%",height:"100%",border:0}} />
    <div style={{position:"fixed",bottom:12,left:12,zIndex:10,padding:"6px 10px",borderRadius:8,background:"#172033",color:"#d7e1f2",font:"12px Arial"}}>{status}</div>
  </div>;
}
