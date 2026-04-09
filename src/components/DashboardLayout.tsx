import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { Bell, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/turnover": "Turnover Risk",
  "/diversity": "Diversity Metrics",
  "/recruitment": "Recruitment Pipeline",
  "/alerts": "Anomaly Alerts",
  "/pipeline": "Data Pipeline",
  "/settings": "Settings",
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full transition-colors duration-500">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-14 flex items-center justify-between border-b border-border/50 px-4 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <h2 className="text-sm font-semibold">{title}</h2>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => navigate("/alerts")}
                className="relative p-2 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <Bell className="h-4 w-4 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
              </button>
              <button
                onClick={() => navigate("/auth")}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                title="Sign out"
              >
                <LogOut className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
