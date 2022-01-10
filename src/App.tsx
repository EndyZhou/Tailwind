import { useState } from "react";
import "./App.css";
import { Content } from "./pages/Content";
import { Sidebar } from "./pages/Sidebar";

export default function App() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Content
        onSidebarHide={() => {
          onSetShowSidebar(true);
        }}
      />
    </div>
  );
}
