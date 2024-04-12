import { Archive, ArchiveX, Building, File, Inbox, LayoutDashboard, Send, Settings, ShipIcon, Trash2, User } from "lucide-react";
import { ModeToggle } from "./shared/DarkMode";
import { Nav } from "./sidebar/Nav";

const SidebarNav = () => {
  return (
    <div className="w-[14vw] flex flex-col gap-[1rem] border h-[100vh]">
      <ModeToggle />
      <div className="relative min-width-[80px] border-r px-3 pb-10 pt-24">
        <Nav
          isCollapsed={false}
          links={[
            {
              title: "Dashboard",
              linkTO:'/',
              icon: LayoutDashboard,
              variant: "ghost",
            },
            {
              title: "All Ships",
              linkTO:'/all-ships',
              icon: ShipIcon,
              variant: "ghost",
            },
            {
              title: "Companies",
             
              icon: Building,
              variant: "ghost",
            },
            {
              title: "Settings",
             
              icon: Settings,
              variant: "ghost",
            },
          
          ]}
        />
      </div>
    </div>
  );
};

export default SidebarNav;
