import SidebarNav from "./components/SidebarNav";
import Dashboard from "./components/dashboard/Dashboard";

import { ThemeProvider } from "./context/Darktheme";
export default function App() {
  return (
    // <div className="w-full h-full flex flex-1  custom-class ">
    <ThemeProvider>
      <div className="outer w-full flex flex-row">
        {/* <Login/> */}
        {/* </div> */}
        <SidebarNav />
        <Dashboard/>
      </div>
    </ThemeProvider>
  );
}
